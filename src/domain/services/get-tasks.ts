import ky, { Options } from 'ky';
import { Task } from '../models/task';
import DEFAULT_API_OPTIONS from './config';

const getTasks = async (options?: Options): Promise<Task[]> => {
  const mergedOptions = {
    ...DEFAULT_API_OPTIONS,
    ...options,
  };
  const response = await ky.get(`todos`, mergedOptions);

  return (await response.json()) as Task[];
};

export default getTasks;
