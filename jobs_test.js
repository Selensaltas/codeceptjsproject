const jobspage = require("./pages/jobspage");
const loginpage = require("./pages/loginpage");

Feature('Job search');

Scenario('Login and validate jobs page',  ({I}) => {
    I.amOnPage('/');
    I.click("Accept");
    loginpage.logIn(loginpage.username, loginpage.password);
    I.waitForNavigation();
    jobspage.clickOnJobsTab();
    jobspage.fillLocationAndSearch();
    jobspage.selectFirstJobAndCopyLink();
    I.openNewTab();
    jobspage.pasteCopiedJobLink();
});
