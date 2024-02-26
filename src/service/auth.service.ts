import { instance } from '../api/axios.api';
import { UserDataInterface, ResponseUserDataInterface, UserInterface } from './../types/types';

export const AuthService = {
  async registration(userData: UserDataInterface): Promise<ResponseUserDataInterface | undefined> {
    const { data } = await instance.post<ResponseUserDataInterface>('users', userData);
    return data;
  },
  async login(userData: UserDataInterface): Promise<UserInterface | undefined> {
    const { data } = await instance.post<UserInterface>('auth/login', userData);
    return data;
  },
  async getProfile(): Promise<UserInterface | undefined> {
    const { data } = await instance.get<UserInterface>('auth/profile');
    if (data) return data;
  },
};
