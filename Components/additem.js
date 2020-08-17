import React, { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import TakeInput from './TakeInput';
import ListItem from './ListItem'

const AddItem = () => {
    const [isModal, setIsModel] = useState(false)
    const [addItem, setAddItem] = useState([])
    const AddHandler = GoalTitle => {
        console.log(GoalTitle, "TTTTTTTTTTt")
        setAddItem(currentGoalAdd =>  [...currentGoalAdd, GoalTitle]
        )
        setIsModel(false)
    }
    console.log(addItem, "itemmmmm")



    return (
        <View style={Styles.container}>     

        <ListItem state={addItem}/>  
            <TouchableOpacity style={Styles.addButton} onPress={() => setIsModel(true)}>
                <Text style={Styles.addButtonText}>+</Text>
            </TouchableOpacity>
            <TakeInput visible={isModal} AddHandler={AddHandler} />
        </View>)
}
const Styles = StyleSheet.create({
    container: {
        flex: 1
    },
    addButton: {
        position: 'absolute',
        zIndex: 11,
        right: 20,
        bottom: 20,
        backgroundColor: 'pink',
        height: 50,
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8,
        borderRadius: 50
    },
    addButtonText: {
        fontSize: 25,
        color: 'black'
    }
 
})
export default AddItem;



