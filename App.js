import React, {useState} from 'react';
import {View, Text, TextInput, Button, Alert, TouchableOpacity, ToastAndroid} from 'react-native';
import {Picker} from "@react-native-picker/picker";

//Create custom component InputBox for TextInputs with Labels

const InputBox = ({label, onChangeText}) => {
    return (
        <View>
            <Text>{label}</Text>
            <TextInput style = {{borderWidth: 1}} onChangeText={onChangeText}/>
        </View>
    );
};

const MyApp = () => {
    // Declare variables
    const [type, setType] = useState('');
    const [name, setName] = useState('');
    const [pw, setPw] = useState('');

    return (
        <View>
            <Text></Text>
            {/* Ex1G: Create a TextInput labelled as "User Name".
            {/* Ex1B: Add a Picker that is labelled "User Type:" with 2 options Admin and Guest. */}
            <Text>User Type:</Text>
            <Picker onValueChange={(value) => setType(value)} style={{backgroundColor: 'darkgrey'}}>
                <Picker.Item label="Admin" value="Admin"/>
                <Picker.Item label="Guest" value="Guest"/>
            </Picker>
            {/*<TextInput style={{borderWidth: 1}} onChangeText={(name) => setUserName(name)}></TextInput>*/}
            <InputBox label={"User Name:"} onChangeText={(text) => setName(text)}></InputBox>
            {/* Ex1A:  Display the text "Password:" with a simple TextInput underneath */}
            {/*<TextInput style={{borderWidth: 1}} onChangeText={(text) => setPw(text)} secureTextEntry={true}/>*/}
            <InputBox label={"Password:"} onChangeText={(text) => setPw(text)} secureTextEntry={true}></InputBox>
            {/* Ex1C: Add a Button with the title "LOG IN".   */}
            {/*  <Button onPress={() => {Alert.alert("Welcome!")*/}
            {/*  }}*/}
            {/*          title={"LOG IN"}*/}
            {/*  />*/}
            {/* Ex1D: Display Alert message "Welcome!" when the LOG IN button pressed. */}
            <Text></Text>
            {/* Ex1E: Add TouchableOpacity labelled as "Alternative LOG IN" with Alert message "Hi hi!" */}
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
            <Text>Entered password: {pw}</Text>
            {/* Ex1F: change Alert message to Toast message */}
        </View>
    );
};
export default MyApp;
