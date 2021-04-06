import "./styles/greeting.css";

interface IGreeting {
	botName:        string;
	profilePicture: string;
}

export default function Greeting({ profilePicture, botName }: IGreeting): JSX.Element {
	return (
		<div className="greeting">
			<div className="greeting-container">
				<h2>Você está conversando com:</h2>
				<img alt="pfp" src={ profilePicture } />
				<h2>{ botName }</h2>
			</div>
		</div>
	);
}

