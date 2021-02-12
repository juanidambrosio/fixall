import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Category = props => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={styles.category}>
                <MaterialCommunityIcons
                    name={props.image}
                    size={25}
                />
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    category: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: 50,
        marginTop: 40
    }
});

export default Category;