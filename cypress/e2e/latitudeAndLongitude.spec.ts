import { LatLongPage } from '../page_objects/latLongPage';

describe('Latitude and Longitude Tests', () => {
    const latLongPage = new LatLongPage();

    beforeEach(() => {
        latLongPage.visit();
    });

    it('Verify Page Components Are Correct', () => {
        latLongPage.placeNameLabel.should('contain', 'Place Name');
        latLongPage.latitudeLabel.should('contain', 'Latitude');
        latLongPage.longitudeLabel.should('contain', 'Longitude');
    });


    it('Verify Lat and Long Functionality Works Correctly', () => {
        cy.fixture('test_data.json').then((data) => {
            data.forEach(element => {
                latLongPage.typePlaceName(element.name)
                latLongPage.verifyExpectedCoordinates(element.expectedLat, element.expectedLong)
            });
        })
    });


    it('Verify Credits Warning Is Displayed when you do not have credits', () => {
        latLongPage.typePlaceName('Ciudad Quesada, Alajuela, San Carlos')
        latLongPage.findCoordinates()
        latLongPage.verifyErrorMessage('Sorry, Your daily quota is over.')
    });
});