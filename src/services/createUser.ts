import instance from "./axios";

interface IUser {
	username: string;
	address:  string;
	birthday: string;
	email:    string;
	stars:    number;
}

export default async function createUser(user: IUser): Promise<void> {
	try {
		await instance.post("/users", user);
	} catch(err) {
		console.error(err);
	}
}

