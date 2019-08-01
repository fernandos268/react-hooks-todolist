import React from 'react';
import { Button, Grid } from 'react-md';

export default ({ handleClick, todoList }) => {
   return (
      <Grid>
         <Button
            raised
            primary
            onClick={() => handleClick(todoList)}
            iconChildren='send'
            className='multiFields__addBtn'
         >
            Submit
         </Button>
      </Grid>
   )
}
