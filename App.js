import React, {useState} from 'react';
import {Text, TextInput, Button, Alert, TouchableOpacity, ToastAndroid, ScrollView, View} from 'react-native';
import {Picker} from "@react-native-picker/picker";
import VideoGames from "./components/VideoGames";

//Create custom component InputBox for TextInputs with Labels

const InputBox = ({label, onChangeText}) => {
    return (
        <ScrollView>
            <Text>{label}</Text>
            <TextInput style = {{borderWidth: 1}} onChangeText={onChangeText}/>
        </ScrollView>
    );
};

const MyQuiz = () => {
    // Declare variables
    const [type, setType] = useState('');
    const [name, setName] = useState('');
    const [pw, setPw] = useState('');

    return (
        <ScrollView>
            <Text></Text>
            <Text style={{fontWeight: "bold", fontSize: 25, borderWidth: 1, borderRadius: 99, textAlign: "center", backgroundColor: "red"}}>
                Welcome to Video Games Quiz!</Text>
            <VideoGames question={"Question 1"}
            />
            <Picker onValueChange={(value) => setType(value)} style={{backgroundColor: 'darkgrey'}}>
                <Picker.Item label="Admin" value="Admin"/>
                <Picker.Item label="Guest" value="Guest"/>
            </Picker>
            {/*<TextInput style={{borderWidth: 1}} onChangeText={(name) => setUserName(name)}></TextInput>*/}
            <InputBox label={"User Name:"} onChangeText={(text) => setName(text)}></InputBox>
            {/*<TextInput style={{borderWidth: 1}} onChangeText={(text) => setPw(text)} secureTextEntry={true}/>*/}
            <InputBox label={"Password:"} onChangeText={(text) => setPw(text)} secureTextEntry={true}></InputBox>
            {/*  <Button onPress={() => {Alert.alert("Welcome!")*/}
            {/*  }}*/}
            {/*          title={"LOG IN"}*/}
            {/*  />*/}
            <Text></Text>
            {/*  <TouchableOpacity onPress={() => {Alert.alert("Welcome!")}}><Text>LOG IN</Text></TouchableOpacity>*/}
            <TouchableOpacity onPress={()=> {
                const correctPassword = '123';
                let mymessage = 'Error! Wrong Password!';
                if (pw == correctPassword) {
                    mymessage = 'Welcome ' + type + ' ' + name;
                }
                ToastAndroid.show(mymessage, ToastAndroid.SHORT);
            }
            }>
                <Text>LOG IN</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};
export default MyQuiz;
