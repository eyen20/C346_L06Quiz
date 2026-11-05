import React from 'react';
import {View, Text, Image} from 'react-native';
import {FontAwesome6} from '@expo/vector-icons';
import {Picker} from "@react-native-picker/picker";

// Ex1: User-defined component Boat with properties
const VideoGames = ({question, icon_name, icon_color, poster}) => {
    return (
        <View>
            <Text style={{ fontSize: 10, fontWeight: 'bold', color: 'black' }}>
                <FontAwesome6 name={icon_name} size={25} color={icon_color}/>
                {question}
            </Text>
            <Image source={poster} style={{width:400, height:400}} />
            <Text></Text>
        </View>
    );
};

export default VideoGames;