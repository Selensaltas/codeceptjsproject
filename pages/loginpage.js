const { I } = inject();

class LoginPage {
    constructor() {
        this.userNameField = '#username';
        this.userPasswordField = '#password';
        this.signInButtonHeader = '.nav__button-secondary';
        this.signInButtonForm = '.btn__primary--large';
        this.username = process.env.LINKEDIN_USERNAME;
        this.password = process.env.LINKEDIN_PASSWORD;
    }

    logIn(username, password) {
        I.click(this.signInButtonHeader);
        I.fillField(this.userNameField, username);
        I.fillField(this.userPasswordField, password);
        I.click(this.signInButtonForm);
    }
}

module.exports = new LoginPage();