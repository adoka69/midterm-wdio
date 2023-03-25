
export const loginElements = {
    get loginForm() { return $(`.form`)},
    get loginField() { return $('[name="userName"]')},
    get passwordField() { return $('[name="password"]')},
    get enterButton() { return $('.auth-btn')},
    get loadingScreen() { return $('.auth-btn')},
    get logoutBtn() { return $('//i[@class="material-icons"]')},
}

export const general = {
    elementByText(text: string) { return $(`//*[contains(text(),"${text}")]`)},
    get logo() { return $('.crm-logo__link')},
    get addClientBtn() { return $('.clients-add-user-dialog.crm-button')},
    get addUserModal() { return $('.add-user-modal')},
    get surnameField() { return $('//input[@formcontrolname="userSurname"]')},
    get usernameField() { return $('//input[@formcontrolname="userName"]')},
    get maleRatio() { return $('(//*[@class="mat-radio-label-content"])[1]')},
    get femaleRatio() { return $('(//*[@class="mat-radio-label-content"])[2]')},
    get emailField() { return $('//input[@formcontrolname="email"]')},
    get phonenumberField() { return $('//input[@formcontrolname="phone"]')},
    get dobField() { return $('//input[@formcontrolname="birthday"]')},
    get saveClientBtn() { return $('//button[@name="save"]')},

    get clientsTable() { return $('.crm-navigator-table')},
    get clientViewModal() { return $('.modal-window.user')},
    get companyViewModal() { return $('.modal-window.company')},
    clientsRow(row: number) { return $(`(//*[@class="crm-navigator-table__row ng-star-inserted"])[${row}]`)},

    get surnameViewField() { return $('//input[@placeholder="Фамилия"]')},
    get usernameViewField() { return $('//input[@placeholder="Имя"]')},
    get dobViewField() { return $('//input[@placeholder="Дата рождения"]')},
    get phoneViewField() { return $('.client.tel')},
    get emailViewField() { return $('.client.email')},

    get closeClientView() { return $('//div[@class="close"]')},
}   