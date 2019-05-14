const { test } = require('../helpers/')(module);

test('Spr. czy istnieją wymagane paragrafy?', async (client) => {
    await client.url('http://example.org');
    await client.waitForElementVisible('body');
    await client.assert.count('p', 2);
});
