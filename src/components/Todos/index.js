import React from 'react'
import { Grid, Card, Divider } from 'react-md'

// custom components
import TodoList from './TodoList'
import AddButton from '../common/AddButton'
import SanitizeButton from '../common/SanitizeButton'
import ClearButton from '../common/ClearButton'
import SubmitButton from '../common/SubmitButton'
import useForm from './useForm'
import ConfirmDialog from './ConfirmDialog';
import SearchBox from './SearchBox'

export default () => {

   const {
      todoList,
      handleAdd,
      handleClear,
      handleChange,
      handleDelete,
      handleSearch,
      filteredList,
      handleSanitize,
      sanitizedTodos,
      handlePressEnter,
      confirmationVisible,
      handleShowConfirmation,
      handleHideConfirmation
   } = useForm()

   return (
      <Grid
         className='md-paper'
         style={{alignItems: "center", display: "flex", justifyContent:"center"}}
      >

         <Card className='md-cell md-cell-12'>
            <SubmitButton
               todoList={todoList}
               handleClick={handleShowConfirmation}
            />
            <Grid>
               <SanitizeButton
                  todoList={todoList}
                  handleSanitize={handleSanitize}
                  className='md-cell md-cell-6'
               />
               <ClearButton
                  handleClear={handleClear}
                  className='md-cell md-cell-6'
               />
            </Grid>
            <Divider />
            <SearchBox
               list={todoList}
               handleSearch={handleSearch}
            />
            <Divider />
            <TodoList
               todoList={todoList}
               filteredList={filteredList}
               handleChange={handleChange}
               handleDelete={handleDelete}
               handlePressEnter={handlePressEnter}
            />
            <Divider />
            <AddButton
               handleAdd={handleAdd}
            />
         </Card>
         <ConfirmDialog
            visible={confirmationVisible}
            todoList={sanitizedTodos}
            handleHide={handleHideConfirmation}
         />
      </Grid>
   )
}
