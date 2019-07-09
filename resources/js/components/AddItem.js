import React, { Component } from 'react'
import axios from 'axios';

class AddItem extends Component {
  state = {
    content: ''
  }
  
  handleChange = (e) => {
    this.setState({
      content: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/item',this.state)
      .then(res =>{
        console.log(res);
      }).catch(err =>{
        console.log(err);
      })

    this.props.addItem(this.state);
    this.setState({
      content: ''
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} value={this.state.content} />
        </form>
      </div>
    )
  }
}

export default AddItem;