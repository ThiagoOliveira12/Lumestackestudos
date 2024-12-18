import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()

describe('Orange HRM test', () => {
  const selectorsList = {
    
    myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    genericIdField: '.oxd-input--active',
    dorpDownBoxButton: '.oxd-select-text--arrow',
    fisrtItemComboBox: ':nth-child(12) > span',
    secondItemComboBox: '.oxd-select-dropdown > :nth-child(2)'

  }

  it.only('User Info Update - Success', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.userName,userData.userSuccess.password)
    dashboardPage.checkDashboardPage()
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
    loginPage.acessLoginPage()
    loginPage.loginWithUser(userData.userIncorrect.userName,userData.userIncorrect.password)
    // loginPage.selectorsList()

  })
})