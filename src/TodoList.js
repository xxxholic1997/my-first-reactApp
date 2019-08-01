import React, { Component } from 'react';

class TodoList extends Component {

  constructor(props){
    super(props);
    this.state={

    }
  }

   handleBtnClick(){

   }

  render() {
    return (
      <div>
        <div>
          <input />
          <button onClick={this.handleBtnClick}>add</button>
        </div>
        <ul>
          {
            this.state.list.map((item) => {
              
            })
          }
        </ul>
      </div>
    );
  }
}

export default TodoList;
