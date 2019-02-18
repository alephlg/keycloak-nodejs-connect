'use strict';

const test = require('tape-catch');
const getport = require('../../middleware/getport');


test('gets port from IPv6 address', t => {
    t.equal(getport.result('[aaaa:bbbb:cccc::0000]:12345'), '12345');
    t.equal(getport.result('[aaaa:bbbb:cccc::0000]'), '');
    t.end();
});

test('gets port from IPv4 address', t => {
    t.equal(getport.result('11.22.33.44:12345'), '12345');
    t.equal(getport.result('11.22.33.44'), '');
    t.end();
});

test('gets port from dns address', t => {
    t.equal(getport.result('example.com:12345'), '12345');
    t.equal(getport.result('example.com'), '');
    t.end();
});