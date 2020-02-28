import React, { Component } from 'react';
import './App.js'

class Home extends Component {

     changeFolders =(event)=>{
        event.preventDefault();
        let newFolder = {
            folderName: event.target.folders.value
        }
        this.props.handleAddFolder(newFolder)
    }

    changeNotes =(event)=>{
        event.preventDefault();
        let newNote = {
            noteName: event.target.notes.value
        }
        this.props.handleAddNote(newNote)
    }

    render() {
        return(
            
        <section className='homePage'>
            <div></div>
             <div className='homePageContent'>
                {this.props.home}
            </div>
            <div>
                <form onSubmit={(e) => this.changeFolders(e)} className="folderContent">
                    <input type="text"  name="folders"/>
                         <button type="submit" className="folderButton">
                               Add Folder
                        </button>
                        <button type="reset">
                        reset
                        </button>
                       
                </form>
                <form onSubmit={(e) => this.changeNotes(e)} className="noteContent">
                    <input type="text" name="notes"/>
                    <button type="submit" className="noteButton">
                         Add Note
                    </button>
                    <button type="reset">
                        reset
                    </button>
                </form>
            </div>
        </section>
            
        )
        }
}
export default Home;
//this.props.changeNotes(event.target.notes)
        //this.props.changeFolders(event.target.folders)