import React from 'react';
import {View, Text, Image} from 'react-native';
import {FontAwesome6} from '@expo/vector-icons';

const VideoGames = ({question, icon_name, icon_color, poster}) => {
    return (
        <View>
            <Text></Text>
            <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black' }}>
                <FontAwesome6 name={icon_name} size={25} color={icon_color}/>
                {question}
            </Text>
            <Image source={poster} style={{width:300, height:300, alignSelf: 'center'}} />
            <Text></Text>
        </View>
    );
};

export default VideoGames;