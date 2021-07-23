import React from 'react';

import subDays from 'date-fns/subDays';
import format from 'date-fns/format';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

import './style.scss';

type Props = {
   date: Date;
   currencies: {}[];
   baseCurrency: string;
   onBaseCurrencyChange: (newCurr: string) => void;
   onCurrencyDateChange: (date: Date) => void;
};

const CurrencySettings: React.FC<Props> = (props) => {
   const currencyEls = props.currencies.map((el, i) => <option key={i}>{el}</option>);

   return (
      <>
         <p>Choose base currency and date...</p>

         <form className="currency-settings-form">
            <div className="form-group">
               <select
                  name="base-currency"
                  className="form-control"
                  onChange={(e) => {
                     const val = e.target.value;
                     props.onBaseCurrencyChange(val);
                  }}
                  value={props.baseCurrency}
               >
                  <option disabled>Select base currency</option>
                  {currencyEls}
               </select>
            </div>

            <div className="form-group">
               <DayPickerInput
                  inputProps={{ className: 'form-control' }}
                  onDayChange={(date) => props.onCurrencyDateChange(date)}
                  formatDate={(date) => format(date, 'yyyy.MM.dd')}
                  placeholder={format(subDays(new Date(), 1), 'yyyy.MM.dd')}
                  value={props.date}
                  dayPickerProps={{
                     selectedDays: props.date,
                     disabledDays: {
                        // Disable days: today and further
                        after: subDays(new Date(), 1),
                     },
                  }}
               />
            </div>
         </form>
      </>
   );
};

export default CurrencySettings;
