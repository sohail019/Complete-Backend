## NPM Understanding

- NPM (Node Package Manager) is a package manager for JavaScript and is the default package manager for Node.js.
- It allows developers to install, share, and manage dependencies in their projects.

### Difference between Modules and Packages

- **Module:**

  - A module is a single file or a directory that can be loaded by Node.js.
  - It can export functions, objects, or variables to be used in other files.
  - Modules are typically created using the `module.exports` syntax.

- **Package:**
  - A package is a collection of related modules that are bundled together.
  - It usually contains a `package.json` file that describes the package, its dependencies, and other metadata.
  - Packages can be published to the NPM registry for others to use.

### Installing package from NPM

- To install a package from NPM, use the following command in the terminal:

  ```bash
  npm install <package-name>
  ```

  or

  ```bash
  npm i <package-name>
  ```

- This command will download the package and its dependencies into the `node_modules` directory of your project.

### Uninstall package from NPM

- To uninstall a package, use the following command:

  ```bash
  npm uninstall <package-name>
  ```

- This command will remove the package from the `node_modules` directory and update the `package.json` file accordingly.

### Dependencies

- Dependencies are packages that your project relies on to function correctly.
- They are listed in the `package.json` file under the `dependencies` section.

### DevDependencies

- DevDependencies are packages that are only needed during development and testing.
- They are listed in the `package.json` file under the `devDependencies` section.
