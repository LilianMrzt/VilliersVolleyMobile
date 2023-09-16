export const url = 'http://10.0.2.2:5000';

const getArticles = async (params = '') => {
    try {
        const response = await fetch(`${url}/api/articles${params}`, {
            method: 'GET'
        });
        const json = await response.json();
        console.log(response.json());
        return json.data;
    } catch (error) {
        console.error(error);
    }
};

const getGeneralInformations = async () => {
    try {
        const response = await fetch(`${url}/api/general-information`, {
            method: 'GET'
        });
        const json = await response.json();
        return json.data;
    } catch (error) {
        console.error(error);
    }
};

export default {
    getArticles,
    getGeneralInformations
};
