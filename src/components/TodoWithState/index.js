import React, { Component } from 'react'
import uuid from 'uuidv4'

import Child from './child'

class StatefulTodo extends Component {
   constructor(props){
      super(props)
      this.state = {
         myList: []
      }
      this.populateList2 = this.populateList2.bind(this)
   }

   populateList = (uuid) => {
      const { myList } = this.state
      this.setState({myList: [...myList, uuid]})
   }

   populateList2() {
      const { myList } = this.state
      this.setState({myList: [...myList, uuid()]})
   }

   populateList3 = function(){
      const { myList } = this.state
      this.setState({myList: [...myList, uuid()]})
   }.bind(this)

   render() {
      const { myList } = this.state
      return(
         <div>
            <h1>PARENT COMPONENT</h1>
            <Child populateList={this.populateList}/><br/><br/>
            <button onClick={this.populateList2}>POPULATE LIST 2</button><br/><br/>
            <button onClick={this.populateList3}>POPULATE LIST 3</button>
            <div>
               {
                  myList.map(item => {
                     return <div><h2>{item}</h2><br/></div>
                  })
               }
            </div>
         </div>
      )
   }
}

export default StatefulTodo
