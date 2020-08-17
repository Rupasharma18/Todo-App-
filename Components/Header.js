import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Headers = ()=>{
    return(
        <View style={Styles.Header}>
            <Text style={Styles.headerTitle}>TODO</Text>
        </View>
    )
}

const Styles = StyleSheet.create({
Header :{
    width:'100%',
    backgroundColor:'pink',
    height:80,
    paddingTop:40,
    alignItems:"center"

},
headerTitle:{
    fontSize:20
}
})
export default Headers;