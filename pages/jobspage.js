const { I } = inject();

class JobsPage {

    constructor() {
        this.jobsIcon = '.global-nav__primary-item:nth-child(3)';
        this.locationField = 'City, state, or zip code';
        this.searchButton = 'Search';
        this.firstJobOnList = 'ul.scaffold-layout__list-container li.jobs-search-results__list-item:first-child';
        this.arrowIconDropDownList = '.artdeco-dropdown.artdeco-dropdown--placement-bottom.artdeco-dropdown--justification-right.ember-view';
        this.copyLinkOnDropdownList = '.social-share__item--copy-link';
        this.copyLinkSuccessMessageBox = 'Link copied to clipboard.';
    }

    clickOnJobsTab() {
        I.click(this.jobsIcon);
        I.waitForNavigation();
    }

    fillLocationAndSearch(location) {
        I.fillField(this.locationField, 'Milan, Lombardy, Italy');
        I.pressKey('Enter');
    }

    selectFirstJobAndCopyLink() {
        I.click(this.firstJobOnList);
        I.click(this.arrowIconDropDownList);
        I.waitForClickable(this.copyLinkOnDropdownList);
        I.click(this.copyLinkOnDropdownList);
        I.see(this.copyLinkSuccessMessageBox);
    }

    pasteCopiedJobLink() {
            I.click('browser');
            I.pressKey(['Control', 'v']);
            I.pressKey('Enter');
            I.waitForNavigation();
            //I.getPageUrl();
    };
}

module.exports = new JobsPage();