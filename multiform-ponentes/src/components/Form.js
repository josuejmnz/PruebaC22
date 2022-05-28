import React, { Component } from 'react'
import AccountSetup from './Setup'
import SocialProfiles from './Profile'
import Degrees from './Degrees'
import Confirm from './Confirm'
import Success from './Success'


export class Form extends Component {
    state = {
        step: 3,
        names: '',
        lastnames: '',
        summary: '',
        photo: '',
        email: '',
        acadDegree: '',
        
    };

    nextStep = () => {
        const { step } = this.state;
        this.setState({ step: step + 1 });
    };

    prevStep = () => {
        const { step } = this.state;
        this.setState({ step: step - 1 });
    };

    inputChange = input => e => {
        this.setState({
            [input]: e.target.value
        });
    };

    render() {
        const { step } = this.state;
        const { names, lastnames, summary, photo, email, acadDegree } = this.state;
        const values = { names, lastnames, summary, photo, email, acadDegree };

        switch (step) {
            case 1:
                return (
                    <AccountSetup
                        nextStep={this.nextStep}
                        inputChange={this.inputChange}
                        values={values}
                    />
                );
            case 2:
                return (
                    <SocialProfiles
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        inputChange={this.inputChange}
                        values={values}
                    />
                );    
            case 3:
                return (
                    <Degrees
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        inputChange={this.inputChange}
                        values={values}
                    />
                );
            case 4:
                return (
                    <Confirm
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                    />
                );
            case 5:
                return (
                    <Success />
                );   
             default:    
        }
    }
}

export default Form
