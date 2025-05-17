# Next.js Tailwind TypeScript Boilerplate Setup

This guide walks you through setting up a Next.js application using TypeScript, Tailwind CSS, Prettier, ESLint, Husky, Lint-Staged, and CommitLint. With these tools in place, your development workflow will include automatic linting, formatting, and standardized commit messages.

## Step-by-Step Setup

### 1. Create a New Next.js App

Start by creating a new Next.js app with TypeScript, ESLint, and Tailwind CSS using the `create-next-app` CLI.

```bash
npx create-next-app
```

Answer the prompts that follow and select yes for TypeScript, ESLint, and Tailwind CSS.

### 2. Install Dependencies

Open the project in your preferred text editor and install the necessary dependencies:

```bash
npm install
```

### 3. Install Prettier

Next, install Prettier, which is responsible for code formatting:

```bash
npm install --save-dev --exact prettier
```

### 4. Configure ESLint with Prettier

To ensure ESLint doesn't conflict with Prettier, install the `eslint-config-prettier` plugin:

```bash
npm install --save-dev eslint-config-prettier
```

Then, update your `eslint.config.mjs` file to extend `eslint:recommended` and `prettier`:

```mjs
const eslintConfig = [
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript",
    "eslint:recommended",
    "prettier",
  ),
];
```

### 5. Set Up Prettier Configuration

Create a `.prettierrc` file with the following formatting rules:

```bash
node --eval "fs.writeFileSync('.prettierrc', '{\n  \"arrowParens\": \"avoid\",\n  \"bracketSameLine\": false,\n  \"printWidth\": 80,\n  \"semi\": true,\n  \"singleQuote\": false,\n  \"tabWidth\": 2\n}')"
```

You can adjust these settings based on your personal preferences.

### 6. Create `.prettierignore` File

Create a `.prettierignore` file to prevent formatting in build or coverage directories:

```bash
node --eval "fs.writeFileSync('.prettierignore', '# Ignore artifacts:\nbuild\ncoverage\n')"
```

### 7. Add Prettier Format Script

Add a script to your `package.json` to run Prettier and format your code:

```json
"scripts": {
  "format": "prettier . --write --ignore-path .gitignore",
}
```

Now, run the formatting command:

```bash
npm run format
```

This will format your code according to the Prettier rules.

### 8. Update ESLint Command

Update the ESLint linting command to also automatically fix errors and enforce TypeScript type checking:

```json
"scripts": {
  "lint": "next lint . --fix",
  "check-types": "tsc --noEmit --pretty",
}
```

### 9. Set Up Husky

Install Husky to manage pre-commit hooks. Husky will run `npm run format && npm run lint` on every commit to ensure your code is both formatted and linted before it gets committed.

```bash
npm install --save-dev husky
npx husky init
```

### 10. Configure Pre-Commit Hook with Lint-Staged

Install lint-staged to optimize pre-commit hook so it processes only staged files.

#### Install lint-staged

```bash
npm install --save-dev lint-staged
```

#### Add lint-staged Configuration

Configure `lint-staged` by creating a `lint-staged.config.js` file with the following content:

```js
module.exports = {
  "*": ["npm run format", "npm run lint"],
  "**/*.ts?(x)": () => "npm run check-types",
};
```

#### Update Husky Pre-Commit Hook

Modify your `.husky/pre-commit` file to use `lint-staged`:

```bash
npx lint-staged
```

### 11. Install CommitLint

Install CommitLint and its conventional configuration to enforce standardized commit messages:

```bash
npm install --save-dev @commitlint/cli @commitlint/config-conventional
```

### 12. Configure CommitLint

Create a `commitlint.config.ts` file to use the conventional commit message format:

```bash
echo "module.exports = { extends: ['@commitlint/config-conventional'] };" > commitlint.config.ts
```

### 13. Set Up Commit Message Linting

Create a `commit-msg` hook in Husky to run CommitLint on every commit:

```bash
echo "npx --no -- commitlint --edit \$1" > .husky/commit-msg
```

### 14. Configure ESLint Rules

Add your desired custom ESLint rules, such as disallowing `console` logs and enforcing module imports:

```json
"rules": {
  "import/no-unresolved": "error",
  "no-console": [
    "error",
    {
      "allow": ["warn", "error"]
    }
  ]
}
```

This setup will ensure that `console.log` statements are treated as errors (with `warn` and `error` being allowed).

---

## Conclusion

By following these steps, you'll have a Next.js boilerplate with TypeScript, Tailwind CSS, Prettier, ESLint, Husky, and CommitLint, all integrated into your workflow. This setup will ensure that your code is consistently formatted, free from linting errors, and follows standardized commit messages—making your development process smoother and more maintainable.

Happy coding!
