
import './App.css'
import TaskFilter from './features/todo/TaskFilter'
import TaskInput from './features/todo/Taskinput'
import TaskList from './features/todo/TaskList'

function App() {
 

  return (
    <div className='app'>
     <p>Список типо дел</p>
     
     <TaskInput />
     <TaskFilter />
     <TaskList />
     
    </div>
  )
}

export default App
