import { StyleSheet } from "react-native";
import Screen from "../layout/Screen";
import ModuleView from "../entity/modules/ModuleView";

const ModuleViewScreen = ({ navigation, route }) => {
  // Installations....
  const { module, onDelete, onModify } = route.params;

  // State....
  // Handlers...
  //const gotoModifyScreen = () =>
  //     navigation.navigate("ModuleModifyScreen", { module, onModify }); stratrgy0

  const gotoModifyScreen = () =>
    navigation.replace("ModuleModifyScreen", { module, onModify }); //strategy2b

  // View...
  return (
    <Screen>
      <ModuleView
        module={module}
        onDelete={onDelete}
        onModify={gotoModifyScreen}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default ModuleViewScreen;
