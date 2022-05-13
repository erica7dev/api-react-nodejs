import './App.css'
import {Route, BrowserRouter} from 'react-router-dom';
import Home from './pages/Home';
import Form from './pages/Form';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Route element={<Home/>} path="/" />
        <Route element={<Form/>} path="/register" />
      </BrowserRouter>
    </div>
  )
}

export default App
