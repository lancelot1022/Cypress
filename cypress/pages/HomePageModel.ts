import LoginPage from "./LoginPageModel";
import RegisterPage from "./RegisterPageModel";
import AdminPage from "./AdminPageModel";

class HomePage {
    private pnlMovieList: string = "app-movie-movie-list";
    private cardMovie: string = 'app-movie-card';

    private lnkMovies: string = "a[href='/movies']";
    private lnkBranches: string = "a[href='/branches']";
    private lnkAdmin: string = "a[href='/admin']";
    private lnkEmail: string = "a";
    private lnkRegister: string = "a[href='/register']";
    private lnkLogin: string = "a[href='/login']";
    private btnLogout: string = "Logout";

    constructor() {
    }

    clickMovies = (): HomePage => {
        cy.get(this.lnkMovies).click()
        return this;
    }

    clickBranches = (): HomePage => {
        cy.get(this.lnkBranches).click()
        return this;
    }

    clickAdmin = (): HomePage => {
        cy.get(this.lnkAdmin).click()
        return this;
    }

    verifyMenuTabs = (): HomePage => {
        cy.get(this.lnkMovies).should('be.visible')
        cy.get(this.lnkBranches).should('be.visible')
        cy.get(this.lnkAdmin).should('be.visible')
        return this;
    }

    verifyEmailInNavBar = (email: string): HomePage => {
        cy.contains(this.lnkEmail, email)
        .should('be.visible')
        return this;
    }

    clickLogin = (): HomePage => {
        cy.get(this.lnkLogin).click()
        return this;
    }

    clickLogout = (): HomePage => {
        cy.contains('button', this.btnLogout).click()
        return this;
    }

    clickRegister = (): HomePage => {
        cy.get(this.lnkRegister).click()
        return this;
    }

    navigateToLogin = (): LoginPage => {
        const login = new LoginPage();
        return login;
    }

    navigateToRegister = (): RegisterPage => {
        const register = new RegisterPage();
        return register;
    }

    navigateToAdmin = (): AdminPage => {
        const admin = new AdminPage();
        return admin;
    }

    verifyMovie = (name: string): HomePage => {
        let exists = false;
        cy.get(this.cardMovie).each(($el) => {
            cy.then(() => {
                if(exists) {
                    return 
                }
                cy.wrap($el.find('a').last().text()).then((title) => {
                    if(title.trim === name.trim) {
                        cy.log("Movie is displayed!");
                        exists = true;
                    };
                });
            });
        });
        return this;
    }

    isDisplayed = (): HomePage => {
        cy.get(this.pnlMovieList)
        .should('be.visible')
        return this;
    }
}

export default HomePage;