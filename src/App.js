import './App.css';
import {Routes,Route} from 'react-router-dom';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import Footer from './components/footer/footer.component';
import Projects from './pages/projectspage/projects.component';
import Experience from './pages/experiencepage/experiencePage.component';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path = '/projects' element = {<Projects />} />
        <Route exact path='/experience' element={<Experience />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
