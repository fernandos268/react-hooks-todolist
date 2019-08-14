export default {
   GetTodo(id) {
      return {
         type: 'GET_TODO',
         payload: id
      }
   },

   GetTodoList(data) {
      return {
         type: 'GET_TODO_LIST',
         payload: data
      }
   },

   AddTodo(data) {
      return {
         type: 'ADD_TODO',
         payload: data
      }
   },

   DeleteTodo(id) {
      return {
         type: 'DELETE_TODO',
         payload: id
      }
   },

}
