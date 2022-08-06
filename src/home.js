import React, { Component } from "react";
// import ReactDOM from "react-dom";
import Layout from './components/layout/Layout';

import './home.css'

class Home extends Component {
    constructor(props) {
      super(props);
      this.state = {
        click: false,
        name: "",
        psswd: "",
        loggedIn: ""
      };

      this.changeEmail = this.changeEmail.bind(this);
      this.changePassword = this.changePassword.bind(this);
      this.authen = this.authen.bind(this);
      this.login = this.login.bind(this);
    }

  changeEmail(key) {
      let input = key.target.value
      this.setState({
      name: input
    });
  }
  changePassword(key) {
    let input = key.target.value
    this.setState({
    psswd: input
  });
}
authen(key){
  if(key.charCode === 13 && this.state.name.toLowerCase() === 'admin' && this.state.psswd.toLowerCase() === 'admin')
  this.setState({
    loggedIn: "admin"
  });
  else if(key.charCode === 13 && this.state.name.toLowerCase() === 'guest' && this.state.psswd.toLowerCase() === 'guest')
  this.setState({
    loggedIn: "guest"
  });
}

login(){
  if(this.state.name.toLowerCase() === 'admin' && this.state.psswd.toLowerCase() === 'admin')
  this.setState({
    loggedIn: "admin"
  });
  else if(this.state.name.toLowerCase() === 'guest' && this.state.psswd.toLowerCase() === 'guest')
  this.setState({
    loggedIn: "guest"
  });
}

  render() {
     return (
      //  <div>

      //    <div>
      //     {this.state.loggedIn === "admin"?
      //       <Layout/>
      //     :
      //     <>
      //       {this.state.loggedIn === "guest"?
      //         <LayoutGuest/>
      //         :
      //         <div className="container">
      //             <div className="login-card">
      //               <div className="logo">
      //                   <img src="favicon.png" alt="company logo" />
      //               </div>
      //               <div className="form">
      //                 <label htmlFor="name">Email:</label>
      //                 <input placeholder="admin / guest" type="text" id="name" onInput={key => this.changeEmail(key)} onKeyPress={key => this.authen(key)} />

      //                 <label htmlFor="passwd">Password:</label>
      //                 <input placeholder="admin / guest" type="text" id="name" onInput={key => this.changePassword(key)} onKeyPress={key => this.authen(key)} />

      //                 <button onClick={this.login}>Login</button>
      //               </div>
      //             </div>
      //           </div>
      //       }
      //       </>
      //     }
      //    </div>
      //  </div>
      <Layout/>
     );
  }
}

export default Home;
