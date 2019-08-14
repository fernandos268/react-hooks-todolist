import { useState } from 'react';
import { InitialFields, InitialList } from './InitialState'
import uuid from 'uuidv4';
import Fuse from 'fuse.js'

export default () => {
   const [todoList, setTodoList] = useState(InitialList)
   const [sanitizedTodos, setSanitizedTodos] = useState([])
   const [confirmationVisible, setConfirmationVisible] = useState(false)
   const [filteredList, setFilteredList] = useState([])

   const handleChange = (value, key, list, todoItem) => {
      const newList = list.map(item => {
         if(item.todo_id === todoItem.todo_id){
            return {
               ...item,
               todo_id: todoItem.todo_id,
               [key]: value
            }
         }
         return item
      })
      setTodoList(newList)
   }

   const handleDelete = (id, list )  => {
      const newList = list.filter(e => e.todo_id !== id)
      setTodoList(newList)
   }

   const handleAdd = () => {
      setTodoList(todoList => [...todoList, {...InitialFields, todo_id: uuid()}])
   }

   const handleSanitize = (list) => {
      setTodoList(sanitize(list))
   }

   const handleClear = () => {
      setTodoList([])
   }

   const sanitize = (list) => list.filter(todo => todo.title !== '')

   const handleSubmit = (list) => {
      setSanitizedTodos(sanitize(list))
   }

   const handleShowConfirmation = (list) => {
      setSanitizedTodos(sanitize(list))
      setConfirmationVisible(true)
   }

   const handleHideConfirmation = () => {
      setConfirmationVisible(false)
   }

   const handleSearch = (value, list) => {
      var options = {
         keys: ['title']
      };
      var fuse = new Fuse(list, options)
      setFilteredList(fuse.search(value))
   }

   const handlePressEnter = (e) => {
      if(e.charCode === 13){
         if(e.target.value){
            e.focus
            handleAdd()
         }
      }
   }

   return {
      todoList,
      handleAdd,
      handleClear,
      handleChange,
      filteredList,
      handleSubmit,
      handleDelete,
      handleSearch,
      sanitizedTodos,
      handleSanitize,
      handlePressEnter,
      confirmationVisible,
      handleShowConfirmation,
      handleHideConfirmation
   }
}
