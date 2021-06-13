import axios from "axios";

export type Role = { name: string };
export type User = { name: string; email: string; roles: Array<Role> };
export type AccessToken = { name: string };

export async function login(email: string, password: string) {
    const response = await axios.post("http://localhost:8080/api/auth/login", {
        email: email,
        password: password,
    });
    const token = response.data.data.token;
    localStorage.setItem("token", token);
    return token;
}

export async function getUser() {
    const user = await axios.get("http://localhost:8080/api/auth/user", {
        headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
        },
    });
    return user.data.user;
}

export function getToken() {
    const token = localStorage.getItem("token");
    if (token) {
        return token;
    }
    return "";
}
