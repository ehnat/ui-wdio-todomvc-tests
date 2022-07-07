#-- IN PROGRESS -- 

## ui-wdio-todomvc-tests

### Run tests:
`npm run test:env1` (other configurations: `package.json` -> `scripts`)

- npx wdio run tests/config/wdio.conf.ts --env=env1
- npx wdio run tests/config/wdio.conf.ts --suite exampleSuiteName

### Allure Reporter:
https://webdriver.io/docs/allure-reporter

### Retry tests:
Retry tests in Mocha:
1) https://webdriver.io/docs/retry/#rerun-suites-in-mocha - setting in every test or `mochaOpts.retries` in `wdio.conf.js`,
2) https://webdriver.io/docs/options/#connectionretrycount - another setting in `wdio.conf.js`{{ (`capabilities` > `connectionRetryCount`)}},
3) https://webdriver.io/docs/configurationfile - `specFileRetries` option
   
Do/don't stop testing after failure:
1) webdriver option https://webdriver.io/docs/organizingsuites#stop-testing-after-failure
2) mocha option https://stackoverflow.com/questions/63993402/how-to-stop-the-test-running-if-one-of-the-it-sections-fails :
   `mochaOpts: {
   bail: false
   },`

Useful information:
- don't use `foreach` in asynchronous code: https://gist.github.com/joeytwiddle/37d2085425c049629b80956d3c618971 


### Bumping up dependencies

To update a specific dependency, it's best to use npm install with a specific version, example:
`npm install chromedriver@103.0.0 --dev`
This will automatically bump up the version in package.json, package-lock.json and yarn.lock.

A useful library for checking dependency updates: [npm-check-updates](https://www.npmjs.com/package/npm-check-updates)

