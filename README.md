# FLYBUYS website  - Test Automation suite

This automation framework suite automates the flybuys website and validates the website

## Description

This is a cypress automation suite framework where it automates the FLYBUYS website and validates the homepage from the website and validates input from the extras menu.

## Pre- requisites

NodeJS needs to be installed on the system. Check if it is installed by running command 'node --version' it can be any latest version that's fine.

NPM needs to be installed on the system. Check if this is installed by running the command `npm --version` latest version is fine.

Refer [NodeJS Downloads](https://nodejs.org/en/download/) to download NodeJS for your system.

# Running the automation suite

##Clone the project from GitHUB using command : git clone https://github.com/f-hansie/LoyaltyCypressAssessment.git

```javascript

/* First, Install the needed packages */
npm install

##commands to Execute the Tests

- To run the tests on Cypress test runner, execute the commnand: ./node_modules/.bin/cypress open
- This will launch or open Cypress test runner dashboard
- Select ETE Testing
- Select browser to run test from i.e Chrome or Electron
- Then click start ete testing
- Then go to specs folder - click the 'home-page-spec.cy.js' to run the test
- The tests will start executing on the left of the window it will show the results on the tests
 it runs and if the test fails it will highlight in red and the error caused the test to fail.
- On the right or in the middle of the screen it will lauch the website page and all display all the actions written from the tests. 







