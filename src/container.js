import React, { Component } from 'react';

class FormContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            new_user: {
                firstName: '',
                lastName: '',
                npiNum: '',
                businessAddress: '',
                telephoneNum: '',
                emailAddress: ''
            },

            state: ['AK', 'AL', 'AR', 'AZ', 'CA', 'CO', 'CT', 'DC', 'DE', 'FL', 'GA', 'HI', 'IA', 'ID', 'IL', 'IN', 'KS', 'KY', 'LA', 'MA', 'MD', 'ME', 'MI', 'MN', 'MO', 'MS', 'MT', 'NC', 'ND', 'NE', 'NH', 'NJ', 'NM', 'NV', 'NY', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VA', 'VT', 'WA', 'WI', 'WV', 'WY']
        }

        this.submitForm = this.submitForm.bind(this);
        this.emptyForm = this.emptyForm.bind(this);

        this.handleFirstName = this.handleFirstName.bind(this);
        this.handleLastName = this.handleLastName.bind(this);
        this.handleNpiNumber = this.handleNpiNumber.bind(this);
        this.handleBusinessAddress = this.handleBusinessAddress.bind(this);
        this.handTelephoneNum = this.handTelephoneNum.bind(this);
        this.handleEmailAddress = this.handleEmailAddress.bind(this);

    }
    
    submitForm(e) {
        e.preventDefault();
        let new_user_registration = this.state.new_user;
        alert(new_user_registration);
    }
    
    emptyForm(e) {
        e.preventDefault();
        this.setState({
            new_user: {
                firstName: '',
                lastName: '',
                npiNum: '',
                businessAddress: '',
                telephoneNum: '',
                emailAddress: ''
            }
        })

        alert("Form cleared. State reset.");
    }

    handleFirstName(e) {
        let firstName = e.target.value;
        this.setState(
          prevState => ({
            newUser: {
              ...prevState.newUser,
              name: firstName
            }
          }),
          () => console.log(this.state.newUser)
        );
      }

    handleLastName(e) {
        let lastName = e.target.value;
        this.setState(
            prevState => ({
            newUser: {
                ...prevState.newUser,
                name: lastName
            }
            }),
            () => console.log(this.state.newUser)
        );
    }

    handleNpiNumber(e) {
        let npiNum = e.target.value;
        this.setState(
          prevState => ({
            newUser: {
              ...prevState.newUser,
              name: npiNum
            }
          }),
          () => console.log(this.state.newUser)
        );
    }

    handleBusinessAddress(e) {
        let businessAddress = e.target.value;
        this.setState(
          prevState => ({
            newUser: {
              ...prevState.newUser,
              name: businessAddress
            }
          }),
          () => console.log(this.state.newUser)
        );
    }

    handleTelephoneNum(e) {
        let telephoneNum = e.target.value;
        this.setState(
          prevState => ({
            newUser: {
              ...prevState.newUser,
              name: telephoneNum
            }
          }),
          () => console.log(this.state.newUser)
        );
    }

    handleEmailAddress(e) {
        let emailAddress = e.target.value;
        this.setState(
          prevState => ({
            newUser: {
              ...prevState.newUser,
              name: emailAddress
            }
          }),
          () => console.log(this.state.newUser)
        );
    }

    render() {
        return (
            <form onSubmit={this.submitForm} className="container">
                <Input /> {/* First Name */}
                <Input /> {/* Last Name */}
                <Input /> {/* Npi number*/}
                <Input /> {/* Business Address */}
                <Input /> {/* Telephone Number */}
                <Input /> {/* Email Address */}
                <Button /> {/* Clear Form */}
                <Button /> {/* Submit Form */}
            </form>
        );
    }
}

const Input = (props) => {
    return (
        <div className="form-group">
            <label htmlFor={props.name} className="form-label">{props.title}</label>
            <input className="form-input" id={props.name} name={props.name} type={props.type} value={props.value}
                onChange={props.handleChange} placeholder={props.placeholder} />
        </div>
    )
}

const Button = (props) => {
    return (
        <button style={props.style} onClick={props.action}></button>
    )
}

export default FormContainer;