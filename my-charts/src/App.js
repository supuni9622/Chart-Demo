import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Index from './components/heatMap/Index';
import LineChartIndex from './components/lineChart/LineChartIndex';

import './App.css';

const App = () => {
  return (
    <Router>
      <div className='wrapper'>
        <div className='side'>
          <Navigation/>
        </div>
        <div className='main'>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/heat-map' component={Index}/>
            <Route path='/line-chart' component={LineChartIndex}/>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
