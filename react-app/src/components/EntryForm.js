import React, { useState }from "react";


const EntryForm = (props) => {
const {setEntry, entry } = props
const [user, setUser] = useState([])


const handleSubmit = (e) => {
  e.preventDefault()
  console.log(JSON.stringify(user))
  fetch('http://localhost:3000/api/scores', {
    method: 'POST',
    body: JSON.stringify(user),
  })
  .then(res => res.json())
  .then(json => setUser(json.user))
  // if (response.status !== 200){
  //   alert("The server in the warehouse server is down again. Please be try again later...did I stutter?!")
  // } else {
  const newScore = {...user}
  const newentry = entry.slice()
  newentry.push(newScore);
  console.log(newentry)
  setEntry(newentry);
  // }
}

return (
  <div className="ui segment">
    <h2>Add an Entry</h2>
    <form className="ui form" onSubmit={handleSubmit}>
      <div className="field">
        <label>First Name</label>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          onChange={e => setUser({ ...user, firstName: e.target.value })}
          required
        />
      </div>
      <div className="field">
      <label>Last Name</label>
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          onChange={e => setUser({ ...user, lastName: e.target.value })}
          required
        />
      </div>
      <div className="field">
        <label>Score</label>
          <input
            type="number"
            name="score"
            className="three wide field"
            placeholder="Score"
            onChange={e => setUser({ ...user, score: parseInt(e.target.value) })}
            required
          />
      </div>
      <button className="ui button" type="submit">Submit</button>
    </form >
  </div>
  );
}

export default EntryForm
