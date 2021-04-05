import { Formik } from "formik";

import "./styles/message_bubble.css";
import "./styles/message_input.css";

interface IMessageInputProps {
	propName:      string;
	initialValue?: any;
}

export default function MessageInput({ propName, initialValue }: IMessageInputProps): JSX.Element {
	return (
		<div className="message-bubble">
			<div className="message-bubble-msg-container">
				<Formik
					initialValues={{ [propName]: initialValue || "" }}
					onSubmit={(values: any, { setSubmitting }: any): void => {
						setTimeout(() => {
							alert(JSON.stringify(values, null, 2));

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
									type="text"
									name={ propName }
									onChange={ handleChange }
									onBlur={ handleBlur }
									value={ values.email }
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

