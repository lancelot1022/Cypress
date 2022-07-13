class AdminPage {
    private pnlAdmin: string = "app-admin";
    private pnlScheduleList: string = 'app-schedule-list';
    private pnlCinemaList: string = "app-cinema-list";
    private lblMaintainModule: string = "label";
    private drpModule: string = 'select';

    //Branch elements
    private cardBranch: string = 'app-branch-card';
    private btnAddBranch: string = 'Add Branch';
    private txtBranchName: string = "input[formcontrolname='name']";
    private txtBranchAddress: string = "textarea[formcontrolname='address']";
    private txtBranchSearchBox: string = '#txtSearchBranch';
    private lnkBackToList: string = "a[href='/admin/branch']";

    //Cinema elements
    private btnAddCinema: string = 'Add Cinema';
    private txtCinemaName: string = "input[placeholder='Cinema name']";

    //Movie elements
    private btnAddMovieSched: string = 'Add Movie Schedule';
    private drpMovieList: string = "select[name='movie']";
    private txtStartDate: string = "input[name='startDate']";
    private txtTimeHr: string = "input[aria-label='Hours']";
    private txtTimeMin: string = "input[aria-label='Minutes']";
    private txtTicketPrice: string = "input[name='ticketPrice']";
    private cardMovieSched: string = 'app-schedule-card';

    //View Cinema elements
    private btnViewSchedules: string = 'View Schedules';
    private drpCinemaList: string = "select[name='cinema']";

    private btnAdd: string = 'Add';
    private drpSearchList: string = "[role='listbox']";

    constructor() {
    }

    selectModule = (module: string): AdminPage => {
        cy.get(this.drpModule).select(module);
        return this;
    }

    verifyBranchDisplayed = (): AdminPage => {
        cy.get(this.cardBranch).its('length')
        .should('be.gt', 0);
        return this;
    }

    clickAddBranches = (): AdminPage => {
        cy.contains('button', this.btnAddBranch).click();
        return this;
    }

    enterBranchName = (branchName: string): AdminPage => {
        cy.get(this.txtBranchName).type(branchName);
        return this;
    }

    enterBranchAddress = (branchAddress: string): AdminPage => {
        cy.get(this.txtBranchAddress).type(branchAddress);
        return this;
    }

    clickAdd = (): AdminPage => {
        cy.contains('button', this.btnAdd).click();
        return this;
    }

    searchCreatedBranch = (name: string): AdminPage => {
        cy.get(this.txtBranchSearchBox).type(name);
        cy.get(this.drpSearchList).first().click();
        return this;
    }

    verifyBranchName = (name: string): AdminPage => {
        cy.get(this.txtBranchName).should('have.value', name);
        return this;
    }

    clickBackToList = (): AdminPage => {
        cy.get(this.lnkBackToList).click();
        return this;
    }

    clickAddCinema = (): AdminPage => {
        cy.contains('button', this.btnAddCinema).click();
        return this;
    }

    enterCinemaName = (name: string): AdminPage => {
        cy.get(this.txtCinemaName).type(name);
        return this;
    }

    clickAddMovieSched = (): AdminPage => {
        cy.contains('button', this.btnAddMovieSched).click();
        return this;
    }

    selectCinema = (lstCount: number): AdminPage => {
        cy.get(this.drpCinemaList).select(lstCount);
        return this;
    }

    selectMovieName = (name: string): AdminPage => {
        cy.get(this.drpMovieList).select(name);
        return this;
    }

    enterStartDate = (date: string): AdminPage => {
        cy.get(this.txtStartDate).type(date);
        return this;
    }

    enterTimeHour = (hour: string): AdminPage => {
        cy.get(this.txtTimeHr).clear();
        cy.get(this.txtTimeHr).type(hour);
        return this;
    }

    enterTimeMin = (min: string): AdminPage => {
        cy.get(this.txtTimeMin).clear();
        cy.get(this.txtTimeMin).type(min);
        return this;
    }

    enterMoviePrice = (price: string): AdminPage => {
        cy.get(this.txtTicketPrice).clear();
        cy.get(this.txtTicketPrice).type(price);
        return this;
    }

    selectRandomBranch = (): AdminPage => {
        cy.get(this.cardBranch).its('length').then((len) => {
            let min = 0;
            let max = len-1;
            let random = Math.floor(Math.random() * max - min)
            cy.get(this.cardBranch).eq(random)
                .find('a').last()
                .click();
        })
        return this;
    }

    verifyCreatedCinema = (name: string): AdminPage => {
        let exists = false;
        cy.get(this.pnlCinemaList).find('li').each(($el) => {
            cy.then(() => {
                if(exists) {
                    return 
                }
                cy.wrap($el.find('a').text()).then((cinemaName) => {
                    if(cinemaName.trim === name.trim) {
                        cy.log("Cinema is added!");
                        exists = true;
                    };
                });
            });
        });
        return this;
    }

    clickCreatedCinema = (name: string): AdminPage => {
        cy.get(this.pnlCinemaList).find('a').contains(name).click();
        return this;
    }

    clickViewSchedules = (): AdminPage => {
        cy.contains('button', this.btnViewSchedules).click();
        return this;
    }

    verifyCinemaInDropDown = (name: string): AdminPage => {
        let exists = false;
        cy.get(this.drpCinemaList).children('option').each(($el) => {
            cy.then(() => {
                if(exists) {
                    return 
                }
                cy.wrap($el.text()).then((cinemaName) => {
                    if(cinemaName.trim === name.trim) {
                        cy.log("Cinema is in dropdown");
                        exists = true;
                    };
                });
            });
        });
        return this;
    }

    countAndAddCinema = (name: string): AdminPage => {
        cy.get(this.pnlCinemaList).then(($el) => {
            if($el.find('li').length) {
                cy.log("Cinema list is not empty.");
            } else {
                cy.addCinema(name);
            }
        });

        cy.get(this.pnlCinemaList).find('li').its('length').then((len) => {
            while(len < 3) {
                cy.addCinema(name+len);
                len++;
            }
            if(len >= 3 ){
                cy.log("3 or more cinema exists.");
            }
        });
        return this;
    }

    verifySchedulePageDisplayed = (): AdminPage => {
        cy.get(this.pnlScheduleList).should('exist').then(() => {
            cy.log('Schedule page displayed.')
        })
        return this;
    }

    verifyMovieSched = (name: string): AdminPage => {
        let exists = false;
        cy.get(this.cardMovieSched).each(($el) => {
            cy.then(() => {
                if(exists) {
                    return 
                }
                cy.wrap($el.find('h6').text()).then((movieName) => {
                    if(movieName.trim === name.trim) {
                        cy.log("Movie is added!");
                        exists = true;
                    };
                });
            });
        });
        return this;
    }

    isDisplayed = (): AdminPage => {
        cy.contains(this.lblMaintainModule,'Maintain Module')
        .should('be.visible')
        return this;
    }
    
}

export default AdminPage;