import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

export default function Post(props) {
  const [like, setLike] = useState(props.date?.isLiked || false);

  function toggleLike() {
    setLike((prevLike) => !prevLike);
  }

  function showLike(likers) {
    if (likers < 1) return;
    return (
      <Text style={styles.postFeedLikes}>
        {likers} {likers > 1 ? "likes" : "like"}
      </Text>
    );
  }

  return (
    <View>
      <View style={styles.userProfile}>
        <TouchableOpacity>
          <Image
            source={{ uri: props.data.profileImg }}
            style={styles.userProfileImage}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.userProfileName}>{props.data.name}</Text>
        </TouchableOpacity>
      </View>
      <Image
        resizeMode="cover"
        source={{ uri: props.data.postImg }}
        style={styles.postFeedImage}
      />
      <View style={styles.postFeedActions}>
        <TouchableOpacity onPress={toggleLike}>
          <Image
            source={
              like
                ? require("../../../assets/images/likeada.png")
                : require("../../../assets/images/like.png")
            }
            style={styles.postFeedLike}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            source={require("../../../assets/images/comment.png")}
            style={[styles.postFeedMarginLeft, styles.postFeedLike]}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            source={require("../../../assets/images/send.png")}
            style={[styles.postFeedMarginLeft, styles.postFeedLike]}
          />
        </TouchableOpacity>
      </View>
      {showLike(props.data.likers)}
      <View style={styles.postFeedDescription}>
        <Text style={styles.postFeedDescriptionName}>{props.data.name}</Text>
        <Text style={styles.postFeedDescriptionImg}>
          {props.data.description}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  userProfile: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  userProfileImage: {
    width: 40,
    height: 40,
    borderRadius: 25,
    marginLeft: 8,
    marginTop: 4,
  },
  userProfileName: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 8,
  },
  postFeedImage: {
    height: 400,
    alignItems: "center",
  },
  postFeedActions: {
    flexDirection: "row",
    paddingHorizontal: 4,
    height: 32,
    alignItems: "center",
  },
  postFeedLike: {
    width: 24,
    height: 24,
  },
  postFeedMarginLeft: {
    marginLeft: 4,
  },
  postFeedLikes: {
    marginLeft: 8,
    fontSize: 14,
  },
  postFeedDescription: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 4,
  },
  postFeedDescriptionName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  postFeedDescriptionImg: {
    fontSize: 14,
    marginLeft: 8,
  },
});
