import React from 'react';
import LottieView from 'lottie-react-native';
import { View, Dimensions, Modal, Text } from 'react-native';

export class AppLoader extends React.Component {
  render() {
    let { backgroundColor, visible, testID } = this.props;
    return (
      <View
        testID={testID}
        style={{
          // flex: 1,
          position: "absolute",
          bottom: 0,
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: backgroundColor ? backgroundColor : '#ffffff60',
        }}
      >
        <LottieView source={require('./myLoader.json')} autoPlay loop />
      </View>
    );
  }
}
