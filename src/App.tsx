import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Articles from './components/Articles';
import ArticleDetail from './components/ArticleDetail';
import { Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <header className='App-header'>
          <Link to='/' className='text-decoration-none text-white'>
            <h1>Space Flight Articles</h1>
          </Link>
        </header>
      </div>
      <div>
        <Routes>
          <Route path='/' element={<Articles />} />
          <Route path='/:id' element={<ArticleDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
