
export const  fetchData=async <T>(url:string, method:string="GET",param?:T) => {
  return fetch(url,{
    method: method,
    body: JSON.stringify(param),
    headers: {'Content-Type':'application/json'}
  }).then(res=>{ 
        if (res.status >= 200 && res.status < 300) {  
           return Promise.resolve(res)  
        } else {  
          
          return Promise.reject(new Error(res.statusText))  
        }  
      }).then(res=>res.json());  
}