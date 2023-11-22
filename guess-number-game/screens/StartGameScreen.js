import { View, TextInput, StyleSheet, Alert } from "react-native";
import {useState} from 'react';
import PrimaryButton
 from "../components/PrimaryButton";

function StartGameScreen(){
    const [enteredNumber, setEnteredNumber] = useState('');

    function numberInputHandler(enteredText){
        setEnteredNumber(enteredText);
    }
    
    function resetInputHandler(){
        setEnteredNumber('');
    }
    function confirmInputHandler(){
        const chosenNumber = parseInt(enteredNumber);    
        if(isNaN(chosenNumber) || chosenNumber <=0 || chosenNumber>99){
            Alert.alert('Invalid Number', 
            'Number has to be between 1 and 99',
            [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}] //button
            )
            return;
        }
    }

    return(
        <View style={styles.inputContainer}>
            <TextInput 
                style={styles.numberInput} 
                maxLength={2} 
                keyboardType="number-pad" 
                autoCorrect={false} 
                onChangeText={numberInputHandler}
            />
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                </View>
            </View>
        </View>
    )
}
export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4e0329',
        marginHorizontal: 24,
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width: 0,height: 2},
        shadowRadius: 6,
        shadowRadius: 0.5,
        marginTop: 100,
        padding: 16,
    },
    numberInput: {
        height: 50,
        fontSize: 32,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
        marginVertical: 8,
        fontWeight: 'bold',
        width: 50,
        textAlign: 'center',
    },
    buttonsContainer:{
        flexDirection:'row'
    },
    buttonContainer: {
        flex:1,
    }
})