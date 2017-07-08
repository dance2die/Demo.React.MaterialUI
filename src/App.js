import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import axios from 'axios';
import AutoCompleteDropDown from './components/AutoCompleteDropDown';

class App extends Component {
    constructor(props) {
        super(props);

        this.usersURL = `https://jsonplaceholder.typicode.com/users`;
        this.postsURL = (userID) => {
            return `https://jsonplaceholder.typicode.com/posts?userId=${userID}`;
        };

        this.state = {
            users: [],
            posts: []
        };
    }

    componentDidMount() {
        axios.get(this.usersURL)
            .then((response) => {
                this.setState({users: response.data.map(user => user.name)});
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <div className="App">
                <MuiThemeProvider>
                    <AutoCompleteDropDown data={this.state.users} />
                </MuiThemeProvider>
            </div>
        );
    }
}

export default App;
