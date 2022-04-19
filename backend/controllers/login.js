const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

/**
 * Helper function to sign token
 * @param {object} obj - the object to be tokenized
 * @returns {string} The signed JWT token
 */
const signToken = (obj) =>
  jwt.sign(obj, process.env.JWT_SECRET, { expiresIn: '24h' });

/**
 * Given a user object, return an object that has
 * just enough information for the payload; their
 * user ID. No encryption yet, and we should only
 * return non-mutable things such as ids and roles.
 * @param {object} user
 * @return {object}
 */
const getPayloadObjFromUser = (user) => {
  const { id, username } = user;
  return { id, username };
};

// FIXME: change to promises for consistency
exports.login = async (req, res, next) => {
  try {
    // any validation should go here
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    // password is from the login page
    // user.password is the hashed password from the database
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(400).send('Invalid credentials');
    }

    // if we get here, we have a valid user
    // but remember, we don't want to send the password back
    delete user.password;

    res.status(200).json({
      user,
      token: signToken(getPayloadObjFromUser(user)),
    });
  } catch (err) {
    next(err);
  }
};

/**
 * GET /api/users/current
 * Gets information about the currently logged in user. It should all be
 * in req.user, which we set in the auth middleware.
 *
 * If no valid JWT is provided, this route will respond with 401 Unauthorized.
 * Expected headers: { Authorization: "Bearer JWT_TOKEN_HERE" }
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
exports.getCurrentUser = (req, res, next) => {
  // If our code gets here, it went through our middleware
  // first so we should have our username of the logged in user
  // via req.user.
  User.findOne({ username: req.user.username }).then((user) => {
    delete user.password;
    // Respond with the user data (except password)
    return res.json(user);
  });
};
