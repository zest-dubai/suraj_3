import React, { Component } from "react";
import {Redirect} from 'react-router-dom'
import '../styles/login.css'
import App4 from './gidcam';
import Button from '@material-ui/core/Button';
class GovID extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: "PAN",
      sides: 1,
      ID_done: false
    };
    const token =localStorage.getItem("token")
  }

  handleOptionChange = e => {
    this.setState({
      selectedOption: e.target.value
    });
    
  };

  handleFormSubmit = e => {
    e.preventDefault();
    const { selectedOption } =this.state;
    if(this.state.selectedOption === 'Aadhaar'||'Voter ID'){
        this.setState({
            sides: 2
        });
        this.setState({
            ID_done: true
        });
        console.log( this.state.selectedOption);
    }
    else{
        this.setState({
            ID_done: true
        });
    }

    console.log("You have submitted:", this.state.selectedOption);
  };

  render() {
    const { sides, ID_done, token } = this.state;
   /* if(!token)
    {
        return(
            <Redirect to="/"/>
        );
    } */
    if( ID_done === true)
    {
        return(
            <App4 sides={this.state.sides} />
        );
    }

    return (
      <div className="container">
        <div className="row mt-5">
          <div className="col-sm-12">
              {token}
              Choose a government ID proof for identity verification
              <br/> <br/>
            <form onSubmit={this.handleFormSubmit}>
              <div className="form-check">
                <label>
                  <input
                    type="radio"
                    name="1"
                    value="PAN"
                    checked={this.state.selectedOption === "PAN"}
                    onChange={this.handleOptionChange}
                    className="form-check-input"
                  />
                  PAN
                </label>
              </div>
              <div className="form-check">
                <label>
                  <input
                    type="radio"
                    name="1"
                    value="Voter ID"
                    checked={this.state.selectedOption === "Voter ID"}
                    onChange={this.handleOptionChange}
                    className="form-check-input"
                  />
                  Voter ID
                </label>
              </div>
              <div className="form-check">
                <label>
                  <input
                    type="radio"
                    name="1"
                    value="Aadhaar"
                    checked={this.state.selectedOption === "Aadhaar"}
                    onChange={this.handleOptionChange}
                    className="form-check-input"
                  />
                  Aadhaar
                </label>
              </div>
              <div className="form-check">
                <label>
                  <input
                    type="radio"
                    name="1"
                    value="Driving Lisence"
                    checked={this.state.selectedOption === "Driving Lisence"}
                    onChange={this.handleOptionChange}
                    className="form-check-input"
                  />
                  Driving Lisence
                </label>
                <br/> <br/>
                Upload the image(s) for the same.
              </div>
              <div className="form-group">
                <button className="btn btn-primary mt-2" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default GovID;