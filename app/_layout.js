import { Stack } from 'expo-router'
import { View, Pressable } from 'react-native'
import "../global.css";
import { LogoApp } from '../components/LogoApp';
import { Link } from 'expo-router';
import { InfoCircle } from '../components/Icons';

export default function Layout() {
  return (
    <View className ="flex-1 bg-black">
        <Stack
          screenOptions={{
           headerStyle:{ backgroundColor:'black' }, 
           headerTitle:"",
           headerLeft: () => <LogoApp/>,
           headerRight: ()=>(
            <Link asChild href="/about"  >
                <Pressable>
                  <InfoCircle/>
                </Pressable>
            </Link> 
           )
          }}
        />
    </View>
  )
}
