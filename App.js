import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';

const materiasCarrera1 = [
  { id: '1', nombre: 'Materia 1' },
  { id: '2', nombre: 'Materia 2' },
  { id: '3', nombre: 'Materia 3' },
  { id: '4', nombre: 'Materia 4' },
  { id: '5', nombre: 'Materia 5' },
];

const materiasCarrera2 = [
  { id: '1', nombre: 'Materia A' },
  { id: '2', nombre: 'Materia B' },
  { id: '3', nombre: 'Materia C' },
  { id: '4', nombre: 'Materia D' },
  { id: '5', nombre: 'Materia E' },
];

const App = () => {
  const [carrera, setCarrera] = useState(1);

  const renderItem = ({ item }) => (
    <Text>{item.nombre}</Text>
  );

  return (
    <View>
      <Text>Lista de materias</Text>
      <FlatList
        data={carrera === 1 ? materiasCarrera1 : materiasCarrera2}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default App;
