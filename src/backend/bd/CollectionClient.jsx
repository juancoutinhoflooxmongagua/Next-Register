import firebase from "../config";
import Client from "../../core/Client";

export default class CollectionClient {
    constructor() {
        this.conversor = {
            toFirestore(cliente) {
                return {
                    nome: cliente.nome,
                    idade: cliente.idade,
                };
            },
            fromFirestore(snapshot, options) {
                const dados = snapshot.data(options);
                return new Client(dados.nome, dados.idade, snapshot.id);
            }
        };
    }

    async save(cliente) {
        if (cliente?.id) {
            await this.collection().doc(cliente.id).set(cliente);
            return cliente;
        } else {
            const docRef = await this.collection().add(cliente);
            const doc = await docRef.get();
            return new Client(cliente.nome, cliente.idade, doc.id);
        }
    }

    async delete(cliente) {
        return this.collection().doc(cliente.id).delete();
    }

    async getAll() {
        const query = await this.collection().get();
        return query.docs.map(doc => doc.data()) ?? [];
    }

    collection() {
        return firebase.firestore().collection('clients').withConverter(this.conversor);
    }
}
