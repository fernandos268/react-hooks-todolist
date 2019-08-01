import React from 'react'

import {
   Button,
   DialogContainer,
   List,
   ListItem,
   FontIcon
} from 'react-md'

const todoListMapper = (list) => {
   const CompletedIcon = () => <FontIcon secondary>check</FontIcon>
   const InclompleteIcon = () => <FontIcon style={{color:'#ff6e40'}}>close</FontIcon>
   return list.map(({is_complete, title}) => {
      return (
         <ListItem
            primaryText={title}
            rightIcon={
               is_complete ? <CompletedIcon /> : <InclompleteIcon />
            }
         />
      )
   })
}

export default ({ visible = false, handleHide, todoList }) => {
   console.log({todoList});
   const actions = [
      { secondary: true, children: 'Cancel', onClick: handleHide },
      <Button flat primary onClick={handleHide}>
         Confirm
      </Button>,
   ]

   return (
      <DialogContainer
         id="simple-action-dialog"
         visible={visible}
         actions={actions}
         title="Submit List"
         centered
      >
         <List>
            {todoListMapper(todoList)}
         </List>
      </DialogContainer>
   )
}
