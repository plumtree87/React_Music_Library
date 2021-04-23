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
    await axios.delete(`http://127.0.0.1:8000/music/${id}/`);
    this.getAllSongs();
  }

  async editSong(id){
    await axios.put(`http://127.0.0.1:8000/music/${id}/`)
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


  // this below function will not re-render the this.getAllSongs() if you make a typo or mispelling or spell out anything not in the records. Besides that, it works.
  handleInput = (event) => {
    
    this.setState({ search: event.target.value });
    const filteredSongs = this.state.songs.filter(element => {
      if (event.target.value == ""){
        this.getAllSongs();
        element = this.state.songs
        return element
      }
      else if ( 
           element.title.toLowerCase().includes(this.state.search.toLowerCase()) || element.album.toLowerCase().includes(this.state.search.toLowerCase()) || element.artist.toLowerCase().includes(this.state.search.toLowerCase()) ||
                element.genre.toLowerCase().includes(this.state.search.toLowerCase()) || element.release_date.includes(this.state.search.toLowerCase())
      ){  
        return element
      }
    });

    this.setState({
      songs: filteredSongs  
    })
   

  }
  

  render(){

    console.log("this.state", this.state);
    return(
    <div>
        <SearchBar handleInput={this.handleInput} />
        <SongTable mapSongs={() => this.mapSongs()}/>
        <SongCreator addNewSong={this.addSong.bind(this)}/>
       
  
    </div>
    );
  }
}

export default App;
