import React, { Component } from 'react';
import moment from 'moment';
import { SingleDatePicker, isInclusivelyBeforeDay } from 'react-dates';

import 'react-dates/lib/css/_datepicker.css';
import './style.css';

import 'react-dates/initialize';

class CurrencySettings extends Component {
   constructor(props) {
      super(props);
      this.state = {
         date: moment().subtract(1, 'day'),
         focused: false,
         baseCurrency: props.baseCurrency
      };
   }
   
   render() {
      const currencyEls = this.props.currencies.map((el, i) =>
         <option key={i}>{el}</option>);

      return (
         <div>
            <p>Choose base currency and date...</p>

            <form className="currency-settings-form">
               <div className="form-group">
                  <select
                     name="base-currency"
                     className="form-control"
                     onChange={this.onBaseCurrencyChange.bind(this)}
                     value={this.state.baseCurrency} >

                     <option disabled>Select base currency</option>
                     {currencyEls}
                  </select>
               </div>

               <div className="form-group">
                  <SingleDatePicker
                     date={this.state.date} // momentPropTypes.momentObj or null
                     onDateChange={date => this.onCurrencyDateChange(date)} // PropTypes.func.isRequired
                     focused={this.state.focused} // PropTypes.bool
                     onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
                     showDefaultInputIcon={true}
                     isOutsideRange={day => !isInclusivelyBeforeDay(day, moment().subtract(1, 'day'))}
                     displayFormat="DD/MM/YYYY"
                     block={true}
                  />
               </div>
            </form>
         </div>
      );
   }

   onCurrencyDateChange(date) {
      this.setState({ date });
      this.props.onCurrencyDateChange(date);
   }

   onBaseCurrencyChange(e) {
      const newCurrency = e.target.value;

      this.setState({ baseCurrency: newCurrency })
      this.props.onBaseCurrencyChange(newCurrency);
   }
}

export default CurrencySettings;