import React, { Component } from 'react';
import { Button, View } from 'react-native';

class TextBar extends Component {
    constructor(props) {
        super(props);
    }
     
    render() {
        var enaktar = false ; 
        
        var texts = [
            {
                id: 1,
                text: "CALLS"
            },
            {
                id: 2,
                text: "CHATS"
            },
            {
                id: 3,
                text: "CONTACTS"
            },
        ];
        
        var buttonLists = [];

        buttonLists = texts.map(buttonInfo => {
            if(buttonInfo.text == "CHATS"){
                enaktar = true;
            }
            else{
                enaktar = false;
            }
            return (
            <View key={buttonInfo.id} 
            style={{
                marginRight :50,
                borderBottomColor: enaktar == true ? "white" :"#075E54" ,
                borderBottomWidth:5,
                
                
               
               
                
            }}
            >
           
            <Button  title= {buttonInfo.text} color= {enaktar == true ?  "#ffffff" : "#ffffff8c"}
            
            style = {{
                fontWeight: "bold",
            }}
            
            >
             
            </Button>
            </View>
            );
           
        }

        );

        return (
            <View

                style={{
                    flexDirection: "row",
                    alignItems:'center',
                    marginTop:80
              

                }} >
                <View
                    style={{
                        backgroundColor: "#075E54",
                        flex: 1,
                        height: 40,
                        
                        flexDirection: "row",
                        paddingLeft:25,
                        
                    }}

                >

                    {buttonLists}
                </View>
               

               



            </View>
            
            


        );
    }

}
export default TextBar;