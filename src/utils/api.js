import axios from 'axios';


export const baseURL = 'https://api.github.com';
export const repoUsername = '/repos/dennissiq/';
export const commits = '/commits'

// https://api.github.com/repos/dennissiq/osgame-frontend/commits
// export const githubApi = axios.create({
//     baseURL: 'https://api.github.com/users/dennissiq'
// });
export const githubApi = axios.create({
    baseURL: 'https://api.github.com'
});



