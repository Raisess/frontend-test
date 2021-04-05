import "./styles/save_button.css";

import userSchema from "../schemas/userSchema";

export default function SaveButton({ userProps }: any): JSX.Element {
	return (
		<div className="save-button-container">
			<button
				className="save-button"
				onClick={async (): Promise<void> => {
					console.log(userProps);
					const isValid: boolean = await userSchema.isValid(userProps);

					console.log(isValid);
				}}
			>
				Salvar
			</button>
		</div>
	);
}

