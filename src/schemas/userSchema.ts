import * as yup from "yup";

const userSchema: yup.ObjectSchema<any> = yup.object().shape({
	username: yup.string().required(),
	address:  yup.string().required(),
	birthday: yup.string().required(),
	email:    yup.string().email().required(),
	stars:    yup.number().required()
});

export default userSchema;

