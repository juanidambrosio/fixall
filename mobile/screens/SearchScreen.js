import React from 'react';
import { FlatList } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import Category from '../components/Category';

const SearchScreen = props => {

    const onPress = cat => {
        return;
    };

    return (
        <FlatList
            data={CATEGORIES.sort((cat1, cat2) => cat1.title > cat2.title)}
            renderItem={cat => (
                <Category
                    title={cat.item.title}
                    image={cat.item.image}
                    onPress={onPress} />
            )}
        />
    )
}

export default SearchScreen;