import { useState } from "react";
import { TextInput, Button, View, StyleSheet, Modal, Image } from "react-native";

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler (enteredText) {
        setEnteredGoalText(enteredText)
    };

    function addGoalHandler(){
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }

    return(
    <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputContainer}>
            <Image source={require('../assets/image/goal.png')} style={styles.image}/>
            {/* Alguns componentes tem como atributo o style como o TextInput mas o Button por exemplo nao tem
            Ent uma das formas de alterar ele seria alterar o style da view em q ele esta */}
            <TextInput 
                style={styles.textInput} 
                placeholder='Text of goals' 
                // Se vc n executar a funcao dentro do onChangeText (goalInputHandler()) 
                // o react chama a funcao automaticamente apontando o texto como parametro fazendo a funcao ser executada em tempo real
                onChangeText={goalInputHandler}
                value={enteredGoalText}
                /> 
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button title='Add goal' onPress={addGoalHandler}/>
                </View>
                <View style={styles.button}>
                    <Button title="Cancel" onPress={props.onCancel}/>
                </View>
            </View>
        </View>
    </Modal>
    );
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        marginBottom: 24,
        backgroundColor: "#311b6b"
      },
    image: {
        width: 100,
        height: 100,
        margin: 8
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '100%',
        marginRight: 8,
        padding: 8
      },
    buttonContainer: {
        marginTop: 16,
        flexDirection: "row"
    },
    button: {
        woth: "40%",
        marginHorizontal: 8
    }
});