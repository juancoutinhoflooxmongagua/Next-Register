export default class Client {
    #id;
    #nome;
    #idade;

    constructor(nome, idade, id = null) {
        this.#nome = nome;
        this.#idade = idade;
        this.#id = id;
    }

    get id() {
        return this.#id;
    }

    get nome() {
        return this.#nome;
    }

    get idade() {
        return this.#idade;
    }
}