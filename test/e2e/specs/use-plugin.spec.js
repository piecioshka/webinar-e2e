describe('Use Plugin: nightwatch-helpers', function () {

    const PAGE_URL = 'http://example.org';

    beforeEach(async (client, done) => {
        await client.url(PAGE_URL);
        await client.waitForElementVisible('body');
        done();
    });

    it('Spr. czy istnieją wymagane paragrafy?', async (client) => {
        await client.assert.count('p', 2);
    });

});
