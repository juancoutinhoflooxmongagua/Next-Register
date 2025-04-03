export default class Client {
    #id;
    #nome;
    #idade;

    constructor(nome, idade, id = null) {
        this.#nome = nome;
        this.#idade = idade;
        this.#id = id || Math.random().toString(36).substr(2, 9); // Gera um ID único se não for passado
    }

    static null(){
        return new Client('', 0);
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
