import axios from "axios";

export default async (term) => {
    const response = await axios.get(`https://api.unsplash.com/search/photos`, {
        params: {
            client_id: "abc",
        },
    });
    return response.data.results;
};
