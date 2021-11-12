import axios from 'axios'


export const apiCall = ([ method, path, inf, token = false ]) => {
    const config = {
        'headers': {
            'Authorization': `Bearer ${token ? token : localStorage.getItem('userToken')}`
        }
    }
    if (inf) {
        return axios[method](`http://178.124.178.6:3000/${path}`, inf, config)
                    
    }
    return axios[method](`http://178.124.178.6:3000/${path}`, config)
                
}
