import React, { Component } from 'react';
import TodoList from './TodoList'
import Form from './Form'


const Header = () => (
  <div className="header">TODO</div>
)


const Actions = () => (
  <div className="actions">Actions</div>
)

class Main extends Component {
  render() {
    return (
      <div className="main">
        <Header />
        <TodoList />
        <Form />
        <Actions />
      </div>
    );
  }
}

export default Main;
