import { useState } from "react";

import "./styles/message_bubble.css";
import "./styles/message_input.css";
import "./styles/stars_input.css";

import emitter from "../utils/emitter";

export default function StarsInput({ display }: { display: boolean }): JSX.Element {
	const [count, setCount]: [number, Function] = useState(0);

	return (
		<div className="message-bubble input-bubble" style={{ display: display ? "" : "none" }}>
			<div className="message-bubble-msg-container stars-container-wrapper">
				<div className="stars-container">
					{
						[1, 2, 3, 4, 5].map((v: number): JSX.Element => {
							return (
								<button
									onClick={(): void => {
										setCount(v);

										emitter.emit("next_msg", { stars: v });
									}}
									style={{ color: count >= v ? "orange" : "" }}
								>
									<i className="fas fa-star" />
								</button>
							);
						})
					}
				</div>
			</div>
		</div>
	);
}

