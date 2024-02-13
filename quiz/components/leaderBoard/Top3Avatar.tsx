import * as React from "react";
import { View, Text, SafeAreaView, StyleSheet, Dimensions } from "react-native";
import Avatar from "../avatar/Avatar";
import { useTheme } from "../../contexts/use_theme";
import UserModel from "../../models/UserModel";

export interface ITop3AvatarProps {
  users: UserModel[];
}

const { width } = Dimensions.get("window");
export default function Top3Avatar(props: ITop3AvatarProps) {
  const { theme } = useTheme();

  return (
    <View style={styles.avatarContainer}>
      <View style={styles.container}>
        <Avatar
          ranking={2}
          width={width * 0.2}
          height={width * 0.2}
          rankingBackgroundColor="green"
          imageUri={props.users[1].imageUri}
        />
        <Text style={styles.username}>{props.users[1].username}</Text>
        <Text style={[styles.username, { color: theme.palette?.primary }]}>
          {props.users[1].score}
        </Text>
      </View>
      <View style={styles.container}>
        <Avatar
          ranking={1}
          width={width * 0.3}
          height={width * 0.3}
          rankingBackgroundColor="gold"
          imageUri={props.users[0].imageUri}
        />
        <Text style={styles.username}>{props.users[0].username}</Text>
        <Text style={[styles.username, { color: theme.palette?.primary }]}>
          {props.users[0].score}
        </Text>
      </View>
      <View style={styles.container}>
        <Avatar
          ranking={3}
          width={width * 0.2}
          height={width * 0.2}
          rankingBackgroundColor="blue"
          imageUri={props.users[2].imageUri}
        />
        <Text style={styles.username}>{props.users[2].username}</Text>
        <Text style={[styles.username, { color: theme.palette?.primary }]}>
          {props.users[2].score}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  username: {
    fontSize: 16,
    fontWeight: "bold",
  },
  avatarContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "80%",
  },
});
