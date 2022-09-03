import React, { useState } from "react";
import {Text,View,StyleSheet,TextInput,TouchableOpacity, Pressable, PermissionsAndroid} from 'react-native';

export default function ListItem(props){
    return(
        <View style={styles.ListItem}>
            <Pressable android_ripple={{color:"black"}} onPress={()=>props.deleteHandler(props.id)} style={{alignContent:"center",justifyContent:"center"}}>
                <Text style={styles.text}>{props.text}</Text>
            </Pressable>
        </View>
    );
    
}
const styles=StyleSheet.create({
    ListItem:{
        alignContent:"center",
        marginVertical:10,
        backgroundColor:"#202020",
        marginHorizontal:10,
        borderRadius:10,
        height:50
    },
    text:{
        color:"white",
        padding:15
    }
})