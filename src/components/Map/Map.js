import { useRef, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Callout, Marker } from 'react-native-maps';
import * as FileSystem from 'expo-file-system';
import { shareAsync } from 'expo-sharing';
import { Button } from '../Buttons';
import { Text } from '../Text';
import { mapJson } from './dummyData';

let locationsOfInterest = [
  {
    title: "First",
    location: {
      latitude: -27.2,
      longitude: 145
    },
    description: "My First Marker"
  },
  {
    title: "Second",
    location: {
      latitude: -30.2,
      longitude: 150
    },
    description: "My Second Marker"
  }
];

export const Map = () => {
  const [count, setCount] = useState(0);
  const [draggableMarkerCoord, setDraggableMarkerCoord] = useState({
    longitude: 148.11,
    latitude: -26.85
  });
  const mapRef = useRef();

  const onRegionChange = (region) => {
    console.log(region);
  };

  const showLocationsOfInterest = () => {
    return locationsOfInterest.map((item, index) => {
      return (
        <Marker
          key={index}
          coordinate={item.location}
          title={item.title}
          description={item.description}
        />
      )
    });
  };

  const takeSnapshotAndShare = async () => {
    const snapshot = await mapRef.current.takeSnapshot({ width: 300, height: 300, result: 'base64'});
    const uri = FileSystem.documentDirectory + "snapshot.png";
    await FileSystem.writeAsStringAsync(uri, snapshot, { encoding: FileSystem.EncodingType.Base64 });
    await shareAsync(uri);
  };

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        customMapStyle={mapJson}
        initialRegion={{
          latitude: -26.852691607783505,
          latitudeDelta: 27.499085419977938,
          longitude: 148.1104129487327,
          longitudeDelta: 15.952148000000022,
        }}
        onRegionChange={onRegionChange}
      >
        {showLocationsOfInterest()}
        <Marker
          draggable
          pinColor='#0000ff'
          coordinate={draggableMarkerCoord}
          onDragEnd={(e) => setDraggableMarkerCoord(e.nativeEvent.coordinate)}
        />
        <Marker
          pinColor='#00ff00'
          coordinate={{ latitude: -35, longitude: 147}}
        >
          <Callout>
            <Text>Count: {count}</Text>
            <Button color="error" onPress={() => setCount(count + 1)}>
              Increment Count
            </Button>

            <Button color="error" onPress={takeSnapshotAndShare}>
              Take Snapshot and Share
            </Button>
          </Callout>
        </Marker>
        {/*<Text style={styles.mapOverlay}>Longitude: {draggableMarkerCoord.longitude}, latitude: {draggableMarkerCoord.latitude}</Text>*/}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
  map: {
    width: '100%',
    height: '100%'
  },
  mapOverlay: {
    position: "absolute",
    bottom: 50,
    backgroundColor: "#ffffff",
    borderWidth: 2,
    borderRadius: 5,
    padding: 16,
    left: "25%",
    width: "50%",
    textAlign: "center"
  }
});
