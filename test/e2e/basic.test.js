const PAGE_URL = 'https://piecioshka.pl/blog';
const PAGE_LOAD_DELAY = 3000;

describe('Basic test', function () {

    beforeEach(async (client, done) => {
        await client.url(PAGE_URL);
        await client.waitForElementVisible('body', PAGE_LOAD_DELAY);
        done();
    });

    it('Spr. czy istnieje avatar', async (client) => {
        await client.assert.elementPresent('#me img');
    });

    it('Spr. czy jest odpowiednia liczba elementów w menu', async (client) => {
        await client.elements('css selector', '.menu-item', (result) => {
            const menuSize = result.value.length;
            client.assert.equal(menuSize, 10);
        });
    });
});
