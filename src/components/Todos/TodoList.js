import React from 'react'
import {
   Cell,
   Grid,
   Button,
   Checkbox,
   TextField
} from 'react-md'

const listMapper = (list, handleChange, handleDelete, handlePressEnter) => list
   .map(todoItem => {
   const { todo_id, is_complete, title} = todoItem
   return (
      <Grid key={todo_id}>
         <Cell align='bottom' size={2} >
            <Checkbox
               id={`cb_${todo_id}`}
               name={`cb_${todo_id}`}
               label=''
               checked={is_complete}
               onChange={e => handleChange(e, 'is_complete', list, todoItem )}
            />
         </Cell>
         <Cell align='bottom' size={8}>
            <TextField
               id="title"
               value={title}
               fullWidth={true}
               onKeyPress={e => handlePressEnter(e)}
               placeholder="Title"
               onChange={e => handleChange(e, 'title' , list, todoItem)}
            />
         </Cell>
         <Cell align='bottom' size={2}>
            <Button
               icon
               style={{color:'#ff6e40'}}
               id="btn_remove"
               key="btn_remove"
               onClick={() => handleDelete(todo_id, list)}
               iconChildren="delete"
            />
         </Cell>
      </Grid>
   )
})


export default ({todoList, filteredList, handleChange, handleDelete, handlePressEnter}) => {
   if(filteredList.length !== 0){
      return listMapper(filteredList, handleChange, handleDelete, handlePressEnter)
   }
   return listMapper(todoList, handleChange, handleDelete, handlePressEnter)
}
