import {
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import Tasks from "./components/Tasks";
import "./app.d";
import {useId, useState} from "react";

export default function App() {
    const [tasks, setTasks] = useState<string[]>([]);
    const [input, setInput] = useState('');
    const handleAddTask = () => {
        setTasks([...tasks, input]);
        setInput('');
    }
    const id = useId()
    return (
        <SafeAreaView className="flex-1 bg-blue-400">
            <Text className=" pt-8 px-4 font-bold text-2xl">Today Tasks</Text>
            <ScrollView
                className="pt-4 px-4"
                ref={ref => this.scrollView = ref}
                onContentSizeChange={(contentWidth, contentHeight) => {
                    this.scrollView.scrollToEnd({animated: true});
                }}>
                <View className="mt-8">
                    {tasks.map((task, i) => (
                        <Tasks key={id + i} task={task}/>
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

