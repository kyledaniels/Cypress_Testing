describe('Browser Actions',()=>{
    it('Should load correct url',()=>{
        cy.visit('http://example.com', {timewout:1000})
    })

    it('Should check correct url', ()=>{
        cy.url().should('include', 'example.com')
    })
    
    it('should check for current element on the page', ()=>{
        cy.get('h1').should('be.visible')
    })
})