import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native'


const ListItem = props => {
    console.log("poprs", props.state)
    
    return <View style={styles.screen}>
         <FlatList data={props.state}
            renderItem={itemData => {
                <View style={styles.text}>
                    <Text key={itemData.index}>
                        {itemData}
                    </Text>
                </View>
            }}
        />
    
    </View>
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    text: {
        padding: 15,
        marginVertical: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1
    }
})
export default ListItem;