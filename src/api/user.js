import {get} from '@/utils/request'

export const getUser= () => {
  return get('/api/user', '');
};
