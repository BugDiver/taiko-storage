const Storage = require('./storage');

const ID = 'storage';

let localStorage = new Storage('local');
let sessionStorage = new Storage('session');

let init = async (taiko) => {
    [localStorage, sessionStorage].forEach(s => s._setTaiko(taiko));
};

module.exports = {
    ID,
    init,
    localStorage,
    sessionStorage
};