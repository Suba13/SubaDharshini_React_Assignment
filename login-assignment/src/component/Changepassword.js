import React, { Component } from 'react';
import '../css/changepassword.css';
import { Link } from 'react-router-dom';



class ChangePassword extends Component {
    render() {
        console.log(this.props.match.params.id)
        return (
            <div>
                <div className="container">
                
                    <h1 className="margin-line">Change Password</h1>
                    <label><b>Enter your New Password</b></label>
                    <input type="text" placeholder="Enter your new password" name="newpassword" onChange={(e) => {
                        this.props.passwordChange(e);
                    }}></input>
                     <label><b>Enter your Confirm Password</b></label>
                    <input type="password" placeholder="Reenter your new password" name="confirmpassword" onChange={(e) => {
                        this.props.passwordChange(e);
                    }}></input>
                    <button type="submit" onClick={() => {
                        this.props.passwordChangeClick(this.props.match.params.id,this.props.newpassword);
                    }}>Submit</button>
                
                    {/* <span>{this.props.token}</span>
                    <span className="message">{this.props.message}</span> */}
                    {/* <p>Name:{this.props.match.id}</p> */}
                    <Link to="/"> <span className="psw">Back to login</span></Link>
                </div>
            </div>
        )

    }
}
export default ChangePassword;