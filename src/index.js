const Storage = require('./storage');

const ID = 'storage';

let local = new Storage('local');
let session = new Storage('session');

let init = async (taiko) => {
    [local, session].forEach(s => s._setTaiko(taiko));
};

module.exports = {
    ID,
    init,
    local,
    session
};