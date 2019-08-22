export default class Data {
    constructor(data) {
        this._data = data
    }

    get date() {
        return new Date(this.value.split('/').reverse().join('-').concat('T00:00:00'))
    }

    get value() {
        return this._data
    }

    ehValida() {
        return !!this.value && this.value.trim().length === 10
    }

    getAge() {
        return new Date().getFullYear() - this.date.getFullYear()
    }
}
