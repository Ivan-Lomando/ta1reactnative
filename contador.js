import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Contador = ({ titulo }) => {
    const [contador, setContador] = useState(0);

    return (
        <View style={styles.contadorContainer}>
            <Text>{titulo}: {contador}</Text>
            <View style={styles.botonContainer}>
                <Button
                    title="+"
                    onPress={() => setContador(contador + 1)}
                />
                <Button
                    title="-"
                    onPress={() => {
                        if (contador > 0) {
                            setContador(contador - 1);
                        }
                    }}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    contadorContainer: {
        alignItems: 'center',
        marginVertical: 10,
    },
    botonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '50%',
        marginTop: 5,
    },
});

export default Contador;
