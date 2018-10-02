import React from "react";
import './Manager.css';

const Manager = () => {
    return (
        <div className="row searchDiv">
            <form> 
                <div className="form-group">
                    <label for="inputName">Name</label>
                    <input type="text" className="form-control" id="inputName" aria-describedby="emailHelp" placeholder="Name Search"></input>
                </div>
                <div className="form-group">
                    <label for="inputEvent">Event</label>
                    <input type="text" className="form-control" id="inputEvent" placeholder="Event Search"></input>
                </div>
                <div className="form-group">
                    <label for="inputSponsor">Sponsor</label>
                    <input type="text" className="form-control" id="inputSponsor" placeholder="Sponsor Search"></input>
                </div>
                <button type="submit" className="btn btn-primary submitBtn">Submit</button>
                </form>
        </div>
    );
};

export default Manager;