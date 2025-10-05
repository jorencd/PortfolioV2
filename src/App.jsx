import './App.css'
import Profile from './modules/section/Profile'
import Navbar from './components/navbar/Navbar'
import Project from './modules/section/Project'

function App() {

  return (
   <div className='lg:px-15 px-5'>
        <Navbar />
        <div className='flex flex-col lg:flex-row'>
        <Profile />
        <Project />
        </div>
   </div>
  )
}

export default App
