# Next.js Tailwind TypeScript Linting Boilerplate

A starter boilerplate with **Next.js**, **TypeScript**, **Tailwind CSS**, **Prettier**, **ESLint**, **Husky**, **Lint-Staged**, and **CommitLint** — designed to help you write consistent, clean, and maintainable code with a smooth development workflow.

## 🚀 What's Inside

- **[TypeScript](https://www.typescriptlang.org/)** – static type checking for JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** – utility-first CSS framework
- **[Prettier](https://prettier.io/)** – consistent code formatting
- **[ESLint](https://eslint.org/)** – pluggable JavaScript/TypeScript linter
- **[Husky](https://typicode.github.io/husky/)** – Git hooks made easy
- **[Lint-Staged](https://www.npmjs.com/package/lint-staged)** – run scripts on staged files
- **[CommitLint](https://commitlint.js.org/)** – enforce conventional commit messages

This setup enforces consistent code style, prevents common errors, and keeps your commit history clean—streamlining your development workflow.

## 🧱 Pages Router & App Router

This boilerplate supports both routing strategies:

- **Pages Router setup**: see [`pages-router-setup/`](./pages-router-setup/)
- **App Router setup**: see [`app-router-setup/`](./app-router-setup/)

Both folders include the same development tooling and configuration. Choose the one that fits your project needs.

## 🎯 Get Started

### Prerequisites

- Node.js 18+ installed on your machine
- Git installed
- Your preferred code editor (VS Code recommended)

### Installation

1. **Clone the repository**

```bash
   git clone https://github.com/Timonwa/next-tailwind-ts-linting-boilerplate.git
   cd next-tailwind-ts-linting-boilerplate
```

2. **Choose your routing strategy**

   Navigate to either the Pages Router or App Router setup:

```bash
   # For Pages Router
   cd pages-router-setup
   
   # OR for App Router
   cd app-router-setup
```

3. **Install dependencies**

```bash
   npm install
```

4. **Start the development server**

```bash
   npm run dev
```

5. **Open your browser**

   Visit [http://localhost:3000](http://localhost:3000) to see your app running!

### What Happens Next?

- **Pre-commit hooks** will automatically lint and format your code when you commit
- **Commit messages** will be validated to follow conventional commit standards
- **TypeScript** will check for type errors as you code
- **ESLint** will catch potential bugs and enforce code quality
- **Prettier** will format your code consistently

### Customization

Feel free to customize the configuration files to match your preferences:

- **ESLint rules**: `eslint.config.mjs`
- **Prettier settings**: `.prettierrc`
- **TypeScript config**: `tsconfig.json`
- **Commit message rules**: `commitlint.config.ts`

## 📚 Resources

### Official Documentation

- [Next.js Documentation](https://nextjs.org/docs) – Learn about Next.js features and API
- [TypeScript Documentation](https://www.typescriptlang.org/docs/) – TypeScript handbook and reference
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) – Utility classes and customization
- [ESLint Documentation](https://eslint.org/docs/latest/) – Linting rules and configuration
- [Prettier Documentation](https://prettier.io/docs/en/) – Code formatting options

### Helpful Guides

- [Next.js Learn Course](https://nextjs.org/learn) – Interactive Next.js tutorial
- [Conventional Commits](https://www.conventionalcommits.org/) – Commit message specification
- [Husky Documentation](https://typicode.github.io/husky/) – Git hooks setup and usage
- [TypeScript with React](https://react-typescript-cheatsheet.netlify.app/) – React TypeScript patterns

### Understanding This Setup

Want to know how this boilerplate was built from scratch? Check out [`GUIDE.md`](./GUIDE.md) for a detailed step-by-step walkthrough of every tool and configuration.

### Community & Support

- **Issues**: Found a bug or have a suggestion? [Open an issue](https://github.com/Timonwa/next-tailwind-ts-linting-boilerplate/issues)
- **Email**: For other inquiries, contact [sales@timonwa.com](mailto:sales@timonwa.com)

## ⭐ Show Your Support

If this boilerplate helped you save time and build better applications, please give it a star! It helps other developers discover this resource.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ by [Timonwa](https://github.com/Timonwa)
