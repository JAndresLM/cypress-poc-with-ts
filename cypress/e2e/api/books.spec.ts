describe('Books Endpoints', () => {
    it('Verify Get Books List works correctly', () => {
        cy.request('https://demoqa.com/BookStore/v1/Books').then((resp) => {
            expect(resp.status).to.eq(200)
            expect(resp.body.books[0]).to.have.property('title')
            expect(resp.body.books[0]).to.have.property('subTitle')
            expect(resp.body.books[0]).to.have.property('author')
            expect(resp.body.books[0]).to.have.property('publish_date')
            expect(resp.body.books[0]).to.have.property('publisher')
            expect(resp.body.books[0]).to.have.property('description')
            expect(resp.body.books[0]).to.have.property('website')
          })
    });
});