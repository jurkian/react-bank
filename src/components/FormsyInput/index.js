import React, { Component } from 'react';
import { withFormsy } from 'formsy-react';

class FormsyInput extends Component {
   changeValue(e) {
      this.props.setValue(e.currentTarget.value);
   }

   render() {
      const errorMessage = this.props.getErrorMessage();
      const className = `form-control ${this.props.className}`;

      return (
         <div>
            <input
               className={className}
               onChange={this.changeValue.bind(this)}
               type={this.props.type}
               placeholder={this.props.placeholder}
               value={this.props.getValue() || ''} />

            <p>{errorMessage}</p>
         </div>
      );
   }
}

export default withFormsy(FormsyInput);
