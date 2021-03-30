import { When,Then,Given } from "cypress-cucumber-preprocessor/steps";


Given('le serveur de test est prêt', () => {});

When("j'accède à la page par défaut", () => {
    cy.visit('http://localhost:5000');
});

Then('le lien ouvre une nouvelle page', () => {
    cy.get('.App-link').should((element) => {
       expect(element).to.attr('target', '_blank');
    });
});