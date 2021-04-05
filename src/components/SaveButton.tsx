import "./styles/save_button.css";

import userSchema from "../schemas/userSchema";
import createUser from "../services/createUser";

export default function SaveButton({ userProps }: any): JSX.Element {
	return (
		<div className="save-button-container">
			<button
				className="save-button"
				onClick={async (): Promise<void> => {
					const isValid: boolean = await userSchema.isValid(userProps);

					console.log(isValid);

					if (isValid) {
						await createUser(userProps);

						alert("Obrigado! Você já pode fechar a página.");
					}
				}}
			>
				Salvar
			</button>
		</div>
	);
}

