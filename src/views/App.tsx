import { useState } from "react";

import MessageBubble from "../components/MessageBubble";
import MessageInput from "../components/MessageInput";
import SaveButton from "../components/SaveButton";

import emitter from "../utils/emitter";

export default function App(): JSX.Element {
	const [props, setProps]: [any, Function]    = useState({});
	const [acc, setAcc]:     [number, Function] = useState(0);

	const [display, setDisplay]: [Array<boolean>, Function] = useState([false, false, false, false]);

	const profilePicture: string = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fbc%2Fef%2F82%2Fbcef822d03a9f16ea8e0b026476bf231.png&f=1&nofb=1";

	emitter.on("next_msg", (receivedProps: string): void => {
		Object.assign(props, receivedProps);

		display[acc] = true;

		setProps(props);
		setDisplay(display);
		setAcc(acc + 1);
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
				display={ display[0] }
			/>
			<MessageInput
				placeholder="Cidade e estado"
				propName="address"
				display={ display[0] }
			/>
			<MessageBubble
				profilePicture={ profilePicture }
				message="Legal, agora que sabemos sua cidade e estado. Quando foi que você nasceu?"
				display={ display[1] }
			/>
			<MessageInput
				placeholder="00/00/0000"
				propName="bday"
				display={ display[1] }
			/>
			<MessageBubble
				profilePicture={ profilePicture }
				message="Agora me fala teu e-mail, por gentileza."
				display={ display[2] }
			/>
			<MessageInput
				placeholder="E-mail"
				propName="email"
				display={ display[2] }
			/>
			<MessageBubble
				profilePicture={ profilePicture }
				message="Você finalizou o teste. Faça uma avaliação sobre o processo que realizou até chegar aqui. Nós agradecemos!"
				display={ display[3] }
			/>
			<MessageInput
				placeholder=""
				propName="stars"
				display={ display[3] }
			/>
		{
			acc >= 5
				? <SaveButton />
				: ""
		}
    </div>
  );
}

