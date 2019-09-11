let _taiko = null;
let _descEmitter = null;

class Storage {
    constructor(type) {
        this.type = type;
    }
    async setItem(key, value) {
        await _taiko.evaluate((_, args) => {
            let storage = args.type === 'local' ? localStorage : sessionStorage;
            return storage.setItem(args.key, JSON.stringify(args.value));
        }, { returnByValue: true, args: { type: this.type, key: key, value: value } });
        _descEmitter.emit('success', 'Added "' + key + '" to ' + this.type + ' storage.');
    }

    async clear() {
        await _taiko.evaluate((_, args) => {
            let storage = args.type === 'local' ? localStorage : sessionStorage;
            return storage.clear();
        }, { returnByValue: true, args: { type: this.type } });
        _descEmitter.emit('success', 'Cleared ' + this.type + ' storage.');
    }

    async getItem(key) {
        let value = await _taiko.evaluate((_, args) => {
            let storage = args.type === 'local' ? localStorage : sessionStorage;
            return storage.getItem(args.key);
        }, { returnByValue: true, args: { type: this.type, key: key } });
        _descEmitter.emit('success', 'Retrieve value for "' + key + '" from ' + this.type + ' storage.');
        return JSON.parse(value);
    }

    async hasItem(key) {
        let res = await _taiko.evaluate((_, args) => {
            let storage = args.type === 'local' ? localStorage : sessionStorage;
            return storage.hasOwnProperty(args.key);
        }, { returnByValue: true, args: { type: this.type, key: key } });
        _descEmitter.emit('success', 'The item "' + key + '" is available in ' + this.type + ' storage.');
        return res;
    }

    async length(key) {
        let res = await _taiko.evaluate((_, args) => {
            let storage = args.type === 'local' ? localStorage : sessionStorage;
            return storage.length;
        }, { returnByValue: true, args: { type: this.type, key: key } });
        _descEmitter.emit('success', 'The length of ' + this.type + ' storage is ${res}.');
        return res;
    }

    async removeItem(key) {
        await _taiko.evaluate((_, args) => {
            let storage = args.type === 'local' ? localStorage : sessionStorage;
            return storage.removeItem(args.key);
        }, { returnByValue: true, args: { type: this.type, key: key } });
        _descEmitter.emit('success', 'Removed value for "' + key + '" from ' + this.type + ' storage.');
    }

    _setTaiko(taiko, descEmitter) {
        _taiko = taiko;
        _descEmitter = descEmitter;
    }
}

module.exports = Storage;

