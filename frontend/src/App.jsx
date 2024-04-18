import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { globalRouters } from './router';

export default function App() {
  return (
    <Router>
      <Routes>
        {globalRouters.map((route, index) => (
          <Route 
            key={index}
            path={route.path} 
            element={route.element} 
          />
        ))}
      </Routes>
    </Router>
  );
}