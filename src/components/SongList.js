import React from "react";
import { connect } from "react-redux";
import { Button, Icon, Item } from "semantic-ui-react";
import { selectSong } from "../actions";

class SongList extends React.Component {
  renderList() {
    return this.props.songs.map(song => {
      return (
        <Item key={song.title}>
          <Item.Content>
            <Item.Header as="a">{song.title}</Item.Header>
            <Item.Description>
              {song.duration}
              <Button
                primary
                floated="right"
                onClick={() => this.props.selectSong(song)}
              >
                Select
                <Icon name="right chevron" />
              </Button>
            </Item.Description>
          </Item.Content>
        </Item>
      );
    });
  }

  render() {
    return <Item.Group divided>{this.renderList()}</Item.Group>;
  }
}

const mapStateToProps = state => {
  return { songs: state.songs };
};

export default connect(
  mapStateToProps,
  { selectSong }
)(SongList);
