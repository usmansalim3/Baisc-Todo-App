import React, { useState } from "react";
import {Text,View,StyleSheet,TextInput,TouchableOpacity, FlatList, Pressable} from 'react-native';
import ListItem from "./ListItem";

export default function input(){
    const [list,setList]=useState([]);
    const [goalText,setGoalText]=useState("");
    const changeHandler=(text)=>{
        setGoalText(text);
    }
    const pressHandler=()=>{
        if(goalText)setList((prevList)=>[...prevList,{goal:goalText,id:Math.random().toString()}]);
        setGoalText("");
        
    }
    const deleteHandler=(id)=>{return(
        setList((prevList)=>prevList.filter((goal)=>goal.id!==id))
    )}
    
    return(
        <>
            <View style={{borderColor:"black",borderStyle:"solid",borderBottomWidth:1}}>
                <View style={{marginBottom:20,marginTop:20,flexDirection:"row",alignItems:"center"}}>
                    <View>
                        <TextInput style={styles.input}
                        placeholder="Enter your goals"
                        value={goalText}
                        onChangeText={changeHandler}
                        placeholderTextColor="#bfbfbf"
                        />
                    </View>
                    <View style={styles.button}>
                        <Pressable android_ripple={{color:"lightblue"}} onPress={pressHandler}>
                             <Text style={styles.text}>
                                Add goal 
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </View>
            <View style={{marginTop:25,flex:1,marginBottom:5}}>
                <FlatList
                data={list}
                renderItem={(itemData)=>{return(<ListItem text={itemData.item.goal} id={itemData.item.id} deleteHandler={deleteHandler}/>)}}
                keyExtractor={(item,index)=>{return(item.id)}}
                />
            </View>
        </>

    );
}
const styles=StyleSheet.create({
    input:{
        backgroundColor:"white",
        color:"black",
        width:250,
        elevation:3,
        shadowColor:"black",
        padding:8,
        borderRadius:30,
        marginLeft:10,
        

    },
    button:{
        elevation:15,
        borderColor:"blue",
        marginLeft:40,
        backgroundColor:"#4c8bf5",
        borderRadius:4,
        justifyContent:"center",
        alignItems:"center"
        
    },
    text:{
        height:32,
        padding:6
    }
});