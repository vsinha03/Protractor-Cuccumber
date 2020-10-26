import {browser, Config} from "protractor";
import * as reporter from "cucumber-html-reporter";

const { use: chaiUse } = require ('chai');


export let config: Config = {
    //baseUrl: 'https://demoqa.com',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    //directConnect:true,
    framework:'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    //restartBrowserBetweenTests: true,
    getPageTimeout: 60000,
    capabilities: {
      browserName: 'chrome'
    },
    chromeOptions: {
        args: [
            '--disable-extension',
            '--ignore-ssl-errors',
            //'--headless true'
        ],
    },
    specs: [
        '../features/*.feature',

    ],
    cucumberOpts: {
        //tags:['@file'],
        format:'json:./reports/json/testReport.json',
        require: [
          './features/stepDefinations/*.js',
          './features/support/timeout.js'
        ]
      },
    onPrepare() {
        chaiUse(require('chai-as-promised'));
        browser.manage().window().maximize();
        return browser.waitForAngularEnabled(false);

    },
    onComplete: () =>{
        const options = {
          theme: 'bootstrap',
          jsonFile: './reports/json/testReport.json',
          output: './reports/testReport.html',
          reportSuiteAsScenarios: true,
          launchReport: true,
          metadata: {
              "Browser": "Chrome",
          }
      };
   
      reporter.generate(options);


      }

  
  
  };
  