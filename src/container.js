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
            }
        }

        this.submitForm = this.submitForm.bind(this);
        this.emptyForm = this.emptyForm.bind(this);
        
        this.handleFirstName = this.handleFirstName.bind(this);
        this.handleLastName = this.handleLastName.bind(this);
        this.handleNpiNumber = this.handleNpiNumber.bind(this);
        this.handleBusinessAddress = this.handleBusinessAddress.bind(this);
        this.handleTelephoneNum = this.handleTelephoneNum.bind(this);
        this.handleEmailAddress = this.handleEmailAddress.bind(this);
    }
    
    submitForm(e) {
        e.preventDefault();
        alert("New User: " + JSON.stringify(this.state.new_user));
        console.log(this.state.new_user);
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
        console.log("Cleared State");
    }

    handleFirstName(e) {
        let firstName = e.target.value;
        this.setState(
            prevState => ({
            new_user: {
                ...prevState.new_user,
                firstName: firstName
            }
            })
        );
    }

    handleLastName(e) {
        let lastName = e.target.value;
        this.setState(
            prevState => ({
            new_user: {
                ...prevState.new_user,
                lastName: lastName
            }
            })
        );
    }

    handleNpiNumber(e) {
        let npiNum = e.target.value;
        this.setState(
          prevState => ({
            new_user: {
              ...prevState.new_user,
              npiNum: npiNum
            }
          })
        );
    }

    handleBusinessAddress(e) {
        let businessAddress = e.target.value;
        this.setState(
          prevState => ({
            new_user: {
              ...prevState.new_user,
              businessAddress: businessAddress
            }
          })
        );
    }

    handleTelephoneNum(e) {
        let telephoneNum = e.target.value;
        this.setState(
          prevState => ({
            new_user: {
              ...prevState.new_user,
              telephoneNum: telephoneNum
            }
          }),
        );
    }

    handleEmailAddress(e) {
        let emailAddress = e.target.value;
        this.setState(
          prevState => ({
            new_user: {
              ...prevState.new_user,
              emailAddress: emailAddress
            }
          })
        );
    }

    render() {
        return (
            <form onSubmit={this.submitForm}>
                <Input 
                    inputType={"text"} 
                    title={"First Name: "} 
                    name={"name"} 
                    placeholder={"Enter your first name"}
                    handleChange={this.handleFirstName}
                    style={inputStyle}/> {/* First Name */}
                <Input 
                    inputType={"text"} 
                    title={"Last Name: "} 
                    name={"lastName"} 
                    placeholder={"Enter your last name"}
                    handleChange={this.handleLastName}
                    style={inputStyle}/> {/* Last Name */}
                <Input 
                    inputType={"text"} 
                    title={"NPI Number: "} 
                    name={"npiNum"} 
                    placeholder={"Enter NPI number"}
                    handleChange={this.handleNpiNumber}
                    style={inputStyle}/> {/* Npi number*/}
                <Input 
                    inputType={"text"} 
                    title={"Business Address: "} 
                    name={"businessAddress"} 
                    placeholder={"Enter your business address"}
                    handleChange={this.handleBusinessAddress}
                    style={inputStyle}/> {/* Business Address */}
                <Input 
                    inputType={"text"} 
                    title={"Telephone Number: "} 
                    name={"telephoneNum"} 
                    placeholder={"Enter your telephone number"}
                    handleChange={this.handleTelephoneNum}
                    style={inputStyle}/> {/* Telephone Number */}
                <Input 
                    inputType={"text"} 
                    title={"Email Address: "} 
                    name={"emailAddress"} 
                    placeholder={"Enter your email address"}
                    handleChange={this.handleEmailAddress}
                    style={inputStyle}/> {/* Email Address */}
                <Button 
                    action={this.submitForm}
                    type={"primary"}
                    title={"Submit"}
                    style={buttonStyle}/> {/* Submit Form */}
                <Button 
                    action={this.emptyForm}
                    type={"secondary"}
                    title={"Clear"}
                    style={buttonStyle}/> {/* Clear Form */}
            </form>
        );
    }
}

const inputStyle = {
    margin: "10px 10px 10px 10px",
    width: '220px', 
    paddingLeft: '1em'
};

const buttonStyle = {
    margin: "10px 10px 10px 10px"
};

const Input = (props) => {
    return (
        <div className="form-group">
            <label htmlFor={props.name} className="form-label">{props.title}</label>
            <input className="form-input" id={props.name} name={props.name} type={props.type} value={props.value}
                onChange={props.handleChange} placeholder={props.placeholder} style={props.style} />
        </div>
    )
}

const Button = (props) => {
    return (
        <button className={
          props.type === "primary" ? "btn btn-primary" : "btn btn-secondary"  
        } style={props.style} onClick={props.action}>{props.title}</button>
    )
}

export default FormContainer;