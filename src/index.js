const Storage = require('./storage');

const ID = 'storage';

let localStorage = new Storage('local');
let sessionStorage = new Storage('session');

let init = async (taiko,_,descEmitter) => {
    [localStorage, sessionStorage].forEach(s => s._setTaiko(taiko, descEmitter));
};

module.exports = {
    ID,
    init,
    localStorage,
    sessionStorage
};