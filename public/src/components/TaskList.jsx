import { useRecoilValue } from 'recoil'
import { filteredTasksSelector } from '../selectors/filteredTasksSelector'
import TaskItem from './TaskItem'

function TaskList() {
  const tasks = useRecoilValue(filteredTasksSelector)

  return (
    <div>
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  )
}

export default TaskList
