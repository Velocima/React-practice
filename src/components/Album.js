import React from 'react';

const Album = ({ title, trackList }) => {
return (
    <>
        <h2>{title}</h2> 
        <ul>
            {trackList.map((track, index) => <li key={index}>{track}</li>)}
        </ul>
    </>
        );
}

export default Album;