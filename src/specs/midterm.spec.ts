import AllureReporter from "@wdio/allure-reporter";
import { loginPage } from "../pageObjects/loginPage";
import { credentials } from "../testData/login";
import { clientPage } from "../pageObjects/clients";
import { clientRequiredFields } from "../testData/clients";
import { general } from "../pageObjects/locators";

describe(`Midterm basic suite`, async () => {

    it(`Login to Midterm app`, async () => {
        AllureReporter.addSeverity('Blocker');
        await loginPage.login(credentials.login, credentials.password);
        await loginPage.logout();
    });

    it(`Create new client with required fields`, async () => {
        AllureReporter.addSeverity('Critical');
        await loginPage.login(credentials.login, credentials.password);
        await clientPage.addClientWithRequiredFields(clientRequiredFields.surname, clientRequiredFields.name, 1, clientRequiredFields.email,
            clientRequiredFields.phone, clientRequiredFields.dob);
        await loginPage.logout();
    });

    it(`View new client with required fields`, async () => {
        AllureReporter.addSeverity('Critical');
        AllureReporter.startStep(`Check new client data`)
        await loginPage.login(credentials.login, credentials.password);
        await (await general.clientsTable).waitForDisplayed();
        await (await general.clientsRow(1)).click();
        await (await general.clientViewModal).waitForDisplayed();
        console.log(await (await general.surnameViewField).getValue());
        console.log(await (await general.usernameViewField).getValue());
        console.log(await (await general.dobViewField).getValue());
        console.log(await (await general.phoneViewField).getValue());
        console.log(await (await general.emailViewField).getValue());
        expect(await (await general.surnameViewField).getValue()).toEqual(clientRequiredFields.surname);
        AllureReporter.addStep(`Expected ${await (await general.surnameViewField).getValue()} is equal to ${clientRequiredFields.surname}`);
        expect(await (await general.usernameViewField).getValue()).toEqual(clientRequiredFields.name);
        AllureReporter.addStep(`Expected ${await (await general.usernameViewField).getValue()} is equal to ${clientRequiredFields.name}`);
        expect(await (await general.dobViewField).getValue()).toEqual('1/1/1981');
        AllureReporter.addStep(`Expected ${await (await general.dobViewField).getValue()} is equal to ${clientRequiredFields.dob}`);
        expect(await (await general.phoneViewField).getValue()).toEqual('996' + clientRequiredFields.phone);
        AllureReporter.addStep(`Expected ${await (await general.phoneViewField).getValue()} is equal to ${clientRequiredFields.phone}`);
        expect(await (await general.emailViewField).getValue()).toEqual(clientRequiredFields.email);
        AllureReporter.addStep(`Expected ${await (await general.emailViewField).getValue()} is equal to ${clientRequiredFields.email}`);
        await (await general.closeClientView).click();
        await loginPage.logout();
        AllureReporter.endStep();
    });

    it.skip(`Edit client data with required fields`, async () => {
        AllureReporter.addSeverity('Critical');
        AllureReporter.startStep(`Edit client data`)
        await loginPage.login(credentials.login, credentials.password);
        await (await general.clientsTable).waitForDisplayed();
        await (await general.clientsRow(1)).click();
        await (await general.clientViewModal).waitForDisplayed();
        // unable to save changes 
        AllureReporter.endStep();
    });

    it(`View any company `, async () => {
        AllureReporter.addSeverity('Minor');
        await loginPage.login(credentials.login, credentials.password);
        await (await general.clientsTable).waitForDisplayed();
        await (await general.elementByText('Юр.лица')).waitForDisplayed();
        await (await general.elementByText('Юр.лица')).click();
        await (await general.clientsRow(1)).click();
        await (await general.companyViewModal).waitForDisplayed();
        //Air Company name is displayed 
        await (await general.elementByText('Air company')).waitForDisplayed();
        await (await general.closeClientView).click();
        await loginPage.logout();
    })
});
