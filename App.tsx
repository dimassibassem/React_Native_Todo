import {StyleSheet, Text, View} from 'react-native';
import Tasks from "./components/Tasks";
import "./app.d";

export default function App() {
    return (
        <View className="flex-1 bg-red-500">
            <View style={styles.tasksWrapper}>
                <Text style={styles.sectionTitle}>Today Tasks</Text>
                <View style={styles.items}>
                    <Tasks task={"task1"}/>
                    <Tasks task={"task2"}/>
                    <Tasks task={"task3"}/>
                </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    tasksWrapper: {
        paddingTop: 80,
        paddingHorizontal: 20,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    items: {
        marginTop: 30,
    }
});
