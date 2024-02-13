import * as React from "react";
import { View, StyleSheet, Animated } from "react-native";

export interface IProgressiveBarProps {
  progress?: number;
  max?: number;
}

export default function ProgressiveBar(props: IProgressiveBarProps) {
  const progress = props.progress || 0;
  const max = props.max || 1;
  let actualProgress = progress <= max ? progress / max : max;

  return (
    <View style={styles.container}>
      <View style={[styles.progressiveContainer]}>
        <View style={[styles.filler, { flex: actualProgress }]}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  progressiveContainer: {
    backgroundColor: "lightgray",
    flexDirection: "row",
    height: 16,
    borderRadius: 8,
  },
  filler: {
    height: "100%",
    backgroundColor: "green",
    borderRadius: 8,
  },
});
