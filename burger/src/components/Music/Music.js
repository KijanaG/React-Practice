import React, { Component } from 'react';
import Sound from 'react-sound';
import soundfile from '../../assets/songs/Burning_Like_Fire.mp3';

class Music extends Component {
    render() {
        return (
            <>
            <Sound 
                url={soundfile}
                playStatus={Sound.status.PLAYING}
                playFromPosition={300}
                onLoading={this.handleSongLoading}
                onPlaying={this.handleSongPlaying}
                onFinishedPlaying={this.handleSongFinishedPlaying}
                volume={70}
                 />
            </>
        )
    }
}

export default Music;