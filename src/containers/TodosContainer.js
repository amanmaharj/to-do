import React, { Component } from 'react'
import TodoModel from '../models/Todo';
import Todos from '../components/Todos';
import CreateTodoForm from '../components/CreateTodoForm';

export default class TodosContainer extends Component {
    state = {
        todos: [],
    }

    createTodo = (todo) => {
        let newTodo = {
            body:todo,
            completed:false,
        }
    }
    // After the todo delete response is sent back from the server, we find the corresponding entry for the todo in our todos state array and remove it.
    deleteTodo = (todo) => {
        TodoModel.delete(todo).then((res) => {
            let todos = this.state.todo.filter((todo) => {
                return todo._id !== res.data._id;
            })
            this.setState({todos})
        })
    }

    updateTodo = todo => {
        const isUpdatedTodo = t => {
            return t._id === todo._id;
        };
    
        TodoModel.update(todo)
            .then((res) => {
              let todos = this.state.todos;
              todos.find(isUpdatedTodo).body = todo.body;
              this.setState({ todos: todos });
            });
      };

    componentDidMount() {
        this.fetchData();
    }

    fetchData = () => {
        TodoModel.all().then((res) => {
            this.setState({
                todos:res.data.todos,
            })
        });
    }
    render() {
        
        return (
            <div className='todosContainer'>
                <CreateTodoForm 
                    createTodo={this.createTodo} />
                <Todos
                    todos={ this.state.todos }
                    updateTodo={ this.updateTodo } 
                    deleteTodo={ this.deleteTodo }
                />
             </div>
        )
    }
}

