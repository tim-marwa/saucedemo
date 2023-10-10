import { id } from '../../selectors/lib/selector-helpers';
context('Cypress.Commands', () => {
    const loginPageURL = 'https://www.saucedemo.com/';
    // Define the valid and invalid credentials
    const validUsername = 'standard_user';
    const validPassword = 'secret_sauce';
    const invalidUsername = 'invalid_user';
    const invalidPassword = 'wrong_password';

    // Define the selectors for the login page elements
    const usernameInput = '#user-name';
    const passwordInput = '#password';
    const loginButton = '#login-button';
    const errorMessage = '[data-test="error"]';
    const sideMenue = '#react-burger-menu-btn';
    // const id = (value, operator = '=') => `[id${operator}"${value}"]`;

    // Define the selectors for the inventory page elements
    const addToCartButtons = '.btn_inventory';
    const cartIcon = '.shopping_cart_link';
    const cartBadge = '.shopping_cart_badge';

    // Define the selectors for the cart page elements
    const checkoutButton = '.btn_action.checkout_button';
    // Define the selectors for the checkout page elements
    const firstNameInput = '#first-name';
    const lastNameInput = '#last-name';
    const zipCodeInput = '#postal-code';
    const continueButton = '.btn_primary.cart_button';
    const finishButton = '.btn_action.cart_button';
    // Write a test suite for the login page
    describe('Login page tests', () => {
        // Before each test, visit the login page
        beforeEach(() => {
            cy.visit(loginPageURL);
        });
        // Test case 1: Login with valid credentials
        it('should login and logout with valid credentials', () => {
            // Enter the valid username and password
            cy.get(usernameInput).type(validUsername);
            cy.get(passwordInput).type(validPassword);
            cy.get(loginButton).click();
            // Assert that the URL is changed to the inventory page
            cy.url().should('include', '/inventory.html');
            // Click on the logout button
            cy.get(sideMenue).click();
            cy.get(id('logout_sidebar_link')).should('be.visible').click();
            // Assert that the URL is changed back to the login page
            cy.url().should('eq', 'https://www.saucedemo.com/');
        });

        // Test case 2: Login with invalid credentials
        it('should show an error message with invalid username', () => {
            // Enter the invalid username and valid password
            cy.get(usernameInput).type(invalidUsername);
            cy.get(passwordInput).type(validPassword);
            cy.get(loginButton).click();
            // Assert that the error message is displayed and contains the expected text
            cy.get(errorMessage).should('be.visible');
            cy.get(errorMessage).should('contain.text', 'Username and password do not match any user in this service');
        });

        // Test case 3: Login with invalid password
        it('should show an error message with invalid password', () => {
            // Enter the valid username and invalid password
            cy.get(usernameInput).type(validUsername);
            cy.get(passwordInput).type(invalidPassword);
            cy.get(loginButton).click();
            // Assert that the error message is displayed and contains the expected text
            cy.get(errorMessage).should('be.visible');
            cy.get(errorMessage).should('contain.text', 'Username and password do not match any user in this service');
        });
    });
    describe('Inventory page tests', () => {
        // Before each test, visit the login page
        beforeEach(() => {
          cy.visit(loginPageURL);
        });
        // Test case 1: Login with valid credentials and add one item to the cart
        it('should login with valid credentials and add one item to the cart', () => {
          // Enter the valid username and password
          cy.get(usernameInput).type(validUsername);
          cy.get(passwordInput).type(validPassword);
          // Click on the login button
          cy.get(loginButton).click();
          // Assert that the URL is changed to the inventory page
          cy.url().should('include', '/inventory.html');
          cy.get(sideMenue).click();
          cy.get(id('reset_sidebar_link')).should('be.visible').click();
          // Click on the first add to cart button
          cy.get(addToCartButtons).first().click();
          // Assert that the cart badge shows 1 item in the cart
          cy.get(cartBadge).should('have.text', '1');
          // Click on the cart icon
          cy.get(cartIcon).click();
          // Assert that the URL is changed to the cart page
          cy.url().should('include', '/cart.html');
          // Assert that there is one item in the cart
          cy.get('.cart_item').should('have.length', 1);
          // Click on the checkout button
          cy.get(checkoutButton).click();
          // Assert that the URL is changed to the checkout page
          cy.url().should('include', '/checkout-step-one.html');
        });
      
        // Test case 2: Login with valid credentials and add multiple items to the cart
        it('should login with valid credentials and add multiple items to the cart', () => {
          // Enter the valid username and password
          cy.get(usernameInput).type(validUsername);
          cy.get(passwordInput).type(validPassword);
      
          // Click on the login button
          cy.get(loginButton).click();
          cy.get(sideMenue).click();
          cy.get(id('reset_sidebar_link')).should('be.visible').click();
          // Assert that the URL is changed to the inventory page
          cy.url().should('include', '/inventory.html');
          // Click on all the add to cart buttons
          cy.get(addToCartButtons).each(($button) => {
            cy.wrap($button).click();
          });
          // Assert that the cart badge shows 6 items in the cart
          cy.get(cartBadge).should('have.text', '5');
          // Click on the cart icon
          cy.get(cartIcon).click();
          // Assert that the URL is changed to the cart page
          cy.url().should('include', '/cart.html');
          // Assert that there are six items in the cart
          cy.get('.cart_item').should('have.length', 5);
          // Click on the checkout button
          cy.get(checkoutButton).click();
          // Assert that the URL is changed to the checkout page
          cy.url().should('include', '/checkout-step-one.html');
        });
      });
});
