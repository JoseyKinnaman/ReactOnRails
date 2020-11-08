import React, { useState, useEffect } from "react";

const EntryForm = () => {


 return (
   <div className="ui segment">
      <form className="ui form">
    <div className="field">
      <label>Name</label>
      <input type="text" name="first-name" placeholder="First Name" required />
    </div>
    <div className="field">
      <input type="text" name="last-name" placeholder="Last Name" required />
    </div>
    <div className="field">
      <label>Score</label>
        <input type="number" className="three wide field" required/>
    </div>
    <button className="ui button" type="submit">Submit</button>
  </form>
  </div>
  );
}

export default EntryForm
