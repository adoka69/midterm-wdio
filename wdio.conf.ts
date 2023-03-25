import type { Options } from "@wdio/types";

export const config: Options.Testrunner = {
    autoCompileOpts: {
        autoCompile: true,
        tsNodeOpts: {
            transpileOnly: true,
            project: "src/tsconfig.json",
        },
    },

    bail: 0,
    logLevel: "error",
    waitforTimeout: 60000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ["chromedriver"],

    specs: [],

    suites: {
        demo: ["src/specs/midterm.spec.ts"],
    },

    exclude: [
        // 'path/to/excluded/files'
    ],

    maxInstances: 10,

    capabilities: [
        {
            maxInstances: 1,
            browserName: "chrome",
            acceptInsecureCerts: true,
            "goog:chromeOptions": {
                args: [
                    //"--headless",
                    // '--maximizeWindow',
                    "--window-size=1920,1080",
                    "--disable-extensions",
                ],
            },
        },
    ],

    framework: "mocha",
    mochaOpts: {
        ui: "bdd",
        timeout: 60000,
        retries: 0,
    },

    reporters: [
        [
            "spec",
            {
                addConsoleLogs: true,
                showPreface: false,
            },
        ],
        [
            "allure",
            {
                outputDir: "allure-results",
                disableWebdriverStepsReporting: true,
            },
        ],
    ],

    // -------------------- Hooks -----------------------------------

    before: async function (capabilities, specs) {
        await browser.setWindowSize(1920, 1080);
    },

    afterTest: async function (
        test,
        context,
        { error, result, duration, passed, retries }
    ) {
        if (error) {
            await browser.takeScreenshot();
        }
        if (test.pending) {
            return;
        }
    },

    after: async () => {

    },

};
