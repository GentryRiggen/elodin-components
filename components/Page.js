import React from 'react';
import {
  StatusBar,
  View,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { connectStyle } from '@shoutem/theme';
import Constants from './lib/constants';

class Page extends React.Component {
  static propTypes = {
    children: React.PropTypes.any.isRequired,
    scrollable: React.PropTypes.bool,
    style: React.PropTypes.any,
  };

  static defaultProps = {
    scrollable: false,
  };

  renderContent() {
    const {
      children,
      scrollable,
      style,
    } = this.props;

    if (scrollable) {
      return (
        <KeyboardAwareScrollView contentContainerStyle={style.scrollableContent}>
          {children}
        </KeyboardAwareScrollView>
      );
    }

    return children;
  }

  render() {
    const { style } = this.props;
    StatusBar.setBarStyle(style.statusBarStyle, false);

    return (
      <View style={style.container}>
        {this.renderContent()}
      </View>
    );
  }
}

export default connectStyle(Constants.components.Page)(Page);