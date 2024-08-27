import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Home/Nav';
import routes from './components/routes';
import Footer from './components/Home/Footer';

const App = () => {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={<route.component />} />
          ))}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

