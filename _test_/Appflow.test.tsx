import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import Home from "../src/screen/home";

const createTestProps = (props: any) => ({
  navigation: {
    navigate: jest.fn(),
  },
  ...props,
});

jest.mock("react-native-shared-element", () => {
  const { View } = require("react-native");
  const SharedElement = (props: any) => {
    return <View>{props.children}</View>;
  };
  return {
    __esModule: true,
    SharedElement: SharedElement,
  };
});

jest.mock("react-query", () => {
  var Status = "success";
  var testData = [
    {
      eventId: "601422295698cfc9b81f9ff4",
      type: "abornalActivity",
      date: "2021-01-20T14:56:41+00:00",
    },
    {
      eventId: "60142229244ba40852283d66",
      type: "upAtNight",
      date: "2021-01-19T14:56:41+00:00",
    },
  ];
  const useQuery = () => {
    return { status: Status, Data: testData };
  };
  return {
    __esModule: true,
    useQuery: useQuery,
  };
});

describe("App flow works correctly", () => {
  describe("Navigation", () => {
    const props: any = createTestProps({});

    it("navigates to detail Screen on EventCard press", () => {
      const { getByTestId } = render(<Home {...props} />);
      fireEvent.press(getByTestId(`event-card-1`));
      expect(props.navigation.navigate).toHaveBeenCalled();
    });
  });
});
