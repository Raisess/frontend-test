import { useState } from "react";
import { Formik } from "formik";

import "./styles/message_bubble.css";
import "./styles/message_input.css";

import emitter from "../utils/emitter";

interface IMessageInputProps {
	propName:      string;
	initialValue?: any;
	display:       boolean;
	placeholder?:  string;
	type?:         string;
	validator?:    (prop: string) => boolean;
}

export default function MessageInput({ propName, initialValue, display, placeholder, type, validator }: IMessageInputProps): JSX.Element {
	const [error, setError]: [boolean, Function] = useState(false);

	return (
		<div className="message-bubble input-bubble" style={{ display: display ? "" : "none" }}>
			<div className="message-bubble-msg-container" style={{ backgroundColor: error ? "#ea1c1f" : "" }}>
				<Formik
					initialValues={{ [propName]: initialValue || "" }}
					validate={(values: any): any => {
						const errors: any = {};

						if (!values[propName]) {
							errors[propName] = "Required";

							setError(true);
						} else {
							if (validator && !validator(values[propName])) {
								errors[propName] = "Invalid " + propName;

								setError(true);
							} else {
								setError(false);
							}
						}

						return errors;
					}}
					onSubmit={(values: any, { isSubmitting }: { isSubmitting: boolean }): void => {
						if (!isSubmitting) {
							emitter.emit("msg", values);
						}
					}}
				>
					{
						({
							values,
							handleChange,
							handleBlur,
							handleSubmit,
							isSubmitting
						}: any): JSX.Element => (
							<form
								className="message-form"
								onSubmit={ handleSubmit }
							>
								<input
									className="message-form-input"
									placeholder={ placeholder || "" }
									type={ type || "text" }
									name={ propName }
									onChange={ handleChange }
									onBlur={ handleBlur }
									value={ values[propName] }
								/>
								<button
									className="message-form-submit"
									type="submit"
									disabled={ isSubmitting }
								>
									<i className="fa fa-paper-plane" aria-hidden="true" />
								</button>
							</form>
						)
					}
				</Formik>
			</div>
			{ error && <p>O conteúdo deste campo é inválido</p> }
		</div>
	);
}

