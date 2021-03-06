import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";

export type Eventdata = {
  type: string;
  date: string;
  eventId: string;
  checked?: boolean;
};

type HomeScreenNavigationProp = StackNavigationProp<
  NavigationParamList,
  "Home"
>;

type DetailScreenNavigationProp = StackNavigationProp<
  NavigationParamList,
  "Detail"
>;

export type HomeScreenProps = {
  navigation: HomeScreenNavigationProp;
};

type DetailScreenRouteProp = RouteProp<NavigationParamList, "Detail">;

export type DetailScreenProps = {
  navigation: DetailScreenNavigationProp;
  route: DetailScreenRouteProp;
};

export type NavigationParamList = {
  Home: undefined;
  Detail: { event: { id: string; type: string; header?: string } };
};

export interface EventList extends Array<Eventdata> {}

export type InitialStateType = {
  CheckedEvent: string[];
};

export const initialState: InitialStateType = {
  CheckedEvent: [],
};
