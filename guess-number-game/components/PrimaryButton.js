import { View, Text, Pressable, StyleSheet } from "react-native";
function PrimaryButton({children}){
return(
    <View style={styles.buttonOuterContainer}>
        <Pressable style={styles.buttonContainer} android_ripple={{color: '#640233'}}>
            <Text style={styles.buttontext}>{children}</Text>
        </Pressable>
    </View>
    )
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden'
    },
    buttonContainer:{
        backgroundColor: '#72063c',
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2
    },
    buttontext: {
        color: 'white',
        textAlign: 'center'
    }
})