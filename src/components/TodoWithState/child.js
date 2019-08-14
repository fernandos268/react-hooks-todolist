import React, { Component } from 'react'
import uuid from 'uuidv4'


class Child extends Component {
   handlePopulateList = () => {
      this.props.populateList(uuid())
   }

   render() {
      return(
         <button onClick={this.handlePopulateList}>CHILD BUTTON</button>
      )
   }
}

export default Child
