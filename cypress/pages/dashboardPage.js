class DashboardPage{
    dashboardList(){
        const selectors = {
             dashboradGrid:".orangehrm-dashboard-grid",
        }
        return selectors
    }

    checkDashboardPage(){
        cy.location('pathname').should('equal','/web/index.php/dashboard/index')
        cy.get(this.dashboardList().dashboradGrid).should('be.visible')
    }

}export default DashboardPage