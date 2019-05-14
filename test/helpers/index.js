function test(module) {
    return (name, cb) => {
        module.exports[name] = cb;
    }
}

function aspectize(name, mod) {
    return (cb) => {
        const previous = mod.exports[name];
        mod.exports[name] = (client) => {
            if (typeof previous === 'function') {
                previous(client);
            }
            cb(client);
        };
    }
}

function beforeEach(mod) {
    return aspectize('beforeEach', mod);
}

function afterEach(mod) {
    return aspectize('afterEach', mod);
}

module.exports = (mod) => ({
    it: test(mod),
    test: test(mod),
    beforeEach: beforeEach(mod),
    afterEach: afterEach(mod),
});
