export type StackParamList = {
  BottomTabNavigator: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Favorite: undefined;
};

export type StackScreenName = keyof StackParamList;
export type BottomTabScreenName = keyof BottomTabParamList;
