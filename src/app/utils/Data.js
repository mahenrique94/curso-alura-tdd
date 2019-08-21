export default class Data {
    constructor(data) {
        this._data = data
    }

    get value() {
        return this._data
    }

    ehValida() {
        return !!this.value && this.value.trim().length === 10
    }
}
