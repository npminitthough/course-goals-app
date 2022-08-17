import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import {StatusBar} from 'expo-status-bar';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function addGoalHandler(text) {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals, 
      {text, id: Math.random().toString()}
    ]);
    endAddGoalHandler();
  }

  function endAddGoalHandler() {
    setModalIsVisible(false)
  }

  function deleteGoalHandler(id) {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id !== id)
    })
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button title='Add New Goal' color='#5e0acc' onPress={startAddGoalHandler} />
        {modalIsVisible && <GoalInput addGoal={addGoalHandler} visible={modalIsVisible} onCancel={endAddGoalHandler} />}
        <View style={styles.goalsContainer}>
          <FlatList 
            data={courseGoals} 
            renderItem={
                ({item}) => <GoalItem 
                  text={item.text} 
                  onDeleteItem={deleteGoalHandler} 
                  id={item.id} 
                />
              }
            alwaysBounceVertical={false}
            keyExtractor={(item) => item.id}
          />       
        </View>
      </View>       
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5
  }
});
