import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";
import { View } from "react-native";
import QuizScreen from "../../screen/quiz/QuizScreen";
import {
  StackNavigationOptions,
  createStackNavigator,
} from "@react-navigation/stack";
import RegisterScreen from "../../screen/register/RegisterScreen";
import { useTheme } from "../../contexts/use_theme";
import PathRoutes from "../../constants/pathRoutes";
import LeaderBoardScreen from "../../screen/leaderBoard/LeaderBoardScreen";

const Stack = createStackNavigator();

export default function StackNavigator() {
  const { theme } = useTheme();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: {
            backgroundColor: theme.palette?.background,
          },
        }}
      >
        <Stack.Screen name={PathRoutes.Register} component={RegisterScreen} />
        <Stack.Screen name={PathRoutes.Quiz} component={QuizScreen} />
        <Stack.Screen
          name={PathRoutes.LEADER_BOARD}
          component={LeaderBoardScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
