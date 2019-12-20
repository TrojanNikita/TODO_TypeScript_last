import React,{useEffect} from 'react'

import {getAllTodos} from '../selectors/todo-selectors';

import {connect} from 'react-redux';
import {GlobalState} from '../types';
import {fetchTodos} from './../actions/actionTodo';

import {ActionTypeTodo} from './../types/Action';
import TodoList from '../components/todo-list';
import ErrorIndicator from './../components/error/error-indicator';
import Spinner from './../components/spinner/spinner';

type ListContainer=ReturnType<typeof mapStateToProps>&
{
    fetchTodos:() => Promise<ActionTypeTodo>;
};


const TodoListWithData:React.FC<ListContainer> =({error,loading,data,fetchTodos}) => {


    useEffect(() => {
        fetchTodos()
      }, [fetchTodos])
  
  



    if(loading){
        return <Spinner/> ;
    }
     if(error){
        return <ErrorIndicator/>;
    }
     return  <TodoList data={data}/>;
}; 






const mapStateToProps=(state:GlobalState) => (
{
        data:getAllTodos(state),
        error:state.TodoReduce.error,
        loading:state.TodoReduce.loading
});
const mapDispatchToProps = {fetchTodos};

export default connect(mapStateToProps,mapDispatchToProps)(TodoListWithData);