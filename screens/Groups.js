import { StyleSheet,View ,Text,Image} from "react-native";

export default function App() {



  return (
    <View style={styles.container}>
        

        
        <View style={styles.container2}>
        <View style={styles.container1}><Image style={styles.img1} source={require("../assets/ioi.webp")}></Image></View>
        <View>
        <Text style={styles.text}>Adacode Chat</Text>
        <Text style={styles.text2}>You: Hello world</Text>
        </View>
        </View>
        <View style={styles.container3}>
        <View style={styles.container5}><Image style={styles.img1} source={require("../assets/ioi.webp")}></Image></View>
        <View>
        <Text style={styles.text}>Adacode Chat</Text>
        <Text style={styles.text2}>You: Hello world</Text>
        </View>
        </View>
         <View style={styles.container4}>
        <View style={styles.container6}><Image style={styles.img1} source={require("../assets/ioi.webp")}></Image></View>
        <View>
        <Text style={styles.text}>Adacode Chat</Text>
        <Text style={styles.text2}>You: Hello world</Text>
        </View>
        </View>
        </View>
         
    
  )
}
const styles = StyleSheet.create({
    container:{
        gap:20,
    },
 container2:{
    backgroundColor:"#9747FF",
    width:380,
    height:70, 
    flexDirection:'row',
    justifyContent:'flex-start',
    gap:20,
    alignItems:'center',
    marginLeft:5,
    borderRadius:15,

 },
 container1:{
    backgroundColor:'skyblue',
    borderRadius:30,
   
    width:45,
    height:45,
    marginHorizontal:10,  
 },

 text:{
    fontSize:20,
    color:'white',
 },
 container3:{
    backgroundColor:"#9747FF",
    width:380,
    height:70, 
    flexDirection:'row',
    justifyContent:'flex-start',
    gap:20,
    alignItems:'center',
    marginLeft:5,
    borderRadius:15,
    
 },
 container5:{
    backgroundColor:'skyblue',
    borderRadius:30,
 
    width:45,
    height:45,  
    marginHorizontal:10, 
 },
 container4:{
    backgroundColor:"#9747FF",
    width:380,
    height:70, 
    flexDirection:'row',
    justifyContent:'flex-start',
    gap:20,
    alignItems:'center',
    marginLeft:5,
    borderRadius:15,
    
 },
 container6:{
    backgroundColor:'skyblue',
    borderRadius:30,
    width:45,
    height:45,  
    marginHorizontal:10, 
 },
 text2:{
    color:"white",
 },
 img1:{

   height:45,
   width:45,
   borderRadius:30,
 }
})

