import { StyleSheet, View, Text, Pressable } from 'react-native';

function GoalItem({text, id, onDeleteItem}) {
    return  (
        <View style={styles.goalItem}>
            <Pressable 
                android_ripple={{color: '#dddddd'}} 
                onPress={onDeleteItem.bind(this, id)}
                style={({pressed}) => pressed && styles.pressedItem}
            >
                <Text style={styles.goalItem}>{text}</Text>
            </Pressable>
        </View>
    )
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
        color: 'white'
    },
    pressedItem: {
        opacity: 0.5
    },
    goalText: {
        color: 'white',
        padding: 8,
    }
});