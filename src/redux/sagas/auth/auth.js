const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIzMzE5ZjQ0Yy1kMWU0LTQ2YjMtOWJkZS0xMjJjMmRhNmI2NDUiLCJpYXQiOjE2MzUxMDc0NjEsImV4cCI6MTYzNTExNDY2MX0.EIou5roKV6t7U9hHD9tzjaZtviLiMeyJmfC5NEglApM"

export const user = {
    'email': 'ilya@gmail.com', 
    'password': '123456789'
}

export const config = {
    'headers': {
        'Authorization': `Bearer ${token}`
    }
}