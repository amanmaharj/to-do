// Keeping the APi request in the file of their own we can axcess this file in any components as we need by making a call 
//SO this is a best practice

import axios from 'axios';

const endPoint = "https://super-crud.herokuapp.com/todos";

class TodoModel{
    static delete = (todo) => {
        let request = axios.delete(`${endPoint}/${todo._id}`);
        return request;
      };
    // Using axios, we create the todo. In the promise, we fetch all the todos and set the state to encapsulates those todos from the response.
    static create =(todo) => {
        let request = axios.post(endPoint, todo);
        return request
    }
    static all = () => {
        let request = axios.get(endPoint);
        return request
    }

    static update = (todo) => {
        let request = axios.put(`${endPoint}/${todo._id}`, todo);
        return request;
    };
}

export default TodoModel;