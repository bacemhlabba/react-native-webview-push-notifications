# React Native WebView with OneSignal Push Notifications

This project demonstrates how to integrate OneSignal push notifications into a React Native WebView project.

## Setup

### Prerequisites

- Node.js
- React Native CLI
- Xcode (for iOS development)
- Android Studio (for Android development)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/githubnext/workspace-blank.git
   cd workspace-blank
   ```

2. Install the dependencies:

   ```sh
   npm install
   ```

3. Install the OneSignal React Native SDK:

   ```sh
   npm install react-native-onesignal
   ```

4. Link the OneSignal SDK (for React Native versions below 0.60):

   ```sh
   react-native link react-native-onesignal
   ```

### Configuration

1. Create an account on OneSignal and set up a new project for your React Native app.

2. Obtain your OneSignal App ID from the OneSignal dashboard.

3. Open the `App.js` file and replace `YOUR_ONESIGNAL_APP_ID` with your actual OneSignal App ID.

4. Follow the OneSignal documentation to configure your app for iOS and Android platforms.

### Running the App

1. Start the React Native development server:

   ```sh
   npm start
   ```

2. Run the app on an iOS or Android emulator:

   ```sh
   react-native run-ios
   react-native run-android
   ```

### Triggering Push Notifications

The WebView component in this project is configured to trigger push notifications based on specific events. For example, when the WebView sends a message with the data `triggerNotification`, a push notification will be sent.

To test this functionality, you can modify the WebView source to send the `triggerNotification` message based on your desired events.
