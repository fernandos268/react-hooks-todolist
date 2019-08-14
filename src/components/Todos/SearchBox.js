import React from 'react'
import { TextField, FontIcon, Grid, Cell } from 'react-md'

export default ({list, handleSearch}) => (
   <Grid>
      <Cell size={12}>
         <TextField
            id='search'
            label="Search"
            onChange={e => handleSearch(e, list)}
            rightIcon={<FontIcon>search</FontIcon>}
            fullWidth={true}
         />
      </Cell>
   </Grid>
)
