/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View, Button} from 'react-native';
import {Header, Spinner} from './components/common';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

type Props = {};
export default class App extends Component<Props> {
    state = {loggedIn: null};

    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyDqNwBhTb44ibNim-jx3dP2zl21WR1DMzk",
            authDomain: "authentication-40a4d.firebaseapp.com",
            databaseURL: "https://authentication-40a4d.firebaseio.com",
            projectId: "authentication-40a4d",
            storageBucket: "authentication-40a4d.appspot.com",
            messagingSenderId: "339820313276"
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({loggedIn: true});
            } else {
                this.setState({loggedIn: false});
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
            return (
                <Button onPress={() => firebase.auth().signOut()} title="Log Out"></Button>
            );

            case false:
                return <LoginForm />;

            default:
                return <Spinner size="large" />;
        }
    }

    render() {
        return (
          <View>
              <Header headerText="Authentication" />
              {this.renderContent()}
          </View>
        );
    }
}


