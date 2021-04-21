import React, {Component} from 'react';

class SongCreator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            album: '',
            artist: '',
            genre: '',
            release_date: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }


    handleSubmit(event) {
        event.preventDefault();
        const song = {
            title: this.state.title,
            album: this.state.album,
            artist: this.state.artist,
            genre: this.state.genre,
            release_date: this.state.release_date

            }
            this.props.addNewSong(song);
            this.setState({
                title: '',
                album: '',
                artist: '',
                genre: '',
                release_date: ''
        });
    }
        

    render(){
        return (
            <div>
                <hr />
                <center>
                    <h3>Add a new song!</h3>
                </center>
                <div type='container'>
                     <form onSubmit={this.handleSubmit}>
                 
                      
                            <label>Title:</label>
                            <input type='text' name="title" value={this.state.title} onChange={this.handleChange} />
                        
                      
                            <label>Album:</label>
                            <input type='text' name='album' value={this.state.album}
                            onChange={this.handleChange} />
                     
                       
                            <label>Artist:</label>
                            <input type='text' name='artist' value={this.state.artist}
                            onChange={this.handleChange} />
                     
                            <label>Genre:</label>
                            <input type='text' name='genre' value={this.state.genre}
                            onChange={this.handleChange} />
                       
                       
                            <label>Release Date: YYYY-MM-DD</label>
                            <input type='text' name='release_date' value={this.state.release_date}
                            onChange={this.handleChange} />
                    
                     
                  
                          <input type='submit' value='Add' />
                          
                    </form>
                    </div>
            </div>
        );
    }

}
export default SongCreator;