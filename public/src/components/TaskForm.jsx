import { useState } from 'react'
import { useRecoilState } from 'recoil'
import { tasksAtom } from '../atoms/tasksAtom'

function TaskForm() {
  const [text, setText] = useState('')
  const [tasks, setTasks] = useRecoilState(tasksAtom)

  const addTask = () => {
    if (!text.trim()) return

    const newTask = {
      id: Date.now(),
      text,
      completed: false
    }

    setTasks([...tasks, newTask])
    setText('')
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Digite uma tarefa"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={addTask}>
        Adicionar
      </button>
    </div>
  )
}

export default TaskForm
