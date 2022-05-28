import React, { Component } from 'react'

export class Confirm extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const {
            values: { names, lastnames, summary, photo, email, acadDegree }
        } = this.props;

        return (
            <div className="form-container">
                <h2>Confirm</h2>
                <ul class="list-group">
                    <li class="list-group-item">Names: {names}</li>
                    <li class="list-group-item">Last names: {lastnames}</li>
                    <li class="list-group-item">sumamary: {summary}</li>
                    <li class="list-group-item">Photo: {photo}</li>
                    <li class="list-group-item">Email: {email}</li>
                    <li class="list-group-item">Academi Degree: {acadDegree}</li>
                    
                </ul>

                <br /><br />

                <div className="row">
                    <div className="col-6">
                        <button className="btn btn-danger" onClick={this.back}>Back</button>
                    </div>
                    <div className="col-6 text-right">
                        <button className="btn btn-primary" onClick={this.continue}>Continue</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Confirm
