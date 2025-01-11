Playwright Framework

This repository contains a Playwright framework setup for automated testing, designed for seamless, efficient, and scalable test execution.

Project Folder Structure

Project Folder
├── node_modules
└── src
    ├── config
    ├── pages
    ├── testdata
    └── tests
├── playwright-report
│   ├── .eslintrc.json
│   ├── readme.md
│   ├── .gitignore
│   ├── package-lock.json
│   ├── package.json
│   ├── playwright.config.ts
│   ├── tsconfig.json
├── .github
│   └── workflows
│       └── main.yml

Folder and File Descriptions

Root Files:

.gitignore: Specifies files and directories that Git should ignore.

package-lock.json & package.json: Manage project dependencies and metadata.

playwright.config.ts: Configuration file for Playwright, including test settings.

tsconfig.json: TypeScript configuration file for compiler options.

Directories:

node_modules: Stores Node.js modules installed via npm.

playwright-report: Contains Playwright-generated test reports.

src: Contains core implementation files:

config: Holds log files and environment-specific configurations.

pages: Page Object Model (POM) files representing application pages.

testdata: Stores test data in formats such as JSON and CSV.

tests: Houses the test scripts written in TypeScript.

utils: Utility functions, such as logging and encryption tools.

test-results: Stores test execution results, including screenshots, traces, and videos.

.github/workflows: Contains CI/CD pipeline configurations with GitHub Actions.

Getting Started

Prerequisites

Node.js (v16 or higher)

npm (Node Package Manager)

Installation

Clone the repository:

git clone <repository-url>
cd <repository-name>

Install dependencies:

npm install

Run tests:

npm test

View test reports:
Navigate to the playwright-report directory to access detailed test reports.

Usage

Test Scripts: Explore the src/tests folder for example test cases.

Reports: Open playwright-report/index.html for interactive test results.

Configuration: Modify playwright.config.ts to customize settings such as browser, viewport, and retries.

Data Management: Add or modify test data in the src/testdata directory.

Continuous Integration

This project supports GitHub Actions for automated testing. The workflow is defined in .github/workflows/main.yml. Push your changes to the repository, and the tests will run automatically on every commit.

Contributing

We welcome contributions! To contribute:

Fork the repository and create a new branch for your feature or bugfix.

Follow the established coding style and guidelines.

Submit a pull request with a detailed description of your changes.

Found an Issue?

If you encounter a bug or have suggestions, please open an issue in the repository. We appreciate your feedback!

License

This project is licensed under the MIT License. Feel free to use, modify, and distribute this project as per the license terms.

Contact

For further information or inquiries, reach out via the repository’s issues or discussions section.
