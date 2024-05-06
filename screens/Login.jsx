import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image ,TextInput,ScrollView,TouchableOpacity} from 'react-native';

export default function login() {
  return (
    <ScrollView  style={styles.container}>
      <View style={styles.sum}>
      <StatusBar style="auto" />

     <Image style={styles.adacode} source={require("../assets/adacode1.png")}></Image>
    
     <Text style={styles.Text}>Adacode Solutions</Text>
     <View style={styles.blue}>
     <View style={styles.boxes}>
     <TextInput  style={styles.input1} placeholder='enter username'onChangeText={value => console.log(value)} ></TextInput>
     <TextInput  style={styles.input2} placeholder='enter password' onChangeText={value => console.log(value)}></TextInput>
     <TouchableOpacity  style={styles.button} onPress={()=>console.log("v")} ><Text>login</Text>
     
     
     
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
    width:200,
    height:200,
    margin:15,
  },
  Text:{
    fontSize:30,
    margin:10,
    padding:0,
  },
  blue:{
    fex:1,
    backgroundColor: 'skyblue', 
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
