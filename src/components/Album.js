import React from 'react';
import Track from './Track';

const Album = ({ title, trackList }) => {
return (
    <>
        <h2>{title}</h2> 
        <ul>
            {trackList.map((track, index) => <Track key={index} title={track}/>)}
        </ul>
    </>
        );
}

export default Album;