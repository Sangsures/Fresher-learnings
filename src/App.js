// App.js
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './Components/Redux/store'; 
import Layout from './Components/Layout/Layout';
import MainContent from './Components/Maincontent/Maincontent';
import Content from './Components/Content/Content';
import Monitoring from './Components/Monitoring/Monitoring';
import Dashboard from './Components/Dashboard/Dashboard';
import API from './Components/API/API';
import TodoApp from './Components/TodoApp';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="cloud-monitoring" element={<MainContent />} />
              <Route path="user-management" element={<Content />} />
              <Route path="Reports" element={<Monitoring />} />
              <Route path="Dashboard" element={<Dashboard />} />
              <Route path="Movielist" element={<API />} />
              <Route path="Todolist" element={<TodoApp />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
