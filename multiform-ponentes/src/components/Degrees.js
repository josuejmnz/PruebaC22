import React, { Component } from 'react'


export class Degrees extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };


    render() {
        const { values, inputChange } = this.props;

        return (
            <div className="form-container">
                <h2>Degrees</h2>


                <div className="form-group">
                    <label htmlFor="acadDegree">Degrees</label>
                    <input type="text" className="form-control" name="acadDegree" onChange={inputChange('acadDegree')} value={values.acadDegree} />

                </div>
        

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

export default Degrees