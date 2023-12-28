import './App.css';
import Layout from './Client/View/Layouts/Layout';
import Sidebar from './Client/View/Layouts/Sidenav';
import MaterialsSearch from './Client/View/Material';
import MoleculeSearch from './Client/View/Molecules';
import PeriodicTable from './Client/View/PeriodicTable';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route path="/materials" element={<MaterialsSearch />} />
            <Route path="/molecules" element={<MoleculeSearch />} />
            <Route path="/periodic" index element={<PeriodicTable />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
