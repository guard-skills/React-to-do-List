import React, { Component } from 'react';
import './App.css';

class App extends Component{

  constructor(props){
    super(props)

    this.state = {
      notes: [
        // {
        //   id: 1,
        //   text: 'Paint an illustration.'
        // },
        // {
        //   id: 2,
        //   text: 'Draw a user interface.'
        // },
        // {
        //   id: 3,
        //   text: 'App maker festival.'
        // },
        // {
        //   id: 4,
        //   text: 'Dua Lipa Auckland concert.'
        // },
        // {
        //   id: 5,
        //   text: 'Instrument recording, mixing.'
        // }
      ],
      noteInputValue : ''
    }

  }

  handleNoteInputChange = (e)=>{
    this.setState({noteInputValue:e.target.value})
    // console.log(e.target)
  }

  handleAddButtonClick = (e)=>{
    e.preventDefault()
    var note = {
      id: Date.now(),
      text: this.state.noteInputValue
    }

    var newNotes = [note, ...this.state.notes]

    this.setState({
      notes: newNotes,
      noteInputValue : ''
    })
  }

  handleDeleteButtonClick = (e)=>{
    var noteIdToDelete = e.target.id
    var notes = this.state.notes

    var filteredNotes = notes.filter((item)=>{
      return item.id !== noteIdToDelete
    })
  }

  render() {
    return (
      <div className="wrap">
        <div className="container">
          <h1>Hey Ming,<br />This is your to-do list.</h1>
          <div className="notes">
  
            {
              this.state.notes.map(note=>{

                return (
                  <div className="note" key={note.id}>
                    <div className="note-body">
                      <i id={note.id} className="far fa-times-circle note-remove" onClick={this.handleDeleteButtonClick}></i>
                      <div className="note-text">
                      {note.text}
                      </div>
                    </div>
                  </div>
              )
            })
          }
  
              <div className="note new-note">
                  <form action="#">
                    <div className="form-group">
                        <label htmlFor="note-input">
                            Add a new note
                        </label>
                        <textarea className="form-control" id="note-input" rows="4" value={this.state.noteInputValue} onChange={this.handleNoteInputChange}></textarea>
                    </div>
    
                    <button type="submit" className="btn btn-primary" onClick={this.handleAddButtonClick}><i className="fas fa-plus-circle"></i></button>
                  </form>
              </div>
          </div>
        </div>
      </div>
    );
  }
}



export default App;
