import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import axios from 'axios';

// import logo from './logo.svg';
import './App.css';
import Message from './components/Message';

const API = 'https://randomuser.me/api?results=50';

// const data = [
//   {id: 1, name: 'Vasya', logo, title: 'Title', text: 'Hello World'},
//   {id: 2, name: 'Oleg', logo, title: 'Lol Oleg', text: 'Hello Peace'},
//   {id: 3, name: 'Maria', logo, title: 'Maria Lol', text: 'Hello'}
// ]



class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: [],
    };
  }

  componentDidMount() {
    axios.get(API)
      .then((res) =>{
        this.setState({ userData: res.data.results });
      });
  }

  render() {
    const { userData } = this.state;
    console.log(userData, 'user data');
    return (
      <Router>
        <nav className="navigation">
          <ul className="navigation-list">
            <li>
              <Link to="/" className="navigation-link">
              Home
              </Link>
            </li>
            <li>
              <Link to="/hello" className="navigation-link">
              Hello
              </Link>
            </li>
            <li>
              <Link to="/signin" className="navigation-link">
              Reg
              </Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact>
          <div className="App">
        {userData.map(({ name, picture, location, id }) => {
          return (
            <Message 
          name={`${name.first} ${name.last}`}
          logo={picture.thumbnail}
          title={location.country}
          text={location.city}
          key={id.value}
          /> 
          ) 
        })}
      </div>
          </Route>
          <Route path="/hello">
            Hello!
          </Route>
          <Route path="/signin">
            Registattion!
          </Route>
        </Switch>
      </Router>
      
    );
  }
  
}

export default App;
