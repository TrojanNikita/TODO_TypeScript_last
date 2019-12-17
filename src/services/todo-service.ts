
import { useEffect, useState } from 'react';
import { Service } from '../types/service';
import {Todo} from './../types/Todo'

const useTodosByUrlService = (url: string) => {
  const [result, setResult] = useState<Service<Todo>>({
    status: 'loading'
  });

  useEffect(() => {
    if (url) {
      setResult({ status: 'loading' });
      fetch(url)
        .then(response => response.json())
        .then(response => setResult({ status: 'loaded', payload: response }))
        .catch(error => setResult({ status: 'error', error }));
    }
  }, [url]);

  return result;
};

export default useTodosByUrlService;


// interface IProps{
//     id:number;
//     name:string;
//     done:boolean;
// }


    //_server:String = 'http://gallery.dev.webant.ru/api';
  

  
    
  
//   export const getResource:Promise<T> =  (url:String) => {
//     const res = fetch(`${url}`);
  
//     if (!res.ok) {
//       throw new Error(`Could not fetch ${url}` +
//         `, received ${res.status}`)
//     }
//     return res.json();
//   };
  
//   postResource = async (url:String, ...params) => {
//     const res = await fetch(`${this._apiBase}${url}`,{
//       method: 'POST',
//       body: JSON.stringify(params)
//     });
//     if (!res.ok) {
//       throw new Error(`Could not fetch ${url}` +
//         `, received ${res.status}`)
//     }
//     return await res.json();
//   };
  
    // export const getTodos =  () => {
    //   const res:Promise<Todo> =  fetch(`/todos`).then(res=>res.json());
    //   return  res.data
    //   .map(_transformTodo);
    // };
  

    // function _transformTodo(todo:IProps):Todo {
    //   return {
    //     id:todo.id,
    //     label:todo.name,
    //     done:todo.done,
    //     priority:0
    //   }
    // }
 