import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, TouchableOpacity, Button } from 'react-native';


var i = 0;

const DATA_LISTNV = [
  { name: 'Devin', sdt: '098762888' },
  { name: 'Dan', sdt: '088299289' },
  { name: 'Dominic', sdt: '090989900' },
  { name: 'Jackson', sdt: '088990088' },
  { name: 'James', sdt: '098779989' },
  { name: 'Joel', sdt: '098787899' },
  { name: 'John', sdt: '078997899' },
];

export default function App() {

  const listNV = DATA_LISTNV;

  console.log('rerender ' + (++i))

  const [rerender, setRerender] = useState(true);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <FlatList
          style={{ height: 400 }}
          data={listNV}
          renderItem={({ item }) =>

            <TouchableOpacity
              onPress={
                () => {
                  alert(`${item.name} - ${item.sdt}`)
                }
              }
            >

              <View style={
                {
                  flexDirection: 'row',
                  backgroundColor: 'green'
                }
              }>

                <Text style={styles.item}>{item.name}</Text>
                <Text style={styles.item}>{item.sdt}</Text>
              </View>
            </TouchableOpacity>




          }
        />

        <View style={{ flexDirection: 'row', marginTop: 20, width: '100%', alignItems: 'center' }}>

          <Button title='Add' onPress={() => {
            listNV.push({ name: 'Long', sdt: '0987555889' });

            setRerender(!rerender);

          }} />

          <Button title='Delete' onPress={() => {
            listNV.splice(0, 1);

            setRerender(!rerender);

          }} />

        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
