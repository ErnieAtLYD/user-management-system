const FormInput = ({
  name,
  type = 'text',
  defaultVal,
  label,
  isRequired = false,
  onChange = false,
}) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        type={type}
        name={name}
        placeholder={label}
        value={defaultVal}
        onChange={onChange}
        required={isRequired}
      />
    </>
  );
};

export default FormInput;
