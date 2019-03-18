import React, { Component } from 'react';
import { connect } from 'react-redux';
import {setSearchField, requestRobots} from '../actions';

import CardList from '../components/CardList.js';
import SearchBox from '../components/SearchBox';
import ErrorBoundry from '../components/ErrorBoundry';

import './App.css';

const mapStateToProps = (state) => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error,
    }
}

const mapDispatchToProps = (dispatch) => {
    //onSearchChange used here is a prop and could be called anyting. Not related to function below
    return{
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}
//
class App extends Component {
    componentDidMount() {
        this.props.onRequestRobots();
    }
    
    render() {
        const { robots, searchField, onSearchChange, isPending } = this.props;
        const filteredRobots = robots.filter(robot => {
          return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        return (
          <div className='tc'>
            <h1 className='f1'>RoboFriends</h1> 
            <SearchBox searchChange={onSearchChange}/>
            <div>
              { isPending ? <h1>Loading</h1> :
                <ErrorBoundry>
                  <CardList robots={filteredRobots} />
                </ErrorBoundry>
              }
            </div>
          </div>
        );
      }
    }  
    export default connect(mapStateToProps, mapDispatchToProps)(App);
    
    