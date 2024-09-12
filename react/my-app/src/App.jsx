import logo from './logo.svg';
import './App.css';
import CompShowBlogs from './blog/ShowBlog.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CompCreateBlog from './blog/CreateBlog.jsx';
import CompEditBlog from './blog/EditBlog.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <link 
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" 
          rel="stylesheet" 
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" 
          crossOrigin="anonymous"
        />
      </header>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CompShowBlogs />} />
          <Route path='/create' element={<CompCreateBlog />} />
          <Route path='/edit/:id' element={<CompEditBlog />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
