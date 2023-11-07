import React, { useState, useEffect } from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import {
  Button,
  Flex,
  Heading,
  Text,
  TextField,
  View,
  withAuthenticator,
  Image,
  Card,
} from "@aws-amplify/ui-react";

const App = ({ signOut }) => {
  return (
    <View className="App">
      <Card>
        {/* <Image src={logo} className="app-logo" alt="logo" /> */}
        <Heading level={1}>We Now have auth!</Heading>
      </Card>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
};

//This is wraping our app into authenticator so that when one launches this particular page, it'll first ask to login.
export default withAuthenticator(App);
