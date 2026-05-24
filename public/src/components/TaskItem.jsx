import { useRecoilState } from 'recoil'
import { tasksAtom } from '../atoms/tasksAtom'

function TaskItem({ task }) {
  const [tasks, setTasks] = useRecoilState(tasksAtom)

  const toggleTask = () => {
    const updatedTasks = tasks.map(t =>
      t.id === task.id
        ? { ...t, completed: !t.completed }
        : t
    )

    setTasks(updatedTasks)
  }

  const removeTask = () => {
    const updatedTasks = tasks.filter(
      t => t.id !== task.id
    )

    setTasks(updatedTasks)
  }

  return (
    <div style={{ marginTop: '10px' }}>
      <span
        style={{
          textDecoration: task.completed
            ? 'line-through'
            : 'none'
        }}
      >
        {task.text}
      </span>

      <button onClick={toggleTask}>
        Concluir
      </button>

      <button onClick={removeTask}>
        Remover
      </button>
    </div>
  )
}

export default TaskItem
