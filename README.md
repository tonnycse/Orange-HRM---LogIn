Playwright Framework
This repository contains a Playwright framework setup for automated testing. The framework is structured as follows:

Project Folder Structure
Project Folder
├── node_modules
└── src
       ├── config
       ├── pages
       ├── testdata
       └── tests
├─ playwright-report
│ .eslintrc.json
│ readme.md
│ .gitignore
│ package-lock.json
│ package.json
│ playwright.config.ts
│ tsconfig.json
├─ .github
│        └── workflows
│                 └── main.yml

Description
.gitignore: Specifies intentionally untracked files to ignore in Git.
package-lock.json and package.json: Node.js package files specifying project dependencies.
playwright.config.ts: Configuration file for Playwright settings.
tsconfig.json: TypeScript compiler options file.
.github
.github/workflows/main.yml: GitHub Actions workflow file for continuous integration.
node_modules
Directory containing Node.js modules installed by npm.
playwright-report
Directory for storing Playwright test reports.
src
Directory for API-related scripts.
config
Directory for log files generated during test execution.
pages
Page object files representing different pages of the application under test.
testdata
Directory containing test data files in various formats, such as JSON and CSV.
tests
Directory for test scripts written in TypeScript.
utils
Directory for utility scripts used in testing, such as encryption and logging utilities.
test-results
Directory for storing test execution results, including screenshots, trace files, and videos.
Usage
Clone the repository and install dependencies using npm install.
Run tests using npm test.
View test reports in the playwright-report directory.
Explore source code files for detailed implementation.
Contributing
Contributions are welcome! Please follow the established coding style and guidelines. If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

License
This project is licensed under the MIT License.