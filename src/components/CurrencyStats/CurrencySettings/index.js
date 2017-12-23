import React, { Component } from 'react';
import moment from 'moment';
import { SingleDatePicker, isInclusivelyBeforeDay } from 'react-dates';

import 'react-dates/lib/css/_datepicker.css';
import './style.css';

import 'react-dates/initialize';

class CurrencySettings extends Component {
   constructor() {
      super();
      this.state = { date: moment().subtract(1, 'day'), focused: false };
   }
   
   render() {
      return (
         <div>
            <p>Choose base currency and date...</p>

            <form className="currency-settings-form">
               <div className="form-group">
                  <input type="text" className="form-control" placeholder="Base currency..." />
               </div>

               <div className="form-group">
                  <SingleDatePicker
                     date={this.state.date} // momentPropTypes.momentObj or null
                     onDateChange={date => this.setState({ date })} // PropTypes.func.isRequired
                     focused={this.state.focused} // PropTypes.bool
                     onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
                     showDefaultInputIcon={true}
                     renderCalendarInfo={() => true}
                     isOutsideRange={day => !isInclusivelyBeforeDay(day, moment().subtract(1, 'day'))}
                  />
               </div>
            </form>
         </div>
      );
   }
}

export default CurrencySettings;