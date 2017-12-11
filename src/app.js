import React from 'react';
import ReactDOM from 'react-dom';
import validator from 'validator';
import TodoApp from '../scene/TodoApp/TodoApp';
import './styles/style.scss';

ReactDOM.render((
  <TodoApp />
), document.getElementById('app'));