import React from 'react';
import { Alert, Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  const onAlertPress = () => {
    Alert.alert('Alert', 'Alert Button pressed');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>MyApp</Text>
        <Text style={styles.headerSubtitle}>Welcome!</Text>
      </View>

      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/images/snapshot.png')}
          style={styles.snapshot}
          resizeMode="cover"
        />
      </View>

      <View style={styles.cardRow}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Profile</Text>
          <Text style={styles.cardBody}>Your profile summary here.</Text>
          <Button title="Follow" onPress={() => {}} />
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Activity</Text>
          <Text style={styles.cardBody}>Recent updates go here.</Text>
          <Button title="Open" onPress={() => {}} />
        </View>
      </View>

      <View style={styles.bottomArea}>
        <Button title="Alert" onPress={onAlertPress} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, backgroundColor: '#f2f3f5', alignItems: 'stretch' },
  header: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16 },
  headerTitle: { fontSize: 24, fontWeight: '700' },
  headerSubtitle: { fontSize: 16, color: '#555' },
  imageContainer: { height: 300, borderRadius: 12, overflow: 'hidden', marginBottom: 16 },
  snapshot: { width: '100%', height: '100%' },
  cardRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16 },
  card: {
    flex: 1,
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 8,
    marginHorizontal: 6,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
  },
  cardTitle: { fontWeight: '600', marginBottom: 6 },
  cardBody: { color: '#666', marginBottom: 8 },
  bottomArea: { marginBottom: 30 },
});
