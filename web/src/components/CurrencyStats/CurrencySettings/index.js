import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import subDays from 'date-fns/subDays';
import format from 'date-fns/format';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

import './style.scss';

class CurrencySettings extends Component {
   render() {
      const currencyEls = this.props.currencies.map((el, i) => <option key={i}>{el}</option>);

      return (
         <Fragment>
            <p>Choose base currency and date...</p>

            <form className="currency-settings-form">
               <div className="form-group">
                  <select
                     name="base-currency"
                     className="form-control"
                     onChange={this.onBaseCurrencyChange}
                     value={this.props.baseCurrency}
                  >
                     <option disabled>Select base currency</option>
                     {currencyEls}
                  </select>
               </div>

               <div className="form-group">
                  <DayPickerInput
                     inputProps={{ className: 'form-control' }}
                     onDayChange={date => this.props.onCurrencyDateChange(date)}
                     formatDate={date => format(date, 'yyyy.MM.dd')}
                     placeholder={format(subDays(new Date(), 1), 'yyyy.MM.dd')}
                     value={this.props.date}
                     dayPickerProps={{
                        selectedDays: this.props.date,
                        disabledDays: {
                           // Disable days: today and further
                           after: subDays(new Date(), 1)
                        }
                     }}
                  />
               </div>
            </form>
         </Fragment>
      );
   }

   onBaseCurrencyChange = e => {
      const newCurrency = e.target.value;
      this.props.onBaseCurrencyChange(newCurrency);
   };
}

CurrencySettings.propTypes = {
   date: PropTypes.object.isRequired,
   currencies: PropTypes.array.isRequired,
   baseCurrency: PropTypes.string.isRequired,
   onBaseCurrencyChange: PropTypes.func.isRequired,
   onCurrencyDateChange: PropTypes.func.isRequired
};

export default CurrencySettings;
