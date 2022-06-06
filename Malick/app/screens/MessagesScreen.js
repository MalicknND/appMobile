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
    title: 'Malick',
    description: 'Bonjour, est ce que cet article est toujours disponible ?',
    image: require('../assets/malick.jpg'),
  },
  {
    id: 2,
    title: 'Malick',
    description: 'Je suis intéresé par cet article.',
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
              title: 'Malick',
              description: 'Je suis intéresé par cet article.',
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
