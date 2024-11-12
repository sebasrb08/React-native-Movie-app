import {  Stack } from "expo-router";
import { Image, Text, ActivityIndicator } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Screen } from "../components/Screen";
import { useEffect, useState } from "react";
import { getMovieDetails } from "../lib/metacritic";
import { View } from "react-native";

export default function Detail(){
    const { id } =useLocalSearchParams()
    const [movieInfo,setMovieInfo] = useState(null)

    useEffect(()=>{
        getMovieDetails(id).then((items) => setMovieInfo(items))
    },[id])
    console.log(movieInfo)
    return(
        <Screen>
        <Stack.Screen
        options={{
            headerStyle:{backgroundColor:"#00b3e5"},
            headerTintColor:'black',
            headerLeft:()=>{},
            headerTitle: ()=>(
                movieInfo ==null? '': <Text className="text-xl font-bold">{movieInfo.original_title}</Text> 
            ),
            headerRight: ()=>{}
        }}
        />
        {movieInfo == null ?(
            <ActivityIndicator size={34} color="white" className="items-center justify-center" />
        ):
        (
            <View className="items-center justify-center gap-4">
                
                <Image source={{uri:movieInfo.img}}  style={{height:250,width:250}}/>
                <Text className="text-2xl font-bold text-white ">
                {movieInfo.original_title}
                </Text>
                <Text className="text-xl text-white opacity-50 ">
                    {movieInfo.overview}
                </Text>
                <Text>
                    
                </Text>
                
            </View>
            )
        }
        
        </Screen>
    )
}