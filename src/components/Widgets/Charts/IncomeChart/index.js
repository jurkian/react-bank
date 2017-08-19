import React, { Component } from 'react';
import { AreaChart, linearGradient, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Area } from 'recharts';

class IncomeChart extends Component {
   constructor(props) {
      super(props);
   }

   render() {
      return (
         <AreaChart width={900} height={300} data={this.props.data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
               <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
               </linearGradient>
               <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
               </linearGradient>
            </defs>
            <XAxis dataKey="date" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip separator=": " />
            <Legend verticalAlign="top" height={36}/>
            <Area type="monotone" dataKey="income" stroke="#82ca9d" fillOpacity={1} fill="url(#colorIncome)" />
            <Area type="monotone" dataKey="expenses" stroke="#8884d8" fillOpacity={1} fill="url(#colorExpenses)" />
         </AreaChart>
      );
   }
}

export default IncomeChart;