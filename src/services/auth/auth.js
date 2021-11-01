const getToken = () => {
    return localStorage.getItem('userToken')
}

const token = getToken();

export const admin = {
    'email': 'ilya@gmail.com', 
    'password': '123456789'
}

export const config = {
    'headers': {
        'Authorization': `Bearer ${token}`
    }
}