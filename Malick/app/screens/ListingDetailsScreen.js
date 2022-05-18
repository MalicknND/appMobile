import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import AppText from '../components/AppText';
import ListItem from '../components/ListItem';

import colors from '../config/colors';
function ListingDetailsScreen(props) {
  return (
    <View>
      <Image style={styles.image} source={require('../assets/img2.jpg')} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>T-shirt Noir</AppText>
        <AppText style={styles.price}>15€</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require('../assets/malick.jpg')}
            title="Malick Siguy Ndiaye"
            subTitle="5 Listes"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: '100%',
    height: 200,
  },
  price: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailsScreen;
