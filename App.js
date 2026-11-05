import React, {useState} from 'react';
import {Text, Button, Alert, TouchableOpacity, ScrollView} from 'react-native';
import {Picker} from "@react-native-picker/picker";
import VideoGames from "./components/VideoGames";

const MyQuiz = () => {

    const [q1Answer, setq1Answer] = useState("");
    const [q2Answer, setq2Answer] = useState("");
    const [q3Answer, setq3Answer] = useState("");
    const [q4Answer, setq4Answer] = useState("");

    const correctAnswer1 = "Minecraft";
    const correctAnswer2 = "Roblox";
    const correctAnswer3 = "Terraria";
    const correctAnswer4 = "GTA V";

    const handleSubmit = () => {
        let score = 0;
        const totalQuestions = 4;
        let feedback = "";

        if (q1Answer === correctAnswer1) {score += 1}
        if (q2Answer === correctAnswer2) {score += 1}
        if (q3Answer === correctAnswer3) {score += 1}
        if (q4Answer === correctAnswer4) {score += 1}

        if (score === 4) {feedback = "POWER LAH!";}
        else if (score >= 2) {feedback = "Not bad leh.";}
        else {feedback = "Try harder next time uh.";}

        Alert.alert("Quiz Results", "You got " + score + " out of " + totalQuestions + " correct!\n\n" + feedback);
    }

    return (
        <ScrollView style={{backgroundColor: "yellow"}}>
            <Text></Text>
            <Text style={{fontWeight: "bold", fontSize: 25, borderWidth: 1, borderRadius: 99, textAlign: "center", backgroundColor: "red"}}>
                Welcome to Video Games Quiz!</Text>

            <VideoGames question={"Question 1"} icon_name={"cube"}
                        icon_color={"green"}
                        poster={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHRbby1R4IOaXaROETW-uWTzACI8_As8MOzYAocXBZ4R2jgXSyrbBYsnQI&s=10.jpg'}}
            />
            <Picker onValueChange={(value) => setq1Answer(value)} style={{backgroundColor: 'lightgreen'}}>
                <Picker.Item label="Select your answer..." value=""/>
                <Picker.Item label="Minecraft" value="Minecraft"/>
                <Picker.Item label="Resident Evil" value="ResidentEvil"/>
                <Picker.Item label="Roblox" value="Roblox"/>
            </Picker>
            <VideoGames question={"Question 2"} icon_name={"robot"}
                        icon_color={"grey"}
                        poster={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY5X28InWWfkC4YgkfF6KpenGuRXGEJuXeQAFz9FA7pg&s=10.jpg'}}
            />
            <Picker onValueChange={(value) => setq2Answer(value)} style={{backgroundColor: 'darkgrey'}}>
                <Picker.Item label="Select your answer..." value=""/>
                <Picker.Item label="GTA V" value="GTA V"/>
                <Picker.Item label="Pokemon Go" value="PokemonGo"/>
                <Picker.Item label="Roblox" value="Roblox"/>
            </Picker>
            <VideoGames question={"Question 3"} icon_name={"brain"}
                        icon_color={"red"}
                        poster={{ uri: 'https://terraria.wiki.gg/images/App_icon_Terraria%2B.png?1b1f80'}}
            />
            <Picker onValueChange={(value) => setq3Answer(value)} style={{backgroundColor: 'pink'}}>
                <Picker.Item label="Select your answer..." value=""/>
                <Picker.Item label="Terraria" value="Terraria"/>
                <Picker.Item label="Call of Duty" value="CallofDuty"/>
                <Picker.Item label="LastofUs" value="LastofUs"/>
            </Picker>
            <VideoGames question={"Question 4"} icon_name={"gun"}
                        icon_color={"black"}
                        poster={{ uri: 'https://images.ctfassets.net/h1rqp7q66d54/3yVDlCOrJnXMrb0yS4ea0y/d93ed97030eb7c233384e5a551aeaea7/GTAV_Gen9_MFT_Webstore_Hero_3840x2160_DELIV_opt__1_.jpg'}}
            />
            <Picker onValueChange={(value) => setq4Answer(value)} style={{backgroundColor: '#C4A484'}}>
                <Picker.Item label="Select your answer..." value=""/>
                <Picker.Item label="The Evil Within" value="TheEvilWithin"/>
                <Picker.Item label="GTA V" value="GTA V"/>
                <Picker.Item label="Valorant" value="Valorant"/>
            </Picker>
            <Button onPress={handleSubmit} title="Submit" />
            <Text></Text>
            <TouchableOpacity onPress={()=> {
                let mymessage =
                    "Q1: " + correctAnswer1 + "\n" +
                    "Q2: " + correctAnswer2 + "\n" +
                    "Q3: " + correctAnswer3 + "\n" +
                    "Q4: " + correctAnswer4;
                Alert.alert("Correct Answers", mymessage);
            }}>
                <Text>Show Answers</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};
export default MyQuiz;
