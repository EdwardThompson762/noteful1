import React, { Component } from 'react';


class Note extends Component {
    render() {
        return(
            <section className='notePage'>
                <div>
                    Note
                </div>
                <div className='notePageContent'>
                    {this.props.note}
                <button onClick={()=> delete({Note})}>
                    Remove Item
                </button>
                </div>
            </section>
            
        )
        }
}
export default Note;