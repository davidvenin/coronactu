export const homepage = context("Home page", () => {
  describe("home page", () => {
    it("should load the app and show content", () => {
      cy.visit("http://localhost:3000");
      cy.contains("Coronactu");
    });
  });
});
