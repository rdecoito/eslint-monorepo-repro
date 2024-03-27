# Setting up

1. Open VSCode and open this monorepo as a folder
2. Make sure the eslint vscode extension is installed
3. Have rush globally installed `npm i -g @microsoft/rush`
4. Run `rush install` anywhere in the repo

# Things to note

The `projects/application-1` project is a simple React application created with `npm create vite@latest`. This project has an `eslint.config.js` flat config file in its root, which in turn imports a configuration from the `projects/eslint-config` project. That project exports a flat config array.

# Reproducing the issue

1. Open up the `projects/application-1/src/App.tsx` file in VS Code 
2. You should see a red squiggle under the `const foo` declaration due to a rule violation, but you do not - this is a bug
    - The foo declaration violates the `@typescript-eslint/no-unused-vars` rule, which you can see configured in `projects/eslint-config/profile/web-app.js`
    - The `const _` declaration is not a violation of this rule and should not have an error
4. cd into the `projects/application-1` directory and run `rushx lint` to execute the lint script from package.json
    - You will see the appropriate error printed by eslint, confirming that the configuration is valid
    - You can also directly run eslint if you want `./node_modules/.bin/eslint src/`
