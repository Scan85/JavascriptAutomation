let myStepDefinitionsWrapper = function () {

    this.Given(/^I have a browser website$/, function (callback) {
        callback.pending();
    });

    this.When(/^I am on amazon$/, function (callback) {
        callback.pending();
    });

    this.Then(/^I should see the search text box$/, function (callback) {
        callback.pending();
    });

    this.When(/^I search for my given suggestion$/, function (callback) {
        callback.pending();
    });

    this.Then(/^I see different results for my suggestions$/, function (callback) {
        callback.pending();
    });

    this.When(/^I click on a result$/, function (callback) {
        callback.pending();
    });

    this.Then(/^I see the result product page$/, function (callback) {
        callback.pending();
    });
};
module.exports = myStepDefinitionsWrapper;
