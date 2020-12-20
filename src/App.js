import './App.css';
import {Switch,Route} from 'react-router-dom';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import Footer from './components/footer/footer.component';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
