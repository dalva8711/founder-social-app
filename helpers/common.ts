import { Dimensions } from "react-native";

export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

export const hp = (percentage: number) => {
    return (percentage * SCREEN_HEIGHT) / 100;
}

export const wp = (percentage: number) => {
    return (percentage * SCREEN_WIDTH) / 100;
}