import AllureReporter from "@wdio/allure-reporter";
import { general } from "./locators";

class ClientsPage {

    async addClientWithRequiredFields(surname: string, name: string, gender: number, email: string, phone: number, dob: string): Promise<void> {
        AllureReporter.startStep(`Adding client with required fields`); 
        await (await general.addClientBtn).click();
        await (await general.addUserModal).waitForDisplayed();
        await (await general.surnameField).setValue(surname);
        AllureReporter.addStep(`Surname ${surname} is added`);
        await (await general.usernameField).setValue(name);
        AllureReporter.addStep(`User name ${name} is added`);
        await browser.pause(1000);
        if (gender === 1) {
            await (await general.maleRatio).click();
            AllureReporter.addStep(`Male gender is selected`);
        } else {
            await (await general.femaleRatio).click();
            AllureReporter.addStep(`Male gender is selected`);
        }
        await browser.pause(1000);
        await (await general.emailField).setValue(email);
        AllureReporter.addStep(`Email ${email} is added`);
        await (await general.phonenumberField).setValue(phone);
        AllureReporter.addStep(`Phone Number ${phone} is added`);
        await (await general.dobField).setValue(dob);
        AllureReporter.addStep(`Date of birth = ${dob} is added`);
        await (await general.saveClientBtn).click();
        await browser.pause(2000);
        await browser.acceptAlert();
        await browser.pause(1000);
        console.log('New Client is added');
        AllureReporter.endStep();
    }
}; 

export const clientPage = new ClientsPage();