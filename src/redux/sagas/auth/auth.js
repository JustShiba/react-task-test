const token = localStorage.getItem('userToken')

export const admin = {
    'email': 'ilya@gmail.com', 
    'password': '123456789'
}

export const config = {
    'headers': {
        'Authorization': `Bearer ${token}`
    }
}