# Map App Showcase
## Graciele Maria Ludwig
## Student ID: 22711
## Lecture: Saravanabalagi Ramachandran
## Mobile App 2 - BSC30922 - Dorset College Dublin
### The objective of this project is to develop a mobile app to showcase in map places of literary importance in Ireland and surrounding areas, related to poets, patrons, publishers in Ireland who lived in the 16th and 17th century. The requirements are as follows and all requirements carry equal weightage:
Requirements Checklist:
##### 1 - Display markers on the map:
 - [ ] Load places and place types JSON data1;
 - [ ] Display marker for all places using GPS coordinates;
 - [ ] Use different colours, one for each place type ;
 - [ ]  When marker is tapped, place name should be displayed on a pop-up info window ;
##### 2 - Show extended information:
 - [ ]  When the pop up info window is tapped, show in full screen all details of the place (id, name, Gaelic name, type, GPS coordinates) ;
 - [ ] Show the image of the place if available, else, show a random image loaded from the internet ;
 - [ ] Show a back button, when pressed, go back to map view ;
##### 3 - Allow filtering by Place Type:
 - [ ]  Show dropdown for selecting Place Type, default value should be all ;
 - [ ] When a specific Place Type is selected, show only the places with this Place Type on the map ;
##### 4 - Allow custom marker:
 - [ ] Long Press anywhere on map to show a draggable marker;
 - [ ] Show distance2 to the nearest place (from the downloaded data), and on drag marker, update this info ;
 - [ ] Draw a semi-transparent blue circle around this marker with a radius of 10 km and show number of places within this radius ;
 - [ ] Create a slider to control the above radius in km (1-1000, default 10) and on change, update the circle on the map and update number of places within the radius info shown accordingly ;
 - [ ] Extra features implemented:
 ;
#### Link to a Screencast Video (OneDriveDorset): https://dorsetdemo-my.sharepoint.com/:v:/g/personal/22711_student_dorset-college_ie/EQvDIRxeV_NOq1w2nlpAPLsBbOczYkbSZehim8Vl8OHmLA?e=5OxiWY

#### Report: A short report (300-1000 words) describing the challenges you faced, failed attempts and workarounds used, any helper or alternative libraries you have used, and what you have learned in the process.
##REPORT

For this project, the main task is to create a map that show places of importance for irish literature around the world.
The choosen plataform for realize this project is React Native, is my first time using this framework, based on java script.
To see each part working properly, I used expo go by running the command 'npx expo start' and opening the project in my own device.
React native offers a sleek, fluid, and responsive user experience while drastically cutting down on load times.
Also enables programmers to develop apps far more quickly and economically than they could with native development, all without sacrificing functionality or quality.
The open-source UI software framework React Native was developed by Meta Platforms, Inc. It enables developers to use the React framework along with
 native platform features to create applications for Android, Android TV, iOS, macOS, tvOS, Web, Windows, and UWP.
If you have an iphone you can dowloand the "Expo Go" app and visualize changes you doing 
on your code by running:$ npx expo start and scaning the QR code with your phone and opening it with the expo go, but remember you have to be in the same network to do it (Iphone and pc).
The biggest challeges for the project where fix a bug without creating other ten, 


API's used:
- https://gist.githubusercontent.com/saravanabalagi/541a511eb71c366e0bf3eecbee2dab0a/raw/ (for places)bb1529d2e5b71fd06760cb030d6e15d6d56c34b3/places.json
- https://gist.githubusercontent.com/saravanabalagi/541a511eb71c366e0bf3eecbee2dab0a/raw/bb1529d2e5b71fd06760cb030d6e15d6d56c34b3/place_types.json (for places type)

#### References: If you have used (in part or fully) any code from the internet (e.g. stackoverflow, github, youtube, blogs).

- Bergmann, F. (2022). Google Maps and Directions API on React Native. YouTube. Available at: https://www.youtube.com/watch?v=Wq3dO05jv6o [Accessed 20 Nov. 2022].<br />
- Expo Documentation. (2022). MapView - Expo Documentation. [online] Available at: https://docs.expo.dev/versions/latest/sdk/map-view/ [Accessed 20 Nov. 2022]. <br />
- Expo Documentation. (2020). Common questions. [online] Available at: https://docs.expo.dev/introduction/faq/ [Accessed 3 Jan. 2023].<br />
- Google.com. (2022). Google Cloud console. [online] Available at: https://console.cloud.google.com/apis/library?project=mobileapp2-364021 [Accessed 21 Nov. 2022]. <br />
- npm. (2022). react-native-google-places-autocomplete. [online] Available at: https://www.npmjs.com/package/react-native-google-places-autocomplete [Accessed 23 Nov. 2022].<br />
- npm. (2022). react-native-maps-directions. [online] Available at: https://www.npmjs.com/package/react-native-maps-directions [Accessed 29 Nov. 2022]. <br />
- Reactnative.dev. (2022). Using TypeScript · React Native. [online] Available at: https://reactnative.dev/docs/typescript#adding-typescript-to-an-existing-project [Accessed 24 Nov. 2022].<br />


‌
