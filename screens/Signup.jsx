import { SafeAreaView, StyleSheet,Text,View,TouchableOpacity,Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native-gesture-handler";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react';

export default function App() {
    const navigator=useNavigation()
    const [email,setEmail]=useState("")
    const [password,setpassWord]=useState("")

function handleSubmit(){
        const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log("accountcreated")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("notcreated",errorMessage)
  });

    }

    return (
        <SafeAreaView style={styles.main}>
            <View style={styles.text}>
            <Text style={styles.sign}>Sign up</Text>
            </View>
            <View style={styles.box} >
            <TextInput style={styles.textbox} placeholder="email"  onChangeText={value => setEmail(value)}></TextInput>
            <TextInput style={styles.textbox} placeholder="password" onChangeText={value => setpassWord(value)} ></TextInput>
            <TouchableOpacity style={styles.button} onPress={handleSubmit} ><Text>Sign Up</Text></TouchableOpacity>
            <TouchableOpacity style={styles.img} ><Image  style={styles.immage} source={require("../assets/googgle.jpg")}></Image></TouchableOpacity>
            </View>
            <View style={styles.lasttext}>
            <Text>Already  a user?</Text><TouchableOpacity onPress={() => navigator.navigate("Login")}><Text style={styles.login}>Login</Text></TouchableOpacity>
            </View>

        </SafeAreaView>
            

    )}
    const styles = StyleSheet.create({
        sign:{ 
            fontSize:25,
            alignItems:'center',
            margin:100,
            
            
        },
        text:{
            alignItems:'center',
            justifyContent:'center',
        },
        textbox:{
            width:320,
            height:50,
            borderWidth:.5,
            justifyContent:'center',
            flexDirection:'row',
            borderRadius:15,
            paddingHorizontal:10,
            backgroundColor:'#EBEAEA',
            borderColor:"#9747FF",


        },
        box:{
            justifyContent:'center',
            alignItems:'center',
            gap:40,
            margin:10,

        },
        button:{
            borderWidth:.5,
            width:70,
            height:35,
            alignItems:'center',
            borderRadius:10,
            justifyContent:'center',
            backgroundColor:'#EBEAEA',
            borderColor:'#9747FF',
        },
       
        immage:{
            width:30,
            height:30,
            borderRadius:20,
        
           
        },
        img:{
            width:45,
            height:45,
            borderWidth:.5,
            alignItems:'center',
            justifyContent:'center',
            borderRadius:10,   
        },
        lasttext:{
            margin:19,
            flexDirection:'row',
            justifyContent:'center',
        },
        login:{
            color:'blue',
            textDecorationLine:'underline',
        }
      

    })
