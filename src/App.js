import React, { Component } from 'react';
import './App.css';
import catData from './data/catData'
import Card from './components/Card'


class App extends Component {
state={ data:catData}


  render() {

    return <div className="container">
     {this.state.data.map(item=> <Card key={item.id} itemData={item} />) }
     </div>
           
  }
}

export default App;
