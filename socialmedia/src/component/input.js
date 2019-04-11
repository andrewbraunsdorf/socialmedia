    
import React, {Component} from "react";
import axios from "axios";

class Input extends Component{
  state={
    artistname: null,
    songname: null,
    lyrics: null
  }
  
    setArtist = e => {
    this.setState({
      artistname: e.target.value
    });
  }
  
  setSong = e => {
    this.setState({
      songname: e.target.value
    });
  }
  
  handleClick = () => {
    console.log(
      "artisname",
      this.state.artistname,
      "songname",
      this.state.songname
    );
  }
render(){
      return(
        <div>
        
        </div>
      );
    }
}