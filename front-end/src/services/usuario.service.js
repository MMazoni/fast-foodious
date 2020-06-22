import axios from 'axios';
import router from '../router';

const Usuario = axios.create({
    baseURL: 'http://localhost:8080/'
});

export function login(data){
    return Usuario.post('users/login', {
        email : data.email,
        password : data.password
    })
}
export function logout(data){
    localStorage.setItem(data,null);
    localStorage.setItem('role_id',null);
    localStorage.setItem('id',null)
    router.push('login');
}
