import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import './App.css';

class App extends Component {
    constructor(){
        super()
        this.state = {
            searchField: '',
            robots: [],
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=> {
                return response.json();
            })
            .then(users=> {
                this.setState({robots: users})
            });
    }

    onSearchChange = (event) => {
        this.setState({searchField:event.target.value})
    }


    render() {
        const {robots, searchField} = this.state;
        const filteredRobots =
        robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })

        if (!robots.length) { return <div>Loading</div> }

        return(
        <div>
            <h1 className='tc f1'>RoboFriends</h1>
            <SearchBox  searchChange = {this.onSearchChange}/>
            <CardList robots={filteredRobots}/>
        </div>
        );
    } 
}

export default App;

