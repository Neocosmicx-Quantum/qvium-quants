console.log('Welcome to playground!');
import { Configuration, UsersApiFactory } from '../index.js';
const config = new Configuration({
    accessToken: '',
});
const userApi = UsersApiFactory(config);
const res = await userApi.getUserMeControllerGetMyUser();
console.log(res.data);
