import { StyleSheet, Text, Pressable, View } from "react-native";

function GoalItem(props) {
    return(
        // bind serve para retornar um valor para o props junto da Unit variavel
        <View style={styles.goalItem}>
            <Pressable android_ripple={{color: '#dddddd'}} onPress={props.onDeleteGoal.bind(this, props.id)}>
                <Text style={styles.goalText}>{props.text}</Text>
            </Pressable>
        </View>
    )
};

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
    },
    goalText: {
        padding: 6,
        color: 'white'
    }
});