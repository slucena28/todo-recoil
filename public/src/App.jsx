import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import FilterButtons from './components/FilterButtons'

function App() {
  return (
    <div className="container">
      <h1>Lista de Tarefas</h1>

      <TaskForm />
      <FilterButtons />
      <TaskList />
    </div>
  )
}

export default App
