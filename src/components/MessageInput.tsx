import { Formik } from "formik";

import "./styles/message_bubble.css";
import "./styles/message_input.css";

import emitter from "../utils/emitter";

interface IMessageInputProps {
	propName:      string;
	initialValue?: any;
	display:       boolean;
	placeholder:   string;
}

export default function MessageInput({ propName, initialValue, display, placeholder }: IMessageInputProps): JSX.Element {
	return (
		<div className="message-bubble" style={{ display: display ? "" : "none" }}>
			<div className="message-bubble-msg-container">
				<Formik
					initialValues={{ [propName]: initialValue || "" }}
					onSubmit={(values: any, { setSubmitting }: any): void => {
						emitter.emit("next_msg", values);

						setTimeout(() => {
							setSubmitting(false);
						}, 400);
					}}
				>
					{
						({
							values,
							errors,
							touched,
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
								{ errors[propName] && touched[propName] && errors[propName] }
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

