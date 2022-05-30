// eslint-disable-next-line @typescript-eslint/no-var-requires
const { defaults } = require('jest-config');

process.env.TZ = 'Europe/Berlin';

module.exports = {
    ...defaults,
    fakeTimers: {
        legacyFakeTimers: true
    }
};
