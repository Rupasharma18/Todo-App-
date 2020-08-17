import React, { useState } from 'react';
import { Text, View, Button, TextInput, StyleSheet, Modal } from 'react-native'

const TakeInput = props => {

    const [enterGoals, setEnterGoals] = useState('')
    // const [addItem, setAddItem] = useState([])

    const handleGoalsInput = (enterText) => {

        setEnterGoals(enterText)
    }

  
    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style={Styles.InputContainer}>
                <TextInput
                    placeholder="add your goal...."
                    style={Styles.input}
                    onChangeText={handleGoalsInput}
                    value={enterGoals}
                />
                <Button title="Add Goal" onPress={props.AddHandler.bind(this, enterGoals)} />
            </View>
        </Modal>

    )
}
const Styles = StyleSheet.create({
    InputContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent:'center'
    },
    input: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 20
    }
})

export default TakeInput;