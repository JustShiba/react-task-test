import axios from 'axios'

import { config } from './auth/auth'


export const apiCall = ([ method, path, inf ]) => {
    if (inf) {
        return axios[method](`http://178.124.178.6:3000/${path}`, inf, config)
                    .then(resp => resp)
                    .catch(error => console.log(error))
    }
    return axios[method](`http://178.124.178.6:3000/${path}`, config)
                .then(resp => resp)
                .catch(error => console.log(error))
}
