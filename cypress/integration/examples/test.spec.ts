describe('open my app', () => {
    it('should visit my-app', () => {
        cy.visit('http://localhost:5000');

        cy.get('.App-link').should((element) => {
            expect(element).to.contain('Learn React');
        })
    })
})

export{};