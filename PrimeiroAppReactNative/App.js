import { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  // Com a funcao useState a gnt cria uma variavel cosntante com setter e getter
  const [courseGoals, setCourseGoals] = useState([])

  function addGoalHandler(enteredGoalText) {
    // Dessa forma nos salvamos um texto dentro de uma array sem perder os textos anteriores
    setCourseGoals((currentCourseGoals) => [...currentCourseGoals, {text: enteredGoalText, id: Math.random().toString()}])
  };

  function deleteGoalHandler(id) {
    setCourseGoals(currentCourseGoals =>{
      return currentCourseGoals.filter((goal) => goal.id !== id)
    })
  }

  return (
    // Por padrao View usa Flex box nos filhos
    <View style={styles.appContainer}>
      {/* View: seria como criar uma tela dentro da tela do celular
          View dentro de view: cria uma tela dentro da tela dentro da tela do celular */}
      <GoalInput onAddGoal={addGoalHandler}/>
      {/* ScrollView n tem um limite explicito ent vc precisa d uma View para limitar o ScrollView */}
      <View style={styles.goalsContainer}>
        <FlatList data={courseGoals} renderItem={itemData => {
          return <GoalItem 
            text={itemData.item.text} 
            id={itemData.item.id}
            onDeleteGoal={deleteGoalHandler}
            />;
        }}
        keyExtractor={(item, index) => {
          return item.id;
        }}>
        </FlatList>
      </View>
    </View>
  );
}

// StyleSheet é o equivalente a criar um arquivo css
// Styles no react native parece mas NAO é a msm coisa q css
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    // O atributo Flex funciona como uma forma de hierarquia dos style objetos
    // Ex: A view main pode ter 2 Views como filho se o primeiro tiver flex 1 ele vai ocupar menos espaco que uma View c flex 3
    flex: 4,
  }
});
