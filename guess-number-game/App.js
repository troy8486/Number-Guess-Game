import { useState } from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();

  function pickedNumberHandler(pickedNumber){
    setUserNumber(pickedNumber)
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler/>

  if(userNumber){
    screen = <GameScreen/>
  }

  return (
      <View style={styles.rootScreen}> 
        <ImageBackground 
          style={styles.imageBackground}
          source={require('./assets/background.png')}
          resizeMode='cover'
        >
          {screen}
        </ImageBackground>
      </View>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    backgroundColor: '#ddb52f',
    flex: 1
  },
  imageBackground: {
    flex: 1,
    opacity: 0.8
  }
})


