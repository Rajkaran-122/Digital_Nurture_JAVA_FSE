import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Ex01 from './pages/Ex01_FirstReact';
import Ex02 from './pages/Ex02_StudentPortal';
import Ex03 from './pages/Ex03_ScoreCalculator';
import Ex04 from './pages/Ex04_BlogApp';
import Ex05 from './pages/Ex05_CohortDashboard';
import Ex06 from './pages/Ex06_TrainersApp';
import Ex07 from './pages/Ex07_ShoppingApp';
import Ex08 from './pages/Ex08_CounterApp';
import Ex09 from './pages/Ex09_CricketApp';
import Ex10 from './pages/Ex10_OfficeRental';
import Ex11 from './pages/Ex11_EventExamples';
import Ex12 from './pages/Ex12_TicketBooking';
import Ex13 from './pages/Ex13_BloggerApp';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="ex01" element={<Ex01 />} />
          <Route path="ex02" element={<Ex02 />} />
          <Route path="ex03" element={<Ex03 />} />
          <Route path="ex04" element={<Ex04 />} />
          <Route path="ex05" element={<Ex05 />} />
          <Route path="ex06" element={<Ex06 />} />
          <Route path="ex07" element={<Ex07 />} />
          <Route path="ex08" element={<Ex08 />} />
          <Route path="ex09" element={<Ex09 />} />
          <Route path="ex10" element={<Ex10 />} />
          <Route path="ex11" element={<Ex11 />} />
          <Route path="ex12" element={<Ex12 />} />
          <Route path="ex13" element={<Ex13 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
