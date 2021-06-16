import axios from "axios";

axios.defaults.baseURL = process.env.VUE_APP_API_URL;

export default {
    async send(config, data = null) {
        try {
            const response = await axios({
                method: config.method,
                url: config.url,
                data,
                params: config.params,
            });
            return this.__responseWrapper(response);
        } catch (error) {
            return this.__responseWrapper(error, false);
        }
    },
    __responseWrapper(result, status = true) {
        const wrappedResponse = {
            status: result.status,
            message: result.message,
        };

        if (status) {
            wrappedResponse.data = result.data.data;
        } else {
            wrappedResponse.errors = {
                statusCode: result.status,
                errors: result.data.errors,
            };
        }

        return wrappedResponse;
    },
};
