import { StyleSheet, Text } from "react-native";

function GoalItem(props) {
    return(
        <Text style={styles.goalText}>{props.text}</Text>
    )
};

export default GoalItem;

const styles = StyleSheet.create({
    goalText: {
        margin: 8,
        padding: 6,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
        color: 'white'
      }
});