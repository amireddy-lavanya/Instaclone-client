import {React} from 'react';
import { BrowserRouter,Routes, Route} from 'react-router-dom';
import Post from './Components/PostView/post';
import Form from './Components/Form/form';
import LandingPage from './Components/LandingPage/landing_page';


const App=()=>{
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/post' element={<Post/>}/>
      <Route path='/form' element={<Form/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;
