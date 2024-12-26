# Rte Design System

Librairy for sharing Rte design system components

**For Developers**

## Installation

If you want to build this project

```shell
  npm install
  npm run build
```

## In your app

```shell
  npm i rte-design-system-react
```

### Prettier

The project has a ready-to-use Prettier configuration but it is not applied as a pre-commit hook. Therefore, it is essential to configure your default formatter for the project as follows to apply our formatting rules:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

### TailwindCSS Intellisense in classBuilder files

To benefit from class auto-completion in classBuilder files, the following attributes must be added to the Visual Studio Code user configuration:

```json
  "tailwindCSS.experimental.classRegex": [
    ["(?:Classes|CLASSES|CLASS) \\=([^;]*);", "'([^']*)'"]
  ],
```
