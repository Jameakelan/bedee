import * as React from "react";
import { View, Text, SafeAreaView, StyleSheet, Dimensions } from "react-native";
import { useUser } from "../../contexts/use_user";
import Avatar from "../../components/avatar/Avatar";
import Top3Avatar from "../../components/leaderBoard/Top3Avatar";
import LeaderBoardController from "./LeaderBoardController";
import { FlatList } from "react-native-gesture-handler";
import IconButton from "../../components/button/IconButton";
import { AntDesign } from "@expo/vector-icons";
import { useTheme } from "../../contexts/use_theme";
import { StackActions, useNavigation } from "@react-navigation/native";
import PathRoutes from "../../constants/pathRoutes";
import CardRankingScore from "../../components/leaderBoard/RankingCardScore";

export interface ILeaderBoardScreenProps {}

const controller = new LeaderBoardController();

const { width } = Dimensions.get("window");
export default function LeaderBoardScreen(props: ILeaderBoardScreenProps) {
  const { theme } = useTheme();
  const { user, setScore } = useUser();
  const navigation = useNavigation();

  function handleIconButtonPress() {
    setScore(0);
    navigation.dispatch(StackActions.replace(PathRoutes.Quiz as never));
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={styles.listContainer}
        ListHeaderComponent={
          <>
            <View style={styles.iconContainer}>
              <IconButton
                style={[
                  styles.iconButton,
                  { backgroundColor: theme.palette?.primary },
                ]}
                onPress={handleIconButtonPress}
              >
                <AntDesign name="retweet" size={24} color="white" />
              </IconButton>
            </View>
            <View style={styles.rankingContainer}>
              <Top3Avatar users={controller.getTop3(user)} />
            </View>
          </>
        }
        data={controller.getOtherUsers(user)}
        renderItem={({ item }) => <CardRankingScore user={item} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
  },
  iconContainer: {
    padding: 8,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  listContainer: {
    width,
  },
  iconButton: {
    padding: 8,
    borderRadius: 24,
  },
  rankingContainer: {
    alignItems: "center",
  },
});
