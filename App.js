import { NavigationContainer } from "@react-navigation/native";
import Chat from "./screens/Chat"
import Login from "./screens/Login"
import Groups from "./screens/Groups"
import Signup from "./screens/Signup"
import { createStackNavigator } from '@react-navigation/stack';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

const Stack = createStackNavigator();
const firebaseConfig = {
  apiKey: "AIzaSyCfiUJCsXMDZ0TLK38OBOgRRKUfJW-ZRgY",
  authDomain: "adeeb-eb1b5.firebaseapp.com",
  projectId: "adeeb-eb1b5",
  storageBucket: "adeeb-eb1b5.appspot.com",
  messagingSenderId: "60526477218",
  appId: "1:60526477218:web:5143468b7ade2a802a3cfb",
  measurementId: "G-9CRTZY47B7",
  databaseURL:"https://adeeb-eb1b5-default-rtdb.asia-southeast1.firebasedatabase.app"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);


export default function App() {



  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Chat">
    
    <Stack.Screen name="Chat" component={Chat}options={{headerShown: false, }} />
    <Stack.Screen name="Login" component={Login}  options={{headerShown: false, }}/>
    <Stack.Screen name="Groups" component={Groups} />
    <Stack.Screen name="Signup" component={Signup} options={{headerShown:false, }}/>

    </Stack.Navigator>
    
    </NavigationContainer>
    
 
  )};
