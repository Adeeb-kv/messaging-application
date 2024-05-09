
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View,Image ,TextInput,ScrollView,TouchableOpacity} from 'react-native';
import { useState } from 'react';

export default function Login() {
  const [username,setuserName]=useState("")
  const [password,setpassWord]=useState("")
  const navigator=useNavigation()
  return (
    <ScrollView  style={styles.container}>
      <View style={styles.sum}>
      <StatusBar style="auto" />

     <Image style={styles.adacode} source={require("../assets/paper-plane.gif")}></Image>
    
     <Text style={styles.Text}>Adacode Solutions</Text>
     <View style={styles.blue}>
     <View style={styles.boxes}>
     <TextInput  style={styles.input1} placeholder='enter username'onChangeText={value => setuserName(value)} ></TextInput>
     <TextInput  style={styles.input2} placeholder='enter password' onChangeText={value => setpassWord(value)}></TextInput>
     <TouchableOpacity  style={styles.button} onPress={()=>navigator.navigate("Chat")} ><Text>login</Text>
     
     
     
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
    fontSize:30,
    margin:10,
    padding:0,
    fontWeight:'bold',
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
  backgroundColor:'white',
  borderRadius:10,

 },
  boxes:{
    justifyContent:'center',
    alignItems:'center',
    top:100,
  },
});
