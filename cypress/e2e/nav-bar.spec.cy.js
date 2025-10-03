describe("Setup Nav Bar", () => {
    it("Validar Nav Bar", () => {
        cy.visit("/")
        cy.get("[data-cy='navbar-item']").should("have.length", 6)
    })
})