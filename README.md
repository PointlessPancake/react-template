This project follows [Semantic Versioning 2.0.0](https://semver.org/) and [Conventional Commits](https://www.conventionalcommits.org/). 

## Installation

To install dependencies:

```bash
yarn install
```

## Development

To start the development server with Vite:

```bash
yarn dev
```

This will start a local development server, typically at http://localhost:5173.

## Building for production

To build the React application for production:

```bash
yarn build
```

This will create optimized production files in the `dist` directory.

## Additional scripts

```bash
# Lint code
yarn lint

# Preview production build locally
yarn preview
```

## Commit convention

Format: `type(scope)!: description`

Where:
- Both `(scope)` and `!` are optional
- Add `!` for breaking changes

Examples:
- `feat: add search functionality`
- `fix(auth): make username comparison case insensitivity`
- `style(api)!: enforce strict endpoints naming conventions`

### Type

Must be one of the following:
* **build**: Changes that affect the build system or external dependencies
* **chore**: Regular maintenance tasks that don't modify src or test files
* **ci**: Changes to our CI configuration files and scripts
* **docs**: Documentation only changes
* **feat**: A new feature
* **fix**: A bug fix
* **perf**: A code change that improves performance
* **refactor**: A code change that neither fixes a bug nor adds a feature
* **revert**: Reverting a previous commit
* **style**: Changes that don't affect code meaning
* **test**: Adding or correcting tests