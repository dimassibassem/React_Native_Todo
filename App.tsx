import {
    Alert,
    KeyboardAvoidingView, Modal,
    Platform, Pressable,
    SafeAreaView,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import Tasks from "./components/Tasks";
import "./app.d";
import {useId, useRef, useState} from "react";

export default function App() {
    const [tasks, setTasks] = useState<string[]>([]);
    const [input, setInput] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [taskIndex, setTaskIndex] = useState(-1);

    const handleAddTask = () => {
        setTasks([...tasks, input]);
        setInput('');
    }
    const id = useId()
    const scrollViewRef = useRef()
    return (
        <SafeAreaView className="flex-1 bg-blue-400">
            <Text className=" pt-8 px-4 font-bold text-2xl">Today Tasks</Text>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}>
                <View className="flex-1 justify-center items-center mt-8">
                    <View className="m-8 bg-white rounded-xl p-12 items-center shadow-blue-900 shadow-2xl ">
                        <Text className="font-semibold items-center text-black mb-4">{tasks[taskIndex]}</Text>
                        <View className="flex-row ">
                            <Pressable
                                className="rounded-3xl p-3 bg-gray-400 m-1"
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <Text className="font-semibold items-center text-white ">Hide Modal</Text>
                            </Pressable>
                            <Pressable className="rounded-3xl p-3 bg-red-500 m-1"
                                       onPress={() => {
                                           setTasks(tasks.filter((task, index) => index !== taskIndex))
                                           setModalVisible(!modalVisible)
                                       }}>
                                <Text className="font-semibold items-center text-white ">Delete Task</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>
            <ScrollView
                className="pt-4 px-4"
                ref={scrollViewRef}
                onContentSizeChange={() => scrollViewRef.current.scrollToEnd({animated: true})}
            >
                <View className="mt-8">
                    {tasks.map((task, i) => (
                        <TouchableOpacity key={id + i}
                                          onLongPress={() => {
                                              setModalVisible(true)
                                              setTaskIndex(i)
                                          }}>
                            <Tasks task={task}/>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
                <View className="flex-row items-center justify-between p-4">
                    <TextInput
                        className="bg-white rounded-full p-2 w-4/5"
                        placeholder="Write a task"
                        value={input}
                        onChangeText={setInput}
                    />
                    <TouchableOpacity onPress={handleAddTask}>
                        <View className="bg-blue-400 rounded-full w-12 h-12 items-center justify-center">
                            <Text className="text-black text-2xl">+</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}


