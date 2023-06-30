import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Collections from './components/Collections';

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path='/' element={<Header />} />
      <Route path='/collections' element={<Collections />} />
    </Routes>
  </BrowserRouter>
}

export default App;
