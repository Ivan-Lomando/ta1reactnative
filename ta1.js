import React, { useState } from 'react';
import { Text, TextInput, View, Button, TouchableOpacity, StyleSheet } from 'react-native';
import Contador from './contador';

const Ta1 = () => {
    const [text, setText] = useState('');
    const [tarea, setTarea] = useState([]);

    const crearTarea = () => {
        if (text.trim()) {
            setTarea([...tarea, text]);
            setText('');
        }
    };

    const eliminarTarea = (index) => {
        const nuevasTareas = tarea.filter((_, i) => i !== index);
        setTarea(nuevasTareas);
    };

    return (
        <View style={styles.container}>
            <View style={{ marginBottom: 20 }}>
                <Contador titulo="Completadas" />
                <Contador titulo="Pendientes" />
            </View>
            <TextInput
                style={styles.input}
                placeholder="Toca aquí para crear una tarea"
                onChangeText={(newText) => setText(newText)}
                value={text}
            />
            <Button title="Crear tarea" onPress={crearTarea} />
            {tarea.map((item, index) => (
                <View key={index} style={styles.tareaContainer}>
                    <Text>{item}</Text>
                    <TouchableOpacity
                        style={styles.eliminarBoton}
                        onPress={() => eliminarTarea(index)}
                    >
                        <Text style={{ color: '#fff' }}>Eliminar</Text>
                    </TouchableOpacity>
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    tareaContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 5,
    },
    eliminarBoton: {
        backgroundColor: 'red',
        padding: 5,
    },
});

export default Ta1;
