import { StyleSheet, Text } from "react-native";
import Screen from "../layout/Screen";
import Icons from "../UI/Icons.js";
import { Button, ButtonTray } from "../UI/Button.js";

const defaultModule = {
  ModuleID: Math.floor(10000 + Math.random() * 9000),
  ModuleCode: "CI6330",
  ModuleName: "Mobile Application Development",
  moduleLevel: "6",
  ModuleLeaderID: "1",
  ModuleLeader: "Graeme JONES",
  ModuleImage:
    "https://images.freeimages.com/images/small-previews/cf5/cellphone-1313194.jpg",
};

const ModuleAddScreen = ({ navigation, route }) => {
  // Installations....
  const { onAdd } = route.params;

  // State....
  // Handlers...
  const handleAdd = () => onAdd(defaultModule);
  const handleCancel = navigation.goBack;
  // View...
  return (
    <Screen>
      <Text>Add</Text>
      <ButtonTray>
        <Button label="Add" icon={<Icons.Add />} onClick={handleAdd} />
        <Button label="Cancel" icon={<Icons.Add />} onClick={handleCancel} />
      </ButtonTray>
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default ModuleAddScreen;
