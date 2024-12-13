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
    dorpDownBoxButton: '.oxd-select-text--arrow',
    fisrtItemComboBox: ':nth-child(12) > span',
    secondItemComboBox: '.oxd-select-dropdown > :nth-child(2)'

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
    cy.get(selectorsList.dorpDownBoxButton).eq(0).click()
    cy.get(selectorsList.fisrtItemComboBox).click()
    cy.get(selectorsList.dorpDownBoxButton).eq(1).click()
    cy.get(selectorsList.secondItemComboBox).click()
  }),

  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userIncorrect.userName)
    cy.get(selectorsList.passwordField).type(userData.userIncorrect.password)
    cy.get("[type='submit']").click()
    cy.get(selectorsList.wrongCredentials)

  })
})