import React, { Component } from 'react';
import { withFormsy } from 'formsy-react';

class FormsyTextarea extends Component {
   changeValue(e) {
      this.props.setValue(e.currentTarget.value);
   }

   render() {
      const className = `form-control ${this.props.className}`;

      return (
         <textarea
            className={className}
            onChange={this.changeValue.bind(this)}
            placeholder={this.props.placeholder}
            rows="4" >
            
            {this.props.getValue() || ''}
         </textarea>
      );
   }
}

export default withFormsy(FormsyTextarea);
