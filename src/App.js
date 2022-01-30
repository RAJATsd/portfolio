import './App.css';
import {Switch,Route} from 'react-router-dom';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import Footer from './components/footer/footer.component';
import Projects from './pages/projectspage/projects.component';
import Experience from './pages/experiencepage/experiencePage.component';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path = '/projects' component = {Projects} />
        <Route exact path='/experience' component={Experience} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
