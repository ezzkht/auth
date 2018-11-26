/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View} from 'react-native';
import {Header} from './components/common';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

type Props = {};
export default class App extends Component<Props> {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyDqNwBhTb44ibNim-jx3dP2zl21WR1DMzk",
            authDomain: "authentication-40a4d.firebaseapp.com",
            databaseURL: "https://authentication-40a4d.firebaseio.com",
            projectId: "authentication-40a4d",
            storageBucket: "authentication-40a4d.appspot.com",
            messagingSenderId: "339820313276"
        });
    }

    render() {
        return (
          <View>
              <Header headerText="Authentication" />
              <LoginForm />
          </View>
        );
    }
}


