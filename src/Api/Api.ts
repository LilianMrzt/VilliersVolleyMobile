export const url = 'https://villiersvolleystrapi-production.up.railway.app';

const getArticles = async (params = '') => {
    try {
        const response = await fetch(`${url}/api/articles${params}`, {
            method: 'GET'
        });
        const json = await response.json();
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

const getSessions = async () => {
    try {
        const response = await fetch(`${url}/api/seances`, {
            method: 'GET'
        });
        const json = await response.json();
        return json.data;
    } catch (error) {
        console.error(error);
    }
};

const getContacts = async (params) => {
    try {
        const response = await fetch(`${url}/api/contacts${params}`, {
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
    getGeneralInformations,
    getSessions,
    getContacts
};
