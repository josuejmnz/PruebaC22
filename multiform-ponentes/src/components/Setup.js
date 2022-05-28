import React, { Component } from 'react'

export class Setup extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    render() {
        const { values, inputChange } = this.props;

        return (
            <div className="form-container">
                <h2>Bio</h2>
                <div className="form-group">
                    <label htmlFor="names">Names</label>
                    <input type="text" className="form-control" names="names" onChange={inputChange('names')} value={values.names} />
                </div>
                <div className="form-group">
                    <label htmlFor="lastnames">Last Names</label>
                    <input type="text" className="form-control" name="lastnames" onChange={inputChange('lastnames')} value={values.lastnames} />
                </div>
                <div className="form-group">
                    <label htmlFor="summary">Summary</label>
                    <input type="text" className="form-control" name="summary" onChange={inputChange('summary')} value={values.summary} />
                </div>
                <br />

                <div className="text-right">
                    <button className="btn btn-primary" onClick={this.continue}>Continue</button>
                </div>
            </div>
        )
    }
}

export default Setup
