import * as React from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";
import IconButton from "../button/IconButton";
import { useTheme } from "../../contexts/use_theme";
import { MaterialIcons } from "@expo/vector-icons";
import { useUser } from "../../contexts/use_user";
import { useNavigation } from "@react-navigation/native";
import PathRoutes from "../../constants/pathRoutes";

export interface IQuizHeaderProps {}

const { height } = Dimensions.get("window");

export default function QuizHeader(props: IQuizHeaderProps) {
  const { theme } = useTheme();
  const { user } = useUser();
  const navigation = useNavigation();

  function handleIconButtonPress() {
    navigation.navigate(PathRoutes.LEADER_BOARD as never);
  }

  return (
    <View style={[styles.containerInfo]}>
      <Text style={styles.fontInfo}>{`Hi, ${user.username}`}</Text>
      <View>
        <IconButton
          onPress={handleIconButtonPress}
          style={[
            styles.iconContainer,
            { backgroundColor: theme.palette?.primary },
          ]}
        >
          <MaterialIcons name="space-dashboard" size={24} color="white" />
        </IconButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  iconContainer: {
    padding: 8,
    borderRadius: 24,
  },
  fontInfo: {
    fontSize: 20,
  },
  containerInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    margin: 8,
    borderRadius: 8,
  },
  containerCard: {
    padding: 8,
    height: height * 0.7,
    backgroundColor: "red",
  },
});
