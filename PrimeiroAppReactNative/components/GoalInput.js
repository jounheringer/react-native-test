import { useState } from "react";
import { TextInput, Button, View, StyleSheet } from "react-native";

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
    <View style={styles.inputContainer}>
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
        <Button 
            title='Add goal'
            onPress={addGoalHandler}/>
    </View>
    );
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc'
      },
    textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '70%',
        marginRight: 8,
        padding: 8
      },
});