
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View,Image ,TextInput,ScrollView,TouchableOpacity,Alert} from 'react-native';
import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";



export default function Login() {
  const [email,setEmail]=useState("")
  const [password,setpassWord]=useState("")
  const navigator=useNavigation()

    function handleSubmit(){
      const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log("usersignedin")
      navigator.navigate('Chat')
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("notsignedin",errorMessage)
      Alert.alert('please check your email and password')
    });

    }

  return (
    <ScrollView  style={styles.container}>
      <View style={styles.sum}>
      <StatusBar style="auto" />

     <Image style={styles.adacode} source={require("../assets/paper-plane.gif")}></Image>
    
     <Text style={styles.Text}>Cloudy.</Text>
     <View style={styles.blue}>
     <View style={styles.boxes}>
     <TextInput  style={styles.input1} placeholder='enter username'onChangeText={value => setEmail(value)} ></TextInput>
     <TextInput  style={styles.input2} placeholder='enter password' onChangeText={value => setpassWord(value)} ></TextInput>
     <TouchableOpacity  style={styles.button} onPress={handleSubmit}><Text style={styles.tt}>login</Text>
     
     
     
     </TouchableOpacity> 
     </View> 
     </View>
     </View>
     

      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
   
  },
  sum:{

    alignItems:'center',
    justifyContent:'flex-start',
  },
  adacode:{
    width:90,
    height:90,
    margin:60,
  },
  Text:{
    fontSize:60,
    margin:5,
    padding:0,
    color:'cadetblue',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 5,
  },
  blue:{
    fex:1,
    backgroundColor: '#9747FF', 
    width:390,
    height:700,
    position:'relative',
    top:100,
    borderRadius:30,
    
  },
  input1:{
    backgroundColor:'white',
    padding:15,
    margin:10,
    width:280,
    borderRadius:10,
    textAlign:'left',
    justifyContent:'center',
    
  },
  input2:{
    padding:15,
    backgroundColor:'white',
    margin:2,
    width:280,
    borderRadius:10,
    textAlign:'left',
    justifyContent:'space-evenly',
  },
 button:{
  padding:15,
  margin:10,
  alignItems:'center',
  justifyContent:'center',
  
  borderRadius:10,
  backgroundColor:'#9747FF',
  borderWidth:1,
  borderColor:'white',


 },
  boxes:{
    justifyContent:'center',
    alignItems:'center',
    top:100,
  },
  tt:{
    color:'white',
  }
});
