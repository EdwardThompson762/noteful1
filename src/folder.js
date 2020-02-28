import React, { Component } from 'react';

class Folder extends Component {

    addNotesToFolders = (event) => {
        event.preventDefualt();
    let newNote = {
        name: this.state.name
    }
    this.setState(
        {notes: [...this.state.notes, newNote]}
    )
    }
    render() {
        return(
            <section className='folderPage'>
                <div>
                    Folder
                </div>
                <div className='folderPageContent'>
                    {this.props.folders.map( folder =>{
                        return(
                            <div>
                                <h3>
                                    {folder.folderName}
                                </h3>
                        
                                
                            </div>
                        )
                    })
                    }
                </div>

            </section>
            
        )
        }
}
export default Folder;