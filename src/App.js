import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Swap from './pages/Swap';
import NotFound from './pages/NotFound';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          {/* <Route exact path='/' element={<LandingPage />}>
          </Route> */}
          <Route exact path='/' element={<Swap />}>
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
      {/* <div className="saturn">
        <img src="/images/saturn.svg" alt="saturn" />
      </div> */}
    </div>
  );
}

export default App;
