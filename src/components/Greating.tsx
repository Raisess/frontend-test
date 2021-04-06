import "./styles/greating.css";

interface IGreating {
	botName:        string;
	profilePicture: string;
}

export default function Greating({ profilePicture, botName }: IGreating): JSX.Element {
	return (
		<div className="greating">
			<div className="greating-container">
				<h2>Você está conversando com:</h2>
				<img alt="pfp" src={ profilePicture } />
				<h2>{ botName }</h2>
			</div>
		</div>
	);
}

