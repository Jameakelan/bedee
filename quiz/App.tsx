import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import QuizScreen from "./screen/quiz/QuizScreen";
import { ThemeProvider } from "./contexts/use_theme";
import StackNavigator from "./components/navigation/StackNavigator";
import { UserProvider } from "./contexts/use_user";

export default function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <StackNavigator />
      </UserProvider>
    </ThemeProvider>
  );
}
