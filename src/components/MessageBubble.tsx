import "./styles/message_bubble.css";

interface IMessageBubbleProps {
	profilePicture: string;
	message:        string;
}

export default function MessageBubble({ profilePicture, message }: IMessageBubbleProps): JSX.Element {
	return (
		<div className="message-bubble">
			<div className="message-bubble-flex-container">
				<img alt="profile_picture" src={ profilePicture } />
				<div className="message-bubble-msg-container">
					<p>{ message }</p>
				</div>
			</div>
		</div>
	);
}

