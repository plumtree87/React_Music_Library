import '../components/App.css';
import React, {Component} from 'react';
import axios from 'axios'
import Song from './Songs/Song';
import SongTable from './Songs/SongTable';
import SongCreator from './CreateSong/createSong';

class App extends Component {
  state = {
    songs: []
  }

  componentDidMount(){
    //gets called after the component did mount (rendered to the page)
    console.log("component did mount");
    this.getAllSongs();
 
  }

  async getAllSongs(){
    let response = await axios.get('http://127.0.0.1:8000/music/');
    this.setState({
      songs: response.data
    })
  }

  addSong(song){
    axios.post(`http://127.0.0.1:8000/music/`, song)
    this.getAllSongs();
    debugger;
      
    
  }

  deleteSong(id){
    // HOW DO I TAKE THE song.id from Song.js and use that to Del it using AXIOS
    console.log(id)
    axios.delete(`http://127.0.0.1:8000/music/${id}/`);
    this.getAllSongs();
   
   
  }

  mapSongs(){
    return this.state.songs.map(song =>
      <Song 
        key={song.id}
        song={song}
        deleteSong = {(id) => this.deleteSong(id)}
      />

    )
  }

  render(){
    console.log("this.state", this.state);
    return(
    <div>
        <SongTable mapSongs={() => this.mapSongs()}/>
        <SongCreator addNewSong={this.addSong.bind(this)}/>
  
    </div>
    );
  }
}

export default App;
