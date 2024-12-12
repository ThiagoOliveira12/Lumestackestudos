import userData from '../fixtures/userData.json'

describe('Orange HRM test', () => {
  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    dashboradGrid: ".orangehrm-dashboard-grid",
    wrongCredentials: "[role='alert']",
    myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    genericIdField: '.oxd-input--active',
    nationalityButton: ':nth-child(5) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text',

  }

  it.only('User Info Update - Success', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.userName)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get("[type='submit']").click()
    cy.location('pathname').should('equal','/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboradGrid)
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstNameField).clear().type('FirstNameTest')
    cy.get(selectorsList.lastNameField).clear().type('LastNameTest')
    cy.get(selectorsList.genericIdField).eq(4).clear().type('EmployeeTT')
    cy.get(selectorsList.nationalityButton).click()
    cy.get(':nth-child(9) > span').click()
  }),

  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userIncorrect.userName)
    cy.get(selectorsList.passwordField).type(userData.userIncorrect.password)
    cy.get("[type='submit']").click()
    cy.get(selectorsList.wrongCredentials)

  })
})