import React, { ReactChild } from "react";
import {
  View,
  ViewStyle,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { formatDate } from "./layout";
import { MediumText, RegularText } from "./text";
import { CardStyles as styles } from "./styles";
import { SharedElement } from "react-navigation-shared-element";

interface props extends TouchableOpacityProps {
  name: string;
  date: string;
  checked?: boolean;
  icon: ReactChild;
  style?: ViewStyle;
  id?: string;
  onPress: () => void;
}

export const EventCard: React.FC<props> = ({
  name,
  date,
  checked,
  icon,
  style,
  id,
  onPress,
}) => {
  const Date = formatDate(date);
  return (
    <View style={[styles.card, checked && styles.checked, style]}>
      <TouchableOpacity
        style={styles.touchItem}
        activeOpacity={0.7}
        onPress={onPress}
      >
        <SharedElement id={`${id}`}>{icon}</SharedElement>

        <View style={styles.left}>
          <MediumText title={name} style={styles.name} />
          <RegularText title={Date} style={styles.date} />
        </View>
      </TouchableOpacity>
    </View>
  );
};
