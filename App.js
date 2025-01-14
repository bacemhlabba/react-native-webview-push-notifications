import React, { Component } from 'react';
import { WebView } from 'react-native-webview';
import OneSignal from 'react-native-onesignal';

class App extends Component {
  componentDidMount() {
    OneSignal.setAppId("YOUR_ONESIGNAL_APP_ID");

    OneSignal.setNotificationOpenedHandler(notification => {
      console.log("Notification opened: ", notification);
    });

    OneSignal.setNotificationWillShowInForegroundHandler(notificationReceivedEvent => {
      let notification = notificationReceivedEvent.getNotification();
      console.log("Notification received in foreground: ", notification);
      notificationReceivedEvent.complete(notification);
    });
  }

  handlePushNotification = (message) => {
    OneSignal.postNotification(
      message,
      {},
      "YOUR_ONESIGNAL_APP_ID"
    );
  }

  onMessage = (event) => {
    const { data } = event.nativeEvent;
    if (data === 'triggerNotification') {
      this.handlePushNotification("This is a test notification");
    }
  }

  render() {
    return (
      <WebView
        source={{ uri: 'https://your-webview-url.com' }}
        onMessage={this.onMessage}
      />
    );
  }
}

export default App;
