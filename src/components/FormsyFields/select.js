import React, { Component } from 'react';
import { withFormsy } from 'formsy-react';

class FormsySelect extends Component {
   changeValue(e) {
      this.props.setValue(e.currentTarget.value);
   }

   render() {
      const className = `form-control ${this.props.className}`;

      return (
         <select
            className={className}
            onChange={this.changeValue.bind(this)}
            value={this.props.getValue() || ''} >

            {this.props.children}
         </select>
      );
   }

   componentDidMount() {
      this.changeValue.bind(this);
   }
   
}

export default withFormsy(FormsySelect);
