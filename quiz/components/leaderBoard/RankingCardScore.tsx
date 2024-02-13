import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import UserModel from "../../models/UserModel";
import Avatar from "../avatar/Avatar";
import { useTheme } from "../../contexts/use_theme";

export interface ICardRankingScoreProps {
  user: UserModel;
}

export default function CardRankingScore(props: ICardRankingScoreProps) {
  const { theme } = useTheme();
  return (
    <View
      style={[styles.container, { backgroundColor: theme.palette?.secondary }]}
    >
      <View style={styles.infoContainer}>
        <Avatar
          width={60}
          height={60}
          disabledRanking
          imageUri={props.user.imageUri}
        />
        <Text style={[styles.font]}>{props.user.username}</Text>
      </View>

      <View>
        <Text style={[styles.font]}>{props.user.score}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 8,
    padding: 10,
    borderRadius: 16,
  },
  font: {
    fontSize: 16,
    fontWeight: "bold",
    paddingHorizontal: 8,
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
