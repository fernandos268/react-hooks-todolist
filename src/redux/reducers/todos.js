const initialState = {
   todoList: []
}

export default (state = initialState, {type, payload}) => {
   switch(type) {
      case 'ADD_TODO':
         return {...state, payload}
      case 'DELETE_TODO':
         return {...state.filter(({todo_id}) => todo_id !== payload)}
      case 'GET_TODO':
         return state.find(({todo_id}) => todo_id === payload)
      case 'GET_TODO_LIST':
         return state.todoList
      default:
         return state
   }
}
