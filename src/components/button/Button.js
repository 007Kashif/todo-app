import React from 'react';
import {
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  Platform,
} from 'react-native';
import Colors from '../../constants/ColorConstants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import fonts from '../../constants/Fonts';

const detaultButtonTitle = 'Button';

export class Button extends React.Component {
  // onPressDefault = () => {
  // };

  renderIcon() {
    const { icon, iconStyle } = this.props;
    let styleIcon = iconStyle !== undefined ? iconStyle : styles.icon;
    return <Image source={icon} style={[styleIcon]} resizeMode={'contain'} />;
  }
  renderVectorIcon() {
    const { vectorIcon } = this.props;
    return vectorIcon;
  }

  renderTitleText() {
    let {
      titleStyle,
      title = 'Signup',
      icon,
      iconPlace,
      vectorIcon,
    } = this.props;

    let btnTitleStyle =
      titleStyle !== undefined ? titleStyle : styles.textStyle;
    let btnTitle = title !== undefined ? title : detaultButtonTitle;
    let isIcon = icon !== undefined;

    let width = '100%';
    if (isIcon && (iconPlace === 'left' || iconPlace === 'right')) {
      width = '80%';
    }

    return (
      <View
        style={[
          styles.textContainer,
          this.props.mainContainer,
          { borderWidth: 0, borderColor: 'green', width: width },
        ]}
      >
        {isIcon && iconPlace === 'leftCenter'
          ? vectorIcon
            ? this.renderVectorIcon()
            : this.renderIcon()
          : null}
        <Text style={btnTitleStyle}>{btnTitle}</Text>
        {isIcon && iconPlace === 'rightCenter'
          ? vectorIcon
            ? this.renderVectorIcon()
            : this.renderIcon()
          : null}
      </View>
    );
  }

  render() {
    const {
      style,
      BackgroundImage,
      title,
      icon,
      iconPlace = 'left',
      onPress,
      borderRadius,
    } = this.props;

    // Setting Button Style
    let touchableStyle = style !== undefined ? style : styles.container;
    let isIcon = icon !== undefined;
    let bgColor = this.props.bgColor || Colors.primaryBeige;
    let height = this.props.height || Platform.OS === 'ios' ? hp(6) : hp(7);
    let width = this.props.width || '90%';

    return (
      <TouchableOpacity
        {...this.props}
        disabled={this.props.disabled}
        onPress={onPress !== undefined ? onPress : this.onPressDefault}
        style={[
          touchableStyle,
          {
            backgroundColor: bgColor,
            height: height,
            width: width,
            borderRadius: borderRadius || wp(6),
            alignSelf: 'center',
          },
        ]}
      >
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
          {isIcon && iconPlace === 'left' ? this.renderIcon() : null}

          {(title === undefined || title.length > 0) && this.renderTitleText()}

          {isIcon && iconPlace === 'right' ? this.renderIcon() : null}
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: Platform.OS === 'ios' ? hp(5) : hp(8),
    width: '90%',
    paddingLeft: 5,
    paddingRight: 5,
    // borderWidth: 0.5,
    borderRadius: wp(6),
    // top:0,
    // bottom:5,
    // backgroundColor:colors.gold,
    marginBottom: 7,
  },
  imgBackground: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },

  icon: {
    width: hp(2),
    height: hp(2),
    borderWidth: 0,
    marginLeft: hp(1.5),
    tintColor: 'white', //colors.white,
    resizeMode: 'contain',
    // borderColor:'red',
  },

  textContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    // paddingLeft:'7%'
  },

  textStyle: {
    color: 'white', //colors.white,
    fontSize: fonts.P4,
    fontWeight: 'bold',
    // fontFamily:'Montserrat-Bold',
  },
});
