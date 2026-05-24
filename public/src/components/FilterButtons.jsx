import { useRecoilState } from 'recoil'
import { filterAtom } from '../atoms/tasksAtom'

function FilterButtons() {
  const [filter, setFilter] = useRecoilState(filterAtom)

  return (
    <div style={{ marginTop: '20px' }}>
      <button onClick={() => setFilter('all')}>
        Todas
      </button>

      <button onClick={() => setFilter('completed')}>
        Concluídas
      </button>

      <button onClick={() => setFilter('pending')}>
        Pendentes
      </button>
    </div>
  )
}

export default FilterButtons
