export const form = context("Seach Form", () => {
  describe("Search Form", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000");
    });
    
    it("should have two inputs and button", () => {
      cy.get("form");
      cy.get("input[name=from]");
      cy.get("input[name=to]");
      cy.get("button");
    });

    it("should display results when typing in inputs", () => {
      cy.get("input[name=from]")
        .type("France")
        .then(() => {
          cy.get("#from-results")
            .children()
            .should("have.length", 1)
            .contains("France");
        });
    });

    it("should display no result if no countries found", () => {
      cy.get("input[name=from]")
        .type("fffff")
        .then(() => {
          cy.get("#from-results")
            .children()
            .should("have.length", 1)
            .contains("Aucun résultat");
        });
    });
  });
});
