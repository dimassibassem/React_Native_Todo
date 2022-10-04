import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from "react-native";

const Tasks: React.FC<{ task: string }> = ({task}) => {
    const [isDone, setIsDone] = useState(false);
    return (
        <View
            className="bg-green-50 rounded-tl-3xl rounded-br-3xl rounded-tr-3xl p-6 flex-row items-center mb-6 justify-between">
            <View className="flex-row items-center flex-wrap ">
                <TouchableOpacity style={styles.square}></TouchableOpacity>
                <Text className="max-w-[80%]">{task}</Text>
            </View>
            <TouchableOpacity onPress={() => setIsDone(!isDone)}>
                {isDone ? (
                    <View className="bg-green-400 rounded-full p-2  items-center justify-center">
                        <Text className="text-black text-md">✓ Completed</Text>
                    </View>
                ) : (
                    <View className="bg-red-400 rounded-full p-2 items-center justify-center">
                        <Text className="text-black text-md">✗ Not Yet</Text>
                    </View>
                )}
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({

    square: {
        width: 24,
        height: 24,
        backgroundColor: '#55BCF6',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },
    circular: {
        width: 12,
        height: 12,
        borderColor: '#55BCF6',
        borderWidth: 2,
        borderRadius: 5,
    }
});

export default Tasks;
