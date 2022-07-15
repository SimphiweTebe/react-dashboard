import MainRoutes from '../Routes'
import SideBar from './Sidebar/Sidebar'

function App() {
  return (
    <main className='main'>
      <SideBar />
      <MainRoutes />
    </main>
  )
}

export default App