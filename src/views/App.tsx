import MessageBubble from "../components/MessageBubble";

export default function App(): JSX.Element {
	const profilePicture: string = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F3%2F33%2FSmiling_smiley_yellow_simple.svg%2F1200px-Smiling_smiley_yellow_simple.svg.png&f=1&nofb=1";

  return (
    <div className="App">
			<MessageBubble
				profilePicture={ profilePicture }
				message={"Olá, eu sou o Chatnilson, tudo bem? Para começarmos, preciso saber seu nome."}
			/>
			<MessageBubble
				profilePicture={ profilePicture }
				message={"Que satisfação, <nome do input nome/sobrenome>. Agora que sei seu nome, qual cidade e estado você mora?"}
			/>
    </div>
  );
}

