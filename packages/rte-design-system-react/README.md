# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## VS Code recommendations configuration

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
