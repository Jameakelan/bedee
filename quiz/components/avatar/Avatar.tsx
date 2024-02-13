import * as React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { useTheme } from "../../contexts/use_theme";

export interface IAvatarProps {
  width?: number;
  height?: number;
  imageUri?: string;
  rankingBackgroundColor?: string;
  ranking?: number;
  disabledRanking?: boolean;
}

export default function Avatar(props: IAvatarProps) {
  const { theme } = useTheme();

  function renderRanking() {
    if (!props.disabledRanking) {
      return (
        <View
          style={[
            styles.rankingContainer,
            {
              backgroundColor:
                props.rankingBackgroundColor || theme.palette?.secondary,
            },
          ]}
        >
          <Text style={styles.rankingFont}>{`${props.ranking}`}</Text>
        </View>
      );
    }
  }

  return (
    <View style={styles.container}>
      <Image
        style={[
          styles.avatar,
          {
            borderColor: theme.palette?.primary,
            width: props.width,
            height: props.height,
            borderRadius: props.width ? props.width / 2 : 100,
          },
        ]}
        source={{
          uri: props.imageUri,
        }}
      />
      {renderRanking()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    alignItems: "center",
  },
  rankingContainer: {
    position: "absolute",
    bottom: 0,
    borderRadius: 100,
    paddingVertical: 4,
    paddingHorizontal: 10,
  },
  rankingFont: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  avatar: {
    backgroundColor: "gray",
    borderWidth: 4,
    marginBottom: 8,
  },
});
