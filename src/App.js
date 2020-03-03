import React from 'react';
import './App.css';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Folder from './folder';
import Home from './home';
import Note from './note';
import PropTypes from 'prop-types';
//drop down menu for notes in folders
//DevTools audits is a chrome extension
//start on 9090 for server this.props.history.push('/');
//start on 3000 for react
class App extends React.Component {
  state = {
    home:[],
    notes:[],
    folders:[]
  }

handleAddFolder=(folder)=>{
  let folders = this.state.folders;
  folders.push(folder)
  this.setState({
    folders:folders
  })
}
//Add notes to the folders
handleAddNote=(note)=>{
  let notes = this.state.notes;
  notes.push(note)
  this.setState({
    notes:notes
  })
}

componentDidMount(){
  fetch("http://localhost:9090/folders")
    .then(res => res.json())
    .then(
        (result) => {
          this.setState({
            folder:result
        }
    )
      
  })
  fetch("http://localhost:9090/notes")
    .then(res => res.json())
    .then(
        (result) => {
          this.setState({
            note:result
          }
    )
      })
}

    deleteItem = () => {
      const route = this.state.route.filter(i => i.id !== context.id)
      this.setState({route})
      const context= {
        home: this.state.page,
        folder: this.state.page,
        note: this.state.page
      }
    }
  
    //Make two different addNote and addFolder similar to delete but seperate
    //make form under render on the homepage 
    addItem = () => {
     const addNote = this.state.push()
       this.setState({addNote})
       
      const addFolder = this.state.push()
        this.setState({addFolder})
        
      }
  changeFolders = () => {
    this.setState({
      folder:this.state.folder
    })
  }
  changeNotes = () => {
    this.setState({
      note:this.state.note
    })
  }
//What is PaymentResponse?
goBackToHomepage = () => {
 const goHome = this.PaymentResponse.history.push('/')
      this.setState({goHome})
} 

render() {
  
  return ( 
    <BrowserRouter>
   <div>
   <div>
        Noteful
  </div>
  <div className="fetchRequests">

  </div>
 <content className='Nav'> 
  <Link to ='/'> Home </Link> 
  <Link to ='/folder'> Folder </Link> 
  <Link to ='/note'> Note </Link> </content> 

<main>
 <Route path ="/" render={()=><Home handleAddNote={this.handleAddNote}
 handleAddFolder={this.handleAddFolder}
 changeFolders={this.changeFolders}changeNotes={this.changeNotes}></Home>}/>
 
 <Route path="/folder" render={()=> <Folder folders={this.state.folders}/>}/>
 
 <Route path="/note" render={()=> <Note notes={this.state.notes}/>}/>
</main>
  
</div>
  </BrowserRouter>
  );
  }

};
export default App;

App.propTypes = {
 click: PropTypes.func,
  changeNotes: PropTypes.string,
    changeFolders: PropTypes.string,
      notes:PropTypes.string,
        folders:PropTypes.string
  
};

