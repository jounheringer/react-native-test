import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, ScrollView, FlatList } from 'react-native';

export default function App() {
  // Com a funcao useState a gnt cria uma variavel cosntante com setter e getter
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([])
  

  function goalInputHandler (enteredText) {
    setEnteredGoalText(enteredText)
  };

  function addGoalHandler () {
    // Dessa forma nos salvamos um texto dentro de uma array sem perder os textos anteriores
    setCourseGoals((currentCourseGoals) => [...currentCourseGoals, {text: enteredGoalText, id: Math.random().toString()}])
  };

  return (
    // Por padrao View usa Flex box nos filhos
    <View style={styles.appContainer}>
      {/* View: seria como criar uma tela dentro da tela do celular
          View dentro de view: cria uma tela dentro da tela dentro da tela do celular */}
      <View style={styles.inputContainer}>
        {/* Alguns componentes tem como atributo o style como o TextInput mas o Button por exemplo nao tem
            Ent uma das formas de alterar ele seria alterar o style da view em q ele esta */}
        <TextInput 
          style={styles.textInput} 
          placeholder='Text of goals' 
          // Se vc n executar a funcao dentro do onChangeText (goalInputHandler()) 
          // o react chama a funcao automaticamente apontando o texto como parametro fazendo a funcao ser executada em tempo real
          onChangeText={goalInputHandler}/> 
        <Button 
          title='Add goal'
          onPress={addGoalHandler}/>
      </View>
      {/* ScrollView n tem um limite explicito ent vc precisa d uma View para limitar o ScrollView */}
      <View style={styles.goalsContainer}>
        <FlatList data={courseGoals} renderItem={itemData => {
          return (
              <Text style={styles.goalText}>{itemData.item.text}</Text>
          );
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
  goalsContainer: {
    // O atributo Flex funciona como uma forma de hierarquia dos style objetos
    // Ex: A view main pode ter 2 Views como filho se o primeiro tiver flex 1 ele vai ocupar menos espaco que uma View c flex 3
    flex: 4,
  },
  goalText: {
    margin: 8,
    padding: 6,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
    color: 'white'
  }
});
