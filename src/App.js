import './App.scss';
import Header from './components/Header/Header';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="app-container">
      <Header/> 
      <div>
        test link
        <div>
          <button>
            <Link to="/users">go to user page</Link>
          </button>
          <button>
            <Link to="/admin">go to admin page</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
