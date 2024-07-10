export class LatLongPage {

  get placeNameLabel() { return cy.get('label[for="place"]'); }
  get placeNameInput() { return cy.get('input#place'); }
  get latitudeLabel() { return cy.get('label[for="lat"]'); }
  get latitudeInput() { return cy.get('input#lat'); }
  get longitudeLabel() { return cy.get('label[for="lng"]'); }
  get longitudeInput() { return cy.get('input#lng'); }
  get findButton() { return cy.get('#btnfind'); }
  get errorMessage(){return cy.get('p')}

  visit() {
    cy.visit('https://www.latlong.net/');
  }

  typePlaceName(placeName: string) {
    this.placeNameInput.type(placeName);
  }

  findCoordinates() {
    this.findButton.click();
  }

  verifyExpectedCoordinates(expectedLat: string, expectedLong: string) {
    this.latitudeInput.should('have.text', expectedLat)
    this.longitudeInput.should('have.text', expectedLong)
  }

  verifyErrorMessage(expectedError: string){
    this.errorMessage.should('contain', expectedError)
  }
}
