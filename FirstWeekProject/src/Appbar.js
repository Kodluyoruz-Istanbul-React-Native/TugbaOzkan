import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


class Appbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View
        style={{
          flexDirection: "row",
          position: 'absolute',
          top: 0
        }} 
      >
        <View style={{
          backgroundColor: "#075E54",
          flex: 1,
          height: 80
        }} >
          <Text
            style={{
              color: "#ffffff",
              fontSize: 20,
              fontWeight: "bold",
              marginTop: 35,
              marginLeft: 20,
              fontFamily: 'Helvetica'
            }}
          >
            WhatsApp
            <View
              style={{
                width: 170
              }}
            />
            <Icon
              name="search"
              color="#ffffff"
              size={22}


            />
            <View

              style={{
                width: 20
              }}
            />
            <Icon
              name="chatbox"
              color="#ffffff" accessibilityElementsHidden
              size={22}
              style={{
                transform: [{ rotate: "45deg" }],
                position: 'absolute',



              }}

            />
            <View

              style={{
                width: 15
              }}
            />

            <Icon
              name="ellipsis-vertical-outline"
              color="#ffffff" accessibilityElementsHidden
              size={22}
           

            />
          </Text>


        </View>

      </View>

    );
  }
}

export { Appbar };
