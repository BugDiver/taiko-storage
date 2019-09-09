class Storage {
    constructor(type) {
        this.type = type;
        this.taiko = null;
    }
    async setItem(key, value) {
        this._validate();
        await this.taiko.evaluate((_, args) => {
            let storage = args.type === 'local' ? localStorage : sessionStorage;
            return storage.setItem(args.key, args.value);
        }, { args: { type: this.type, key: key, value: value } });
    }

    async clear() {
        this._validate();
        await this.taiko.evaluate((_, args) => {
            let storage = args.type === 'local' ? localStorage : sessionStorage;
            return storage.clear();
        }, { args: { type: this.type } });
    }

    async getItem(key) {
        this._validate();
        return await this.taiko.evaluate((_, args) => {
            let storage = args.type === 'local' ? localStorage : sessionStorage;
            return storage.getItem(args.key);
        }, { args: { type: this.type, key: key } });
    }

    async hasItem(key) {
        this._validate();
        return await this.taiko.evaluate((_, args) => {
            let storage = args.type === 'local' ? localStorage : sessionStorage;
            return storage.hasOwnProperty(args.key);
        }, { args: { type: this.type, key: key } });
    }

    async length(key) {
        this._validate();
        return await this.taiko.evaluate((_, args) => {
            let storage = args.type === 'local' ? localStorage : sessionStorage;
            return storage.length;
        }, { args: { type: this.type, key: key } });
    }

    async removeItem(key) {
        this._validate();
        await this.taiko.evaluate((_, args) => {
            let storage = args.type === 'local' ? localStorage : sessionStorage;
            return storage.removeItem(args.key);
        }, { args: { type: this.type, key: key } });
    }

    _validate() {
        if (this.taiko === null) {
            throw new Error('Browser or page not initialized.' +
                'Call `openBrowser()` before using this API.');
        }

    }

    _setTaiko(taiko) {
        this.taiko = taiko;
    }
}

module.exports = Storage;

