import {View, ActivityIndicator, FlatList } from 'react-native';
import { useState ,useEffect} from 'react';
import {getLatestMovies} from '../lib/metacritic'
import {useSafeAreaInsets} from 'react-native-safe-area-context'
import { AnimatedMovieCard } from './MovieCard.jsx';
import { Screen } from './Screen.jsx';

export  function Main() {
  const [movies,setMovies] = useState([])
  const insets = useSafeAreaInsets()

useEffect(() => {
  getLatestMovies().then((movie) => setMovies(movie))
}, []);

  return (
    <Screen >
        
        {movies.length === 0 ? (
            <ActivityIndicator color='#fff' size='large'/>
        ):(
            <FlatList
            data={movies}
            keyExtractor={movie => movie.id}
            renderItem={({item, index}) => <AnimatedMovieCard movie={item} index={index} />}
            />

        )}

    </Screen>
  );
}

