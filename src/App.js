import logo from './logo.svg';
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator, //  component will scaffold out an entire user authentication flow allowing users to sign up, sign in, reset their password, and confirm sign in for multifactor authentication (MFA). 
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";

function App({ signOut }) {
  return (
    <View className="App">
      <Card>
        <Image src={logo} className="App-logo" alt="logo" />
        <Heading level={1}>We now have Auth!</Heading>
      </Card>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
}

export default withAuthenticator(App);
