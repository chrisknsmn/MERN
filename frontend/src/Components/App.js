
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from 'axios';
import './App.css';
import UserList from './User/UserList';
import UserSingle from './User/UserSingle';
import CreateUser from './User/CreateUser';
import UpdateUser from './User/UpdateUser';
import Nav from './Nav';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      Users: [],
      currentUser: {},
    }
    this.UpdateCurrentUser =  this.UpdateCurrentUser.bind(this);
  }

  componentDidMount() {
    const url = 'http://localhost:4000/users';
    axios.get(url)
      .then((Response) => {
        this.setState({
          Users: Response.data
        })
      })
      .catch((error) => {
        console.log(error);
      });
  };

  UpdateCurrentUser(item) {
    this.setState({
      currentUser: item
    })
  }

  render () {
    return (

    <BrowserRouter>
      <div className='container'>

        <Nav />

        <Routes>
          <Route path="/" element={<UserList users={this.state.Users} UpdateCurrentUser={this.UpdateCurrentUser} />} />
        </Routes>

        <Routes>
          <Route path="/read" element={<UserSingle user={this.state.currentUser} />} />
        </Routes>

        <Routes>
          <Route path="/create" element={<CreateUser />} />
        </Routes>

        <Routes>
          <Route path="/update" element={<UpdateUser user={this.state.currentUser} />} />
        </Routes>

      </div>
    </BrowserRouter>

    );
  }
}

export default App;

