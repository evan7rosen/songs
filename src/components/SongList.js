import React from "react";
import { connect } from "react-redux";
import { Button, Icon, Item, Grid, Container } from "semantic-ui-react";

class SongList extends React.Component {
  renderList() {
    return this.props.songs.map(song => {
      return (
        <Item>
          <Item.Content>
            <Item.Header as="a">{song.title}</Item.Header>
            <Item.Description>
              {song.duration}
              <Button primary floated="right">
                Buy tickets
                <Icon name="right chevron" />
              </Button>
            </Item.Description>
          </Item.Content>
        </Item>
      );
    });
  }

  render() {
    return (
      <Container>
        <Grid>
          <Grid.Row>
            <Grid.Column width={8}>
              <Item.Group divided>{this.renderList()}</Item.Group>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return { songs: state.songs };
};

export default connect(mapStateToProps)(SongList);
