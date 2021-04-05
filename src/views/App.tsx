import MessageBubble from "../components/MessageBubble";
import MessageInput from "../components/MessageInput";

export default function App(): JSX.Element {
	const profilePicture: string = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fbc%2Fef%2F82%2Fbcef822d03a9f16ea8e0b026476bf231.png&f=1&nofb=1";

  return (
    <div className="App">
			<MessageBubble
				profilePicture={ profilePicture }
				message="Olá, eu sou o Chatnilson, tudo bem? Para começarmos, preciso saber seu nome."
			/>
			<MessageInput
				propName="teste"
			/>
			<MessageBubble
				profilePicture={ profilePicture }
				message={"Que satisfação, <nome do input nome/sobrenome>. Agora que sei seu nome, qual cidade e estado você mora?"}
			/>
    </div>
  );
}

