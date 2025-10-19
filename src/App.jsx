import './App.css'
import Profile from './modules/section/Profile'
import Navbar from './components/navbar/Navbar'
import Project from './modules/section/Project'
import Footer from './components/footer/Footer'

function App() {

  return (
   <div className='lg:px-15 md:px-15 px-5 bg-white'>
        <Navbar />
        <div className='flex flex-col md:flex-row lg:flex-row'>
        <Profile />
        <Project />
        </div>
        <Footer />
   </div>
  )
}

export default App
