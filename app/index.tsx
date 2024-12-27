import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

import Header from "../components/src/Header";
import Post from "../components/src/Post";

export default function App() {
  const [feed, setFeed] = useState([
    {
      id: "1",
      name: "Lucas Silva",
      description: "Mais um dia de muitos bugs :)",
      profileImg: "https://sujeitoprogramador.com/instareact/fotoPerfil1.png",
      postImg: "https://sujeitoprogramador.com/instareact/foto1.png",
      isLiked: true,
      likers: 1,
    },
    {
      id: "2",
      name: "Matheus",
      description: "Isso sim é ser raiz!!!!!",
      profileImg: "https://sujeitoprogramador.com/instareact/fotoPerfil2.png",
      postImg: "https://sujeitoprogramador.com/instareact/foto2.png",
      isLiked: false,
      likers: 0,
    },
    {
      id: "3",
      name: "Jose Augusto",
      description:
        "Bora trabalhar, hoje estou começando em um projeto novo aqui no sujeito, desde o backend ao frontend",
      profileImg: "https://sujeitoprogramador.com/instareact/fotoPerfil3.png",
      postImg: "https://sujeitoprogramador.com/instareact/foto3.png",
      isLiked: false,
      likers: 3,
    },
    {
      id: "4",
      name: "Gustavo Henrique",
      description: "Isso sim que é TI!",
      profileImg: "https://sujeitoprogramador.com/instareact/fotoPerfil1.png",
      postImg: "https://sujeitoprogramador.com/instareact/foto4.png",
      isLiked: false,
      likers: 1,
    },
    {
      id: "5",
      name: "Guilherme",
      description: "Boa tarde galera do insta...",
      profileImg: "https://sujeitoprogramador.com/instareact/fotoPerfil2.png",
      postImg: "https://sujeitoprogramador.com/instareact/foto5.png",
      isLiked: false,
      likers: 32,
    },
  ]);
  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={feed}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Post data={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
