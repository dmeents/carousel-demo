import axios from 'axios';

export const get = async (url: string): Promise<any> => axios.get(url);
