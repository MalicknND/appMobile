import React, { useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import Screen from '../components/Screen';

import {
  ListItem,
  ListItemDeleteAction,
  ListItemSeparator,
} from '../components/lists';

const initialMessages = [
  {
    id: 1,
    title: 'commentaire',
    description:
      "On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L'avantage du Lorem Ipsum sur un texte générique comme 'Du texte. Du texte. Du texte.' est qu'il possède une distribution de lettres plus ou moins normale, et en tout cas comparable avec celle du français standard. De nombreuses suites logicielles de mise en page ou éditeurs de sites Web ont fait du Lorem Ipsum leur faux texte par défaut, et une recherche pour 'Lorem Ipsum' vous conduira vers de nombreux sites qui n'en sont encore qu'à leur phase de construction. Plusieurs versions sont apparues avec le temps, parfois par accident, souvent intentionnellement (histoire d'y rajouter de petits clins d'oeil, voire des phrases embarassantes).",
    image: require('../assets/malick.jpg'),
  },
  {
    id: 2,
    title: 'T2',
    description: 'D2',
    image: require('../assets/malick.jpg'),
  },
];

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    const newMessages = messages.filter((m) => m.id !== message.id);
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log('Message séléctionné', item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: 'T2',
              description: 'D2',
              image: require('../assets/malick.jpg'),
            },
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {},
});

export default MessagesScreen;
