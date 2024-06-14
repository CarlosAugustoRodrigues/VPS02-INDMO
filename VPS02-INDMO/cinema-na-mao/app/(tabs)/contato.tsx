import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: 'rgb(30, 30, 30)' }}
      headerImage={<Ionicons size={310} name="call" style={styles.headerImage} />}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={styles.title}>ENTRE EM CONTATO</ThemedText>
      </ThemedView>

      <ThemedView style={styles.containerContact}>
        <Ionicons size={40} name="call" style={styles.icon} />
        <ThemedText>(19) 9.9090-8080</ThemedText>
      </ThemedView>

      <ThemedView style={styles.containerContact}>
        <Ionicons size={40} name="mail" style={styles.icon} />
        <ThemedText>cinemanamao@.email.com</ThemedText>
      </ThemedView>
      
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: 'rgb(240, 240, 240)',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    marginTop: 40,
    marginBottom: 70,
    gap: 8,
  },
  title: {
    fontSize: 60,
  },
  icon: {
    color: 'rgb(200, 200, 200)',
  },
  containerContact: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 30
  }
});
