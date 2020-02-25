import React, { Component } from 'react';
import './App.js'
class Home extends Component {

     changeSection (event){
        event.preventDefault();
        this.props.changeNotes(event.target.notes)
        this.props.changeFolders(event.target.folders)
    }

    render() {
        return(
            
        <section className='homePage'>
            <div></div>
             <div className='homePageContent'>
                {this.props.home}
            </div>
            <div>
                <form onsubmit={(e) => this.handleAddFolder(e)} className="folderContent">
                    <input type="text"  name="folders"/>
                         <button type="submit" className="folderButton">
                               Add Folder
                        </button>
                        <button type="reset">
                        reset
                        </button>
                        {this.handleAddFolder}
                </form>
                <form onsubmit={(e) => this.handleAddNote(e)} className="noteContent">
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