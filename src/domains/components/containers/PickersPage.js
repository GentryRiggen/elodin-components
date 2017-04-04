import React from 'react';
import { View } from 'react-native';
import {
  Page,
  Picker,
  Text,
} from '../../../../components';

class PickersPage extends React.Component {
  static navigationOptions = {
    header: {
      title: <Text styleName="title">Pickers</Text>,
    },
  };

  constructor(props) {
    super(props);
    this.state = {
      selected: 1,
    };
  }

  onItemSelected() {
    return (selected) => {
      this.setState({ selected });
    };
  }

  getItems() {
    const items = {};
    [0, 1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16]
      .forEach((id) => items[id] = {
        headerText: `Item ${id}`,
      });
    return items;
  }

  render() {
    return (
      <Page>
        <View style={{ paddingTop: 24 }}>
          <Picker
            header="Random List of Items"
            items={this.getItems()}
            selected={this.state.selected}
            onItemSelected={this.onItemSelected()}
            showSearch
          />

          <Picker
            header="Another Random List of Items"
            items={this.getItems()}
            selected={this.state.selected}
            onItemSelected={this.onItemSelected()}
            showSearch
          />
        </View>
      </Page>
    );
  }
}

export default PickersPage;
