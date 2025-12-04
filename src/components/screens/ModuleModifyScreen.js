import { StyleSheet, Text } from "react-native";
import Screen from "../layout/Screen";
import ModuleForm from "../entity/modules/ModuleForm.js";
const ModuleModifyScreen = ({ navigation, route }) => {
  // Installations....
  const { module, onModify } = route.params;

  // State....
  // Handlers...
  const handleCancel = () => navigation.navigate.goBack;

  // View...
  return (
    <Screen>
      <ModuleForm
        originalModule={module}
        onSubmit={onModify}
        onCancel={handleCancel}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default ModuleModifyScreen;
