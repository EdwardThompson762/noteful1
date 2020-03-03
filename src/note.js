import React, { Component } from 'react';


class Note extends Component {
    
    render() {
        return(
            <section className='notePage'>
                <div>
                    Note
                </div>
                <div className='notePageContent'>
                    {this.props.notes.map( note =>{
                        return(
                            <div>
                                <h3>
                                    {note.noteName}
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
export default Note;