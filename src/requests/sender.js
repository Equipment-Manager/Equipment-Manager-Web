import axios from "axios";
import authHeaders from "./helpers/authHeader";

axios.defaults.baseURL = process.env.VUE_APP_API_URL;
axios.defaults.headers = authHeaders();
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
            return this.__responseWrapper(error.response, false);
        }
    },
    __responseWrapper(result, status = true) {
        const wrappedResponse = {
            success: result.data.success,
            status: result.status,
            message: result.data.message,
        };
        if (status) {
            wrappedResponse.data = result.data.data;
        }

        return wrappedResponse;
    },
};
