import React, { Component } from 'react';

class Folder extends Component {
    render() {
        return(
            <section className='folderPage'>
                <div>
                    Folder
                    </div>
                <div className='folderPageContent'>
                    {this.props.folder}
                <button onClick={()=> delete({Folder})}>
                    Remove Item
                </button>
                </div>
            </section>
            
        )
        }
}
export default Folder;