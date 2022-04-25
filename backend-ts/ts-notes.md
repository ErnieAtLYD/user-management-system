# Notes on migrating the backend from JS to TS

npm install typescript --save-dev
npm install ts-node --save-dev
npm install -g typesync

- Best practice looks like most express TS projects move things into a src folder

- create tsconfig.json

tsc -b -v or tsc -b -v -i -w
tsc --build --verbose --incremental --watch

had a version of a knex config file that used imports but had trouble

a lot of it related to modules (require versus import/export)

As you start converting more .ts files you see some warnings from VS Code that function params are set to "any" - they can be more specific

- [How to Convert Node.js Code from JavaScript to TypeScript](https://javascript.plainenglish.io/how-to-convert-node-js-code-from-javascript-to-typescript-8e7d031a8f49)
