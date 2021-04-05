import React, { Component } from 'react'

export default class CreateTodoForm extends Component {
    state = {
        todo : '',
    }
// the value set for todo in this function is basically the input field's value
    onInputChange = (event) => {
        this.setState({
            todo : event.target.value
        })
    }

    onFormSubmit = (event) => {
        // prevent the default action (form submission will cause a request to fire)
        event.preventDefault()
        //instantiate the cariable todo from state
        let todo = this.state.todo;
        this.props.createTodo(todo);
        //lastly we set todo value to empty
        this.setState({ 
            todo: ''
        })
    }

    render() {
        return (
            <div>
            {/* function onsubmit event handler prop in form element */}
                <form onSubmit={this.onFormSubmit} id="taskForm">
                    <input
                    // onchange of input we capture the event with onCHange event handler prop
                        onChange={this.onInputChange}
                        type="text" id="newItemDescription"
                        placeholder="What do you need to do?"
                        value={this.state.todo}
                    />
                    <button type="submit" className="btn" id="addTask">Add Todo</button>
                </form>
            </div>
        )
    }
}
