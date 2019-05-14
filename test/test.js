module.exports = {};

function test(name, cb) {
    module.exports[name] = cb;
}

const PAGE_URL = 'https://piecioshka.pl/blog';
const PAGE_LOAD_DELAY = 3000;

async function setup(client) {
    await client.url(PAGE_URL);
    await client.waitForElementVisible('body', PAGE_LOAD_DELAY);
}

async function teardown(client) {
    // ...
}

test('Spr. czy istnieje avatar', async (client) => {
    await setup(client);
    await client.assert.elementPresent('#me img');
    // await teardown(client);
});

test('Spr. czy jest odpowiednia liczba elementów w menu', async (client) => {
    await setup(client);
    await client.elements('css selector', '.menu-item', (result) => {
        const menuSize = result.value.length;
        client.assert.equal(menuSize, 10);
    });
    // await teardown(client);
});
