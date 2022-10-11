import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Menu from './pages/Menu';

const App = () => {
  return (
    <div className="bg-black" style={{ height: '100%' }}>
      <Router>
        <Switch>
          <Route path="/menu">
            <Menu />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
    //page Menu
  );
};

export default App;
