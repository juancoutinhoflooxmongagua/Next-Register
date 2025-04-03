import { useState } from "react";
import Client from "../core/Client";
import Button from "./Button";
import Input from "./Input";

export default function Form({ client, clientChange, cancel }) {
    const id = client?.id;
    const [name, setname] = useState(client?.name ?? '');
    const [age, setage] = useState(client?.age ?? 0);

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
                texto="name"
                valor={name}
                valorMudou={setname}
            />
            <Input
                texto="age"
                tipo="number"
                valor={age}
                valorMudou={setage}
            />
            <div>
                <Button onClick={() => {
                    console.log("Salvando:", { name, age, id });
                    clientChange?.(new Client(name, +age, id));
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
