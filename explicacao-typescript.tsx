import { prependOnceListener } from "node:process"

type User = {
    name: string;
    addres: {
        city: string;
        state: string;
    }
}

// Retornar o texto de boas vindas do site
function createWelcomeMessage(user: User) {
    return `Boas vindas, ${user.name}. Cidade: ${user.addres.city} - ${user.addres.state}!`
}

const welcomeMessage = createWelcomeMessage({
    name: 'Pamela',
    addres: {
        city: 'São José dos Pinhais',
        state: 'PR'
    }
})

// Tipagem das propriedades de um componente

type ButtonProps = {
    title: string;

}

function Button(props: ButtonProps) {
    return (
        <button>{props.title}</button>
    )
}

function App() {
    return (
        <div>
            <Button title="Button 1" />
            <Button title="Button 2" />
            <Button title="Button 3" />
        </div>)
}