describe('Test GET response', () => {
  it("Test if response is the object", () => {
      for(let id=1; id<=210; id++) {
        cy.request(`/${id}`)
            .then((response) => {
                expect(response).to.be.a('object');
        })
    }})

  it("Test if length is more than 25", () => {
      for(let id=1; id<=210; id++) {
        cy.request(`/${id}`)
            .then((response) => {
                expect(response.body.title).to.be.a('string');
                expect(response.body.title.length).to.be.greaterThan(25);
        })
    }})
})