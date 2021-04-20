import React from 'react'

const SongTable = (props) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Albulm</th>
                    <th>Artist</th>
                    <th>Genre</th>
                    <th>Release Date</th>
                    <th>Delete </th>
                </tr>
            </thead>
            {props.mapSongs()}
        </table>
    );
}

export default SongTable;