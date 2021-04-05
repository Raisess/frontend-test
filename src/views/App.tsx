import { useState } from "react";

import MessageBubble from "../components/MessageBubble";
import MessageInput from "../components/MessageInput";

import emitter from "../utils/emitter";

export default function App(): JSX.Element {
	const [display, setDisplay]: [boolean, Function] = useState(false);
	const [props, setProps]:     [any, Function]     = useState({});

	const profilePicture: string = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fbc%2Fef%2F82%2Fbcef822d03a9f16ea8e0b026476bf231.png&f=1&nofb=1";

	emitter.on("next_msg", (receivedProps: string): void => {
		Object.assign(props, receivedProps);

		setProps(props);
		setDisplay(true);

		console.log(props);
	});

  return (
    <div className="App">
			<MessageBubble
				profilePicture={ profilePicture }
				message="Olá, eu sou o Chatnilson, tudo bem? Para começarmos, preciso saber seu nome."
				display={true}
			/>
			<MessageInput
				placeholder="Nome e sobrenome"
				propName="username"
				display={true}
			/>
			<MessageBubble
				profilePicture={ profilePicture }
				message={`Que satisfação, ${props["username"]}. Agora que sei seu nome, qual cidade e estado você mora?`}
				display={ display }
			/>
			<MessageInput
				placeholder="Cidade e estado"
				propName="address"
				display={ display }
			/>
    </div>
  );
}

