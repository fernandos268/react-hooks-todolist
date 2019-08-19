import React, { Component } from 'react'
import moment from 'moment'
import dateFns from 'date-fns'

class Calendar extends Component {
   state = {
      currentMonth: new Date(),
      selectedDate: new Date(),
      leaveList: [
         {
            dateStart: new Date('August 19, 2019'),
            dateEnd: new Date('August 22, 2019'),
            type: 'Leave'
         },
         {
            dateStart: new Date('August 7, 2019'),
            dateEnd: new Date('August 9, 2019'),
            type: 'Leave'
         },
         {
            dateStart: new Date('August 28, 2019'),
            dateEnd: new Date('August 28, 2019'),
            type: 'Leave'
         }
      ]
   }

   renderHeader() {
      const dateFormat = "MMMM YYYY";
      return (
         <div className="header row flex-middle">
            <div className="col col-start">
               <div className="icon" onClick={this.prevMonth}>
                  chevron_left
            </div>
            </div>
            <div className="col col-center">
               <span>
                  {dateFns.format(this.state.currentMonth, dateFormat)}
               </span>
            </div>
            <div className="col col-end" onClick={this.nextMonth}>
               <div className="icon">chevron_right</div>
            </div>
         </div>
      );
   }

   renderDays() {
      const dateFormat = "dddd";

      let startDate = dateFns.startOfWeek(this.state.currentMonth);

      const days = new Array(7).fill(0).map((e, i) => (
         <div className="col col-center" key={i}>
               {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
         </div>
      ))

      return <div className="days row">{days}</div>;
   }

   renderCells(content) {
      // console.log({content});
      const { currentMonth, selectedDate } = this.state;
      const monthStart = dateFns.startOfMonth(currentMonth);
      const monthEnd = dateFns.endOfMonth(monthStart);
      const startDate = dateFns.startOfWeek(monthStart);
      const endDate = dateFns.endOfWeek(monthEnd);
      const dateFormat = "D";
      const rows = [];

      let days = [];
      let day = startDate;
      let formattedDate = "";

      while (day <= endDate) {
         for (let i = 0; i < 7; i++) {
            formattedDate = dateFns.format(day, dateFormat);
            const cloneDay = day;
            days.push(
               <div
                  className={`col cell ${
                     !dateFns.isSameMonth(day, monthStart)
                        ? "disabled"
                        : dateFns.isSameDay(day, selectedDate) ? "selected" : ""
                     }`}
                  key={day}
                  onClick={() => this.onDateClick(dateFns.parse(cloneDay))}
               >
               {
                  content.map(e => {
                     if(dateFns.isWithinRange(moment(day), moment(e.dateStart),  moment(e.dateEnd))){
                        return <span>LEAVE</span>
                     }
                  })
               }
                  <span className="number">{formattedDate}</span>
                  <span className="bg">{formattedDate}</span>
               </div>
            );

            day = dateFns.addDays(day, 1);
         }
         rows.push(
            <div className="row" key={day}>
               {days}
            </div>
         );
         days = [];
      }

      return <div className="body">{rows}</div>;
   }

   onDateClick = day => {
      this.setState({
         selectedDate: day
      });
   }

   nextMonth = () => {
      this.setState({
         currentMonth: dateFns.addMonths(this.state.currentMonth, 1)
      })
   }

   prevMonth = () => {
      this.setState({
         currentMonth: dateFns.subMonths(this.state.currentMonth, 1)
      })
   }

   render() {
      const { leaveList } = this.state
      return (
         <div className='calendar'>
            {this.renderHeader()}
            {this.renderDays()}
            {this.renderCells(leaveList)}
         </div>
      )
   }
}

export default Calendar
