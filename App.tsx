import {Text, View} from 'react-native';
import Tasks from "./components/Tasks";
import "./app.d";

export default function App() {
    return (
        <View className="flex-1 bg-red-500">
            <View className="pt-16 px-4">
                <Text className="font-bold text-2xl">Today Tasks</Text>
                <View className="mt-8">
                    <Tasks task={"task1"}/>
                    <Tasks task={"task2"}/>
                    <Tasks task={"task3"}/>
                </View>
            </View>

        </View>
    );
}

