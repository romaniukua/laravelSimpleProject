import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Items from './Items';
import AddItem from './AddItem';
import './App.scss';

class App extends Component {
  state = {
    items: [],
  }

  componentWillMount(){
    axios.get('/api/item')
      .then(res => {
        this.setState({
          items: res.data,
        })
      }).catch(err => {
        console.err(err);
      })
  };

  addItem = (item) => {
    item.id = Date.now();
    let items = [...this.state.items, item];
    this.setState({
      items
    });
  }

  handleClick = ({target}) => {
    const $btn = document.querySelector('.btn');
    const $menu = document.querySelector('.menu');
    if(target === $btn) {
        $menu.classList.toggle('active');
    }
    if(!target.closest('.menu') && !(target === $btn) && $menu.classList.contains('active')){
        $menu.classList.remove('active');
    }
    if(target.classList.contains('menu__content')){
      document.querySelector('.text').innerHTML = target.innerHTML;
      $menu.classList.remove('active');
    }
  }


  render(){
    return (
      <div className="App" onClick={this.handleClick}>
        <div className="container">
          <AddItem addItem={this.addItem}/>
          <p className="text"></p>
          <Items items={this.state.items}/>
        </div>
      </div>
    );
  }
}

if (document.getElementById('root')) {
  ReactDOM.render(<App />, document.getElementById('root'));
}


export default App;
