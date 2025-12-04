import { ScrollView, StyleSheet } from "react-native";
import ModuleItem from "./ModuleItem.js";

const ModuleList = ({ modules, onSelect }) => {
  // Initialistaions....
  // State....
  // Handlers...
  // View.....
  return (
    <ScrollView style={styles.contaoiner}>
      {modules.map((module) => {
        return (
          <ModuleItem
            key={module.ModuleCode}
            module={module}
            onSelect={onSelect}
          />
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default ModuleList;
