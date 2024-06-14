import Ionicons from '@expo/vector-icons/Ionicons';
import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useEffect, useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';

export default function HomeScreen() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('http://www.omdbapi.com/?apikey=96172afc&s=movie')
    .then(response => response.json())
    .then(data => {
      setMovies(data.Search);
    })
    .catch(error => console.error(error));
  }, []);

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: 'rgb(30, 30, 100)' }}
      headerImage={<Ionicons size={310} name="videocam" style={styles.headerImage} />}
      >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={styles.title}>BORA ASSISTIR?</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle" style={styles.titleDestaque}>DESTAQUES</ThemedText>

        <FlatList
          data={movies}
          style={{display: 'flex', flexDirection: 'row'}}

          renderItem={({ item }) => (
            <ThemedView style={styles.movieContainer}>
              <Image source={{ uri: item.Poster }} style={styles.moviePoster} />
              <ThemedText type='subtitle'>{item.Title}</ThemedText>
            </ThemedView>
          )}
        />
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    display: "flex",
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
    marginTop: 30,
  },
  movieContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    gap: 30,
    marginBottom: 8,
  },
  moviePoster: {
    height: 350,
    width: "60%",
  },
  title: {
    color: "rgb(100, 100, 200)",
    fontSize: 100,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
    marginLeft: 70,
    marginTop: 80,
  },
  titleDestaque: {
    fontSize: 35,
    marginBottom: 30,
  },
  headerImage: {
    color: "rgb(250, 250, 250)",
    bottom: -120,
    left: -40,
    position: 'absolute',
  },
});