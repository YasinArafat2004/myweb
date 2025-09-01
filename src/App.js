import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './componant/Home';
import Order from './componant/Order';
import Nav from './componant/Nav';

function App() {
  return (
    <>
      <Router>
      <Nav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<Order />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
