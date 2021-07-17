import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    FlatList,
    ScrollView,
} from 'react-native';



class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
            usersWp: [
                {
                    id: 1,
                    name: "Tugba Ozkan",
                    imageUrl: "https://i.sozcu.com.tr/wp-content/uploads/2019/04/23/iecrop/wonder-woman-3-modern_16_9_1556031324.jpg",
                    message: "I don't know.",
                    time: "    10 pm"
                },
                {
                    id: 2,
                    name: "Lorem Ipsum",
                    imageUrl: "https://i.sozcu.com.tr/wp-content/uploads/2019/04/23/iecrop/wonder-woman-3-modern_16_9_1556031324.jpg",
                    message: "Good morning",
                    time: "Yesterday"
                },
                {
                    id: 3,
                    name: "Unknown",
                    imageUrl: "https://i.sozcu.com.tr/wp-content/uploads/2019/04/23/iecrop/wonder-woman-3-modern_16_9_1556031324.jpg",
                    message: "Where are you ?",
                    time: "Yesterday"
                },
                {
                    id: 4,
                    name: "Mom",
                    imageUrl: "https://i.sozcu.com.tr/wp-content/uploads/2019/04/23/iecrop/wonder-woman-3-modern_16_9_1556031324.jpg",
                    message: "Hi",
                    time: "  Friday"
                },

            ]

        };
    }
    __getCompletedIcon = (item) => {
        if(item.time == "Yesterday") {

          return (
            <Image style={{
                marginLeft: 15,
                marginRight: 5,
                width: 14,
                height: 14,
                marginTop: 7,
            }}
                source={{ uri: "https://img.icons8.com/small/14/000000/double-tick.png"}} />
          );
          
          
          
        } else {
          return <View

            style={{
                width: 20
            }}
          />;
        }
      }

    
    





    render() {
        return (
            <View
                style={{

                    alignItems: 'flex-start',
                    flexDirection: "column",
                    justifyContent: 'flex-start',
                    marginLeft: 20


                }}
            >
                <ScrollView

                >
                    {this.state.usersWp.map(item => (
                        <View key={item.id.toString()}
                            style={{
                                paddingBottom: 30,
                                paddingTop: 20,
                                flexDirection: 'row',
                                justifyContent: 'flex-start',


                            }}
                        >
                            <Image source={{ uri: item.imageUrl }}
                                style={{
                                    borderRadius: 25,
                                    width: 50,
                                    height: 50,
                                }}
                            />
                            <View
                                style={{
                                    flexDirection: "column",

                                    width: "82%"
                                }}>
                                <Text
                                    style={{
                                        fontSize: 17,
                                        fontWeight: 'bold',

                                        textAlign: 'left',
                                        paddingLeft: 12

                                    }}
                                > {item.name}</Text>
                                <View
                                    style={{
                                        flexDirection: "row"
                                    }}
                                >
                                    
                                            {this.__getCompletedIcon(item)}
                                    <Text
                                        style={{
                                            color: '#877b7b',
                                            fontSize: 15,
                                            marginTop: 7,
                                            fontWeight: 'bold',
                                           


                                        }}

                                    >


                                        {item.message}</Text>
                                </View>
                                <View
                                    style={{
                                        backgroundColor: '#877b7b3c',
                                        height: 1,
                                        flex: 1,
                                        marginTop: 15,
                                        marginLeft: 17,

                                    }}
                                />

                            </View>
                            <Text
                                style={{

                                    textAlign: 'center',
                                    marginLeft: -65,
                                    textTransform: 'uppercase',
                                    color: '#877b7b',
                                    fontWeight: 'bold',
                                    fontSize: 13
                                }}
                            > {item.time}</Text>

                        </View>
                    )

                    )}
                </ScrollView>
            </View>

        );
    }

}
export { UserList };
