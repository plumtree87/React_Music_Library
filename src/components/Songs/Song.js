import { render } from '@testing-library/react';
import React from 'react'

const Song = (props) => {
    return (
        <tbody>
            <tr>
                <td>{props.song.title}</td>
                <td>{props.song.album}</td>
                <td>{props.song.artist}</td>
                <td>{props.song.genre}</td>
                <td>{props.song.release_date}</td>
                <td><button onClick={() => props.deleteSong(props.song.id)}>Delete</button></td> 
            </tr>
        </tbody>
    );
}

export default Song;

// HOW DO I RETURN THE song.id onClick to my App.js to use that ID to del it? lol..