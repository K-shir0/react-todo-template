import { useEffect, useState, VFC } from 'react';
import { Task } from '../../domain/models/task';
import getTasks from '../../domain/services/get-tasks';

export type Props = {
  tasks: Task[];
};

const Tasks: VFC = () => {
  const [tasks, setTasks] = useState([] as Task[]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const load = async (): Promise<void> => {
      setIsLoading(true);

      try {
        const tasksData = await getTasks();
        setTasks(tasksData);
      } catch (err) {
        // eslint-disable-next-line no-alert
        alert(err);
      }
    };

    void load();
  }, []);

  return (
    <>
      <h1>TODO List</h1>
      <button type="button">追加</button>
      <button type="button">削除</button>
      <div>
        {isLoading &&
          tasks.map((task, k) => (
            <div key={k.toString()}>
              <input key={k.toString()} type="checkbox" />
              {task.title}
            </div>
          ))}
      </div>
    </>
  );
};

export default Tasks;
