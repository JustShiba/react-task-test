import axios from 'axios';

import { USER__TOKEN } from 'redux/constances/constances';

export const apiCall = ([method, path, inf, token = false]) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token ? token : localStorage.getItem(USER__TOKEN)}`,
        },
    };
    if (inf) {
        return axios[method](`http://178.124.178.6:3000/${path}`, inf, config);
    }
    return axios[method](`http://178.124.178.6:3000/${path}`, config);
};
