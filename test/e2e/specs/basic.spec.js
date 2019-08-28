describe('Basic test', function () {

    const PAGE_URL = 'http://piecioshka.pl/blog';
    const PAGE_LOAD_DELAY = 3000;

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

    it('Spr. czy drugim elementem w menu jest sekcja "PRELEKCJE"', async (client) => {
        client.expect.element('#menu > ul > li:nth-child(2) > .menu-link')
            .text.to.contain('PRELEKCJE');
    });

    it('Spr. czy trzecim elementem w menu jest sekcja "WEBINARY"', async (client) => {
        client.expect.element('#menu > ul > li:nth-child(3) > .menu-link')
            .text.to.contain('WEBINARY');
    });

    it('[page object] spr. czy drugim elementem w menu jest sekcja "PRELEKCJE"', (client) => {
        const homepage = client.page.homepage();

        homepage.navigate()
            .assert.visible('@menu');

        // homepage.waitForElementVisible({
        //     selector: '@menuLink',
        //     index: 1
        // }, function (result) {
        //     debugger;
        // }); // 1st div

        client.expect.element({
            selector: '@menuLink',
            index: 1
        }).text.to.contain('PRELEKCJE');
    });

});
