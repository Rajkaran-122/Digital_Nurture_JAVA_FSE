import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Ex14 from './pages/Ex14_ContextTheme';
import Ex15 from './pages/Ex15_TicketRaising';
import Ex16 from './pages/Ex16_MailRegister';
import Ex17 from './pages/Ex17_FetchUser';
import Ex18 from './pages/Ex18_UnitTesting';
import Ex19 from './pages/Ex19_MockTesting';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="ex14" element={<Ex14 />} />
          <Route path="ex15" element={<Ex15 />} />
          <Route path="ex16" element={<Ex16 />} />
          <Route path="ex17" element={<Ex17 />} />
          <Route path="ex18" element={<Ex18 />} />
          <Route path="ex19" element={<Ex19 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
