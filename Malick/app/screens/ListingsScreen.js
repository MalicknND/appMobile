import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import Card from '../components/Card';
import colors from '../config/colors';
import routes from '../navigation/routes';
import Screen from '../components/Screen';

const listings = [
  {
    id: 1,
    title: 'T-shirt Noir',
    price: 20,
    image: require('../assets/img2.jpg'),
  },
  {
    id: 2,
    title: 'T-shirt Bleu',
    price: 15,
    image: require('../assets/img3.jpg'),
  },
];

function ListingsScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={item.price + '€'}
            image={item.image}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
