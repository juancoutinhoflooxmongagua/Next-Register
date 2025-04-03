import { useState } from "react";
import Client from "../core/Client";
import Button from "./Button";
import Input from "./Input";

export default function Form({ client, clientChange, cancel }) {
    const id = client?.id;
    const [nome, setNome] = useState(client?.nome ?? '');
    const [idade, setIdade] = useState(client?.idade ?? 0);

    return (
        <div>
            {id && (
                <Input
                    somenteLeitura
                    texto="Código"
                    valor={id}
                />
            )}
            <Input
                texto="Nome"
                valor={nome}
                valorMudou={setNome}
            />
            <Input
                texto="Idade"
                tipo="number"
                valor={idade}
                valorMudou={setIdade}
            />
            <div>
                <Button onClick={() => {
                    console.log("Salvando:", { nome, idade, id });
                    clientChange?.(new Client(nome, +idade, id));
                }}>
                    {id ? 'Alterar' : 'Salvar'}
                </Button>

                <Button onClick={cancel}>
                    Cancelar
                </Button>
            </div>
        </div>
    );
}
