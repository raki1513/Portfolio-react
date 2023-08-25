import './App.css';
import { Routes,Route } from 'react-router-dom';
import Homepage from './pages/Home.page';
import Aboutme from './pages/Aboutme.page';
import ProjectsPage from './pages/Projects.page';
import CerticationsPage from './pages/Certications.page';
function App() {
  return (
    <div className="App" id='App'>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/About' element={<Aboutme/>}/>
        <Route path='/Project' element={<ProjectsPage/>}/>
        <Route path='/Certificates' element={<CerticationsPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
