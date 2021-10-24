const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIzMzE5ZjQ0Yy1kMWU0LTQ2YjMtOWJkZS0xMjJjMmRhNmI2NDUiLCJpYXQiOjE2MzUxMTI5ODEsImV4cCI6MTYzNTEyMDE4MX0.vR1FOkEVWhRrdpwSQWCbYkXeOKpM0vggQdDichF9G6c"

export const user = {
    'email': 'ilya@gmail.com', 
    'password': '123456789'
}

export const config = {
    'headers': {
        'Authorization': `Bearer ${token}`
    }
}