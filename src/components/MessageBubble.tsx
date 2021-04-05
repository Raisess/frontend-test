import "./styles/message_bubble.css";

interface IMessageBubbleProps {
	profilePicture: string;
	message:        string;
	display:        boolean;
}

export default function MessageBubble({ profilePicture, message, display }: IMessageBubbleProps): JSX.Element {
	return (
		<div className="message-bubble" style={{ display: display ? "" : "none" }}>
			<div className="message-bubble-flex-container">
				<img alt="profile_picture" src={ profilePicture } />
				<div className="message-bubble-msg-container">
					<p>{ message }</p>
				</div>
			</div>
		</div>
	);
}

