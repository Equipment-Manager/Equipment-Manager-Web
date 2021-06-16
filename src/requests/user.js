import requestSender from "./sender";

export async function login(email, password) {
    const config = {
        method: "POST",
        url: "/auth/login",
    };
    const data = {
        email: email,
        password: password,
    };

    return await requestSender.send(config, data);
}

export async function getUser() {
    const config = {
        method: "GET",
        url: "/auth/user",
    };

    return await requestSender.send(config);
}
