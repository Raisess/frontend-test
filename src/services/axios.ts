import axios, { AxiosInstance } from "axios";

const instance: AxiosInstance = axios.create({
	baseURL: "https://606b4951f8678400172e6095.mockapi.io",
	headers: { "Content-Type": "application/json" }
});

export default instance;

