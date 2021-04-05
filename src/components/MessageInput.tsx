import { useState } from "react";
import { Formik } from "formik";

import "./styles/message_bubble.css";
import "./styles/message_input.css";

import emitter from "../utils/emitter";

import emailValidator from "../validators/emailValidator";
import dateValidator from "../validators/dateValidator";

interface IMessageInputProps {
	propName:      string;
	initialValue?: any;
	display:       boolean;
	placeholder:   string;
}

export default function MessageInput({ propName, initialValue, display, placeholder }: IMessageInputProps): JSX.Element {
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
							if (values.email && !emailValidator(values.email)) {
								errors.email = "Invalid email address";

								setError(true);
							} else if (values.bday && !dateValidator(values.bday)) {
								errors.bday = "Invalid birthday";

								setError(true);
							} else {
								setError(false);
							}
						}

						return errors;
					}}
					onSubmit={(values: any, { setSubmitting }: any): void => {
						emitter.emit("next_msg", values);

						setTimeout((): void => {
							setSubmitting(false);
						}, 400);
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
									placeholder={ placeholder }
									type="text"
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
		</div>
	);
}

