import React, { useState, useEffect } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, TextInput, Button } from 'react-native';
import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await fetch(`http://www.omdbapi.com/?s=${query}&apikey=96172afc`);
        const data = await response.json();
        setSearchResults(data.Search || []);
      } catch (error) {
        console.error(error);
      }
    };

    if (query.length > 0) {
      fetchSearchResults();
    }
  }, [query]);

  const handleSearch = async () => {
    try {
      const response = await fetch(`http://www.omdbapi.com/?s=${query}&apikey=96172afc`);
      const data = await response.json();
      setSearchResults(data.Search || []);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: 'rgb(30, 30, 30)' }}
      headerImage={<Ionicons size={310} name="search" style={styles.headerImage} />}
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={styles.title}>BUSCA</ThemedText>
      </ThemedView>
      <ThemedText>Busque seus filmes favoritos</ThemedText>

      <ThemedView style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search for movies"
            value={query}
            onChangeText={setQuery}
          />
          <Button title="Search" onPress={handleSearch} />
        </ThemedView>
          {searchResults.map(result => (
            <ThemedView key={result.imdbID} style={styles.resultContainer}>
              <Image
                source={{ uri: result.Poster }}
                style={styles.poster}
              />
              <ThemedText>{result.Title}</ThemedText>
            </ThemedView>
          ))}
      {/* Rest of the code */}
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: 'rgb(30, 30, 200)',
    bottom: -70,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    color: 'white',
    backgroundColor: 'white',
    borderRadius: 4,
    padding: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  searchInput: {
    flex: 1,
    padding: 8,
    borderWidth: 1,
    borderColor: '#101010',
    borderRadius: 4,
    marginRight: 8,
  },
  poster: {
    width: 100,
    height: 150,
  },
  resultContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 30,
    marginBottom: 8,
  },
  title: {
    fontSize: 60,
  }
});
