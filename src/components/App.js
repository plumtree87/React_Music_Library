import '../components/App.css';
import React, {Component} from 'react';
import axios from 'axios'
import Song from './Songs/Song';
import SongTable from './Songs/SongTable';
import SongCreator from './CreateSong/createSong';
import SearchBar from './Songs/searchBar';

class App extends Component {
  state = {
    songs: [],
    search: ''
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

  async addSong(song){
    await axios.post(`http://127.0.0.1:8000/music/`, song)
    this.getAllSongs();
      
    
  }

  async deleteSong(id){
    // HOW DO I TAKE THE song.id from Song.js and use that to Del it using AXIOS
    console.log(id)
    await axios.delete(`http://127.0.0.1:8000/music/${id}/`);
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

  handleInput = (event) => {
    
    this.setState({ search: event.target.value });
    const filteredSongs = this.state.songs.filter(element => {
      if (this.state.search == ""){
        this.getAllSongs();
        element = this.state.songs
        return element
      }
      if (this.state.search == null){
        this.getAllSongs();
        element = this.state.songs;
        return element
      }
      
      return element.title.toLowerCase().includes(this.state.search.toLowerCase());
      
    });

    this.setState({
      songs: filteredSongs  
    })
   

  }
  

  render(){

    console.log("this.state", this.state);
    return(
    <div>
        <SongTable mapSongs={() => this.mapSongs()}/>
        <SongCreator addNewSong={this.addSong.bind(this)}/>
        <SearchBar handleInput={this.handleInput} />
  
    </div>
    );
  }
}

export default App;
