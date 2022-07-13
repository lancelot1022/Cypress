class BranchesPage {

    private pnlBranch: string = "app-branch";
    private cardBranch: string = 'app-branch-card';

    constructor() {
    }

    verifyNewBranch = (name: string): BranchesPage => {
        let exists = false;
        cy.get(this.cardBranch).each(($el) => {
            cy.then(() => {
                if(exists) {
                    return 
                }
                cy.wrap($el.find('span').text()).then((title) => {
                    if(title.trim === name.trim) {
                        cy.log("Branch is added!");
                        exists = true;
                    };
                });
            });
        });
        return this;
    }

    isDisplayed = (): BranchesPage => {
        cy.get(this.pnlBranch)
        .should('be.visible')
        return this;
    }
}

export default BranchesPage;