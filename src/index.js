import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FormContainer from './container';

class App extends Component {
    render() {
        return (
            <div className="col-md-6 registration-form">
                <h3>Availity Registration Form</h3>
                <FormContainer />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));