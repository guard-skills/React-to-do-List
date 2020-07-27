import React, { Component } from 'react';
import './App.css';

class App extends Component{

  constructor(props){
    super(props)

    this.notes = [
      {
        id: 1,
        text: 'Paint an illustration.'
      },
      {
        id: 2,
        text: 'Draw a user interface.'
      },
      {
        id: 3,
        text: 'App maker festival.'
      },
      {
        id: 4,
        text: 'Dua Lipa Auckland concert.'
      },
      {
        id: 5,
        text: 'Instrument recording, mixing.'
      }
    ]
  }

  render() {
    return (
      <div className="wrap">
        <div className="container">
          <h1>Hey Ming,<br />This is your to-do list.</h1>
          <div className="notes">
  
            {
              this.notes.map(note=>{

                return (
                  <div className="note">
                    <div className="note-body">
                      <i className="far fa-times-circle note-remove"></i>
                      <div className="note-text">
                      {note.text}
                      </div>
                    </div>
                  </div>
              )
            })
          }
  
              <div className="note new-note">
                  <div className="form-group">
                      <label htmlFor="note-input">
                          Add a new note
                      </label>
                      <textarea className="form-control" id="note-input" rows="4"></textarea>
                  </div>
  
                  <button type="submit" className="btn btn-primary"><i className="fas fa-plus-circle"></i></button>
              </div>
          </div>
        </div>
      </div>
    );
  }
}



export default App;
