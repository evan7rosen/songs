import React from "react";
import { connect } from "react-redux";
import musicPic from "./music.jpg";
import { Card, Image } from "semantic-ui-react";

const SongDetail = ({ song }) => {
  if (!song) {
    return <div>Select a song</div>;
  }
  return (
    <div>
      <h3>Song Details:</h3>
      <Card>
        <Image src={musicPic} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{song.title}</Card.Header>
          <Card.Description>{song.duration}</Card.Description>
        </Card.Content>
      </Card>
    </div>
  );
};

const mapStateToProps = state => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
