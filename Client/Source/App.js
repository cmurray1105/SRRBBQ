import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Home from './components/Home';
import Admin from './components/Admin/Admin'
import LogInModal from './components/Admin/LogInModal'
// import Orders from './components/Orders';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render(){
  return (
 <div>

        {/* A <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/admin" element={<Admin />} />
        </Routes>
        <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <LogInModal/>
            </li>
            <li>
              <Link to="/admin">Admin</Link>
            </li>
          </ul>
        </nav>
      </div>
      </div>
  );
}
}

// function Home() {
//   return <h2>Home</h2>;
// }



// function Users() {
//   return <h2>Users</h2>;
// }

