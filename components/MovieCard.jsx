import { useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Image, Animated, Pressable} from 'react-native';
import { Score } from './Score';
import { Link } from 'expo-router';


export function MovieCard({movie}){
    return(
        <Link href={`/${movie.id}`} asChild>
          <Pressable>
          {({pressed})=>(
             
            <View className="flex-row gap-4 p-4 mb-2 border border-black bg-gray-300/10 rounded-xl" style={pressed && styles.pressedCard} >
              <Image source={{uri:movie.img}} style={styles.image}/>
              <View className="flex-shrink" >
                <Text className="mb-1" style={styles.title}>{movie.title}</Text>
                <Score score ={movie.vote_average} maxScore={10}/>
                <Text className="flex-shrink mt-2" style={styles.description}>{movie.overview.slice(0,100)}</Text>
              </View>
            </View>
          )}
          </Pressable>
        </Link>
    )
}

export function AnimatedMovieCard({movie, index}){
  const opacity = useRef(new Animated.Value(0)).current

  useEffect(()=>{
    Animated.timing(opacity,{
      toValue:1,
      duration: 1000,
      delay: index *250,
      useNativeDriver: true
    }).start();
  }, [opacity , index])

  return(
    <Animated.View style={{opacity}}>
        <MovieCard movie={movie}/>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
    image:{
  
      width:150,
      height:150,
      borderRadius:10
    },
    card:{
      width:250,
      marginBottom:42,
      justifyContent:'center',
      alignItems:'center'
      
    },
    title: {
  
      fontWeight:'bold',
      color:'#fff',
      fontSize: 25,
      marginBottom:10
  
    },description:{
      color:'#fff',
      marginBottom:10
  
    },vote:{
      fontSize:20,
      color:"green"
    },pressedCard:{
      opacity:0.7,
      borderColor: 'white',
      borderWidth: 1
    }
  });
  