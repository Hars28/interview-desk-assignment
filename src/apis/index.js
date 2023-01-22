export const getUser = (setUser) => {
   try{
    fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((res)=>res.json())
    .then((res)=>{
        setUser(res)
    })
   }
   catch(e){
    return e
   } 
}

export const getData = (setData) => {
    try{
     fetch('https://jsonplaceholder.typicode.com/photos?-page=1&_limit=30')
     .then((res)=>res.json())
     .then((res)=>{
        setData(res)
     })
    }
    catch(e){
        return e
    }
}