import React from "react";
import RootNavigator from "./navigators/RootNavigator";
import AppRegister from "./libraries";

export default function App() {
  return (
    <AppRegister>
      <RootNavigator />
    </AppRegister>
  );
}
