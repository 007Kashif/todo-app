export default  options = {
    headerShown: false,
    defaultNavigationOptions: {
      cardStyleInterpolator: forFade,
      cardStyle: {
        backgroundColor: 'transparent',
      },
    },
    transitionSpec : {
      open : {animation:'timing',config:{duration:300}},
      close : {animation:'timing',config:{duration:300}}
    }
  };

  const forFade = ({ current, closing }) => ({
    cardStyle: {
      opacity: current.progress,
    },
  })