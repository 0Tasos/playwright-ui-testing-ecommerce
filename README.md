# Testing with Playwright for E-commerce Playground

## Overview

This project is an end-to-end suite for an e-commerce Playground application, built with **Playwright** and **TypeScript**. It includes ESLint for linting and Prettier for consistent code formatting.

## Prerequisites
- Node.js
- npm

## Installation
Install the dependencies:
```sh
npm install
```

Then Playwright
```sh
npx playwright install
```

## Running Tests
Run all tests and automatically open the Allure report:
```sh
npm test
```

## Generate Report
Generate Report using:
```sh
npx allure serve allure-results
```

## Linting
Run ESLint to check for code quality issues:
```sh
npm run lint
```

To automatically fix issues, use:
```sh
npm run lint:fix
```

## Formatting
To format the code using Prettier:
```sh
npm run format
```

## Project Structure

- **tests**: Contains the spec files for the tests.
- **models**: Contains the page object models for each page and component.
- **config**: Contains reusable test data and configuration.
- **.eslint.config.mjs**: ESLint configuration file.
- **.prettierrc**: Prettier configuration file.
- **tsconfig.json**: TypeScript configuration file.
- **package.json**: Project metadata and dependencies.
- **playwright.config.ts**: Playwright configuration (base URL, browsers, reporters).
- **config/fixture.ts**: Custom Playwright fixtures for test setup.

## GitLab CI/CD Integration
This project includes a .gitlab-ci.yml file configured to run tests in GitLab CI. 
The CI/CD pipeline automatically installs dependencies and executes the Playwright test suite.


