export default function reducer(state,action){
    switch (action.type) {
      case 'add':{
        return [...state,{id:Date.now(),text:action.payload,isDone:false}]
      }
      case 'delete':{
        return state.filter(todo => todo.id !== action.payload)
      }
      case 'done':{
        return state.map(todo =>{
          if(todo.id === action.payload){
              return {...todo,isDone:!todo.isDone}
          }
          return todo
        })
      }
      case 'deleteDone':{
        return state.filter(todo => !todo.isDone)
      }
      default:
        return state
    }
}