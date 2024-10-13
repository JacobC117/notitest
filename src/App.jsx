import { useEffect } from 'react';
import './App.css';
import BarChart from './components/BarChart';
import PieChart from './components/PieChart';
import QueueTimer from './components/QueueTimer';
import ComTable from './components/ComTable';
import PloTable from './components/PloTable';
import BarhChart from './components/BarhChart';
import LineChart from './components/LineChart';
import ProgBar from './components/ProgBar';
import StreamChart from './components/StreamChart';
import BullChart from './components/BullChart';
import SecureForm from './components/SecureForm';
import RadarChart from './components/RadarChart';
import { HashRouter as Router, Route, Routes } from "react-router-dom";

function App() {

return (

  <Router>
    <Routes>
    <Route path ="/LoungeChart" element={<BarChart/>}/>
    <Route path ="/Concen" element={<PieChart/>}/>
    <Route path ="/QueueTime"element={<QueueTimer/>}/>
    <Route path ="/CustomerComplaint"element={<ComTable/>}/>
    <Route path ="/Employee"element={<PloTable/>}/>
    <Route path ="/BagChart" element={<BarhChart/>}/>
    <Route path = "/ViewChart" element={<LineChart/>}/>
    <Route path = "/porttoport" element={<ProgBar/>}/>
    <Route path = "/airpressure" element={<StreamChart/>}/>
    <Route path = "/bullmonitor" element={<BullChart/>}/>
    <Route path = "/incidentlog" element={<SecureForm/>}/>
    <Route path = "/Radar" element={<RadarChart/>}/>
    </Routes>
  </Router>
);


}

export default App;