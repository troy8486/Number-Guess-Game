import { StyleSheet, View, ImageBackground } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';

export default function App() {
  return (

      <View style={styles.rootScreen}> 
        <ImageBackground 
          style={styles.imageBackground}
          source={require('./assets/background.png')}
          resizeMode='cover'
        >
          <StartGameScreen/>
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


