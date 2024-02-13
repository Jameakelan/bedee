import * as React from "react";
import { Pressable, StyleProp, ViewStyle } from "react-native";

export interface IIconButtonProps {
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

export default function IconButton(
  props: React.PropsWithChildren<IIconButtonProps>
) {
  return (
    <Pressable onPress={props.onPress} style={props.style}>
      {props.children}
    </Pressable>
  );
}
