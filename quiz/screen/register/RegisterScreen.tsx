import * as React from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useTheme } from "../../contexts/use_theme";
import TextField from "../../components/input/TextField";
import RoundedButton from "../../components/button/RoundedButton";
import { useUser } from "../../contexts/use_user";
import { useNavigation } from "@react-navigation/native";
import PathRoutes from "../../constants/pathRoutes";

export interface IRegisterScreenProps {}

const { height, width } = Dimensions.get("window");

export default function RegisterScreen(props: IRegisterScreenProps) {
  const [username, setUsername] = React.useState<string>("");

  const { theme } = useTheme();
  const { user, setUser, setName } = useUser();
  const navigation = useNavigation();

  function handleTextChange(text: string) {
    setUsername(text);
  }

  function handleSignUp() {
    if (username) {
      setName(username);
      navigation.navigate(PathRoutes.Quiz as never);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View>
          <Image
            style={styles.image}
            source={require("../../assets/images/cute_dog.jpg")}
          />
        </View>

        <View
          style={[
            styles.registerContainer,
            {
              backgroundColor: theme.palette?.surface,
            },
          ]}
        >
          <Text style={styles.font}>Enter a username to do a quiz.</Text>
          <TextField onTextChange={handleTextChange} />
        </View>

        <View style={styles.buttonContainer}>
          <RoundedButton title="Sing up" onPress={handleSignUp} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
  },
  registerContainer: {
    paddingVertical: 24,
    paddingHorizontal: 16,
    justifyContent: "center",
    margin: 16,
    borderRadius: 16,
    height: height * 0.18,
  },
  image: {
    width: "100%",
    height: height * 0.4,
    resizeMode: "contain",
  },
  font: {
    marginBottom: 16,
    fontSize: 20,
    fontWeight: "bold",
  },
  buttonContainer: {
    alignItems: "center",
  },
});
