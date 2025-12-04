import { useState } from "react";
import { LogBox, StyleSheet } from "react-native";
import Screen from "../layout/Screen";
import Icons from "../UI/Icons.js";
import { Button, ButtonTray } from "../UI/Button.js";
import ModuleList from "../entity/modules/ModuleList.js";
import RenderCount from "../UI/RenderCount.js";

import initialModules from "../../data/modules.js";

const ModuleListScreen = ({ navigation }) => {
  // Installations....
  LogBox.ignoreLogs([
    "Non-serializable values were found in the navigation state",
  ]);

  // State....
  const [modules, setModules] = useState(initialModules);

  // Handlers...
  const handleDelete = (module) =>
    setModules(modules.filter((item) => item.ModuleID !== module.ModuleID));

  const handleAdd = (module) => setModules([...modules, module]);

  /*const handleModify = (updatedModule) =>
    setModules(
      modules.map((module) =>
        module.ModuleID === updatedModule.ModuleID ? updatedModule : module
      )
    );*/

  const onDelete = (module) => {
    handleDelete(module);
    navigation.goBack();
  };
  const onAdd = (module) => {
    handleAdd(module);
    navigation.goBack();
  };

  /*const onModify = (module) => {
    handleModify(module);
    navigation.navigate("ModuleListScreen");
  };*/

  const goToViewScreen = (module) =>
    navigation.navigate("ModuleViewScreen", { module, onDelete /*onModify*/ });

  const goToAddScreen = () => navigation.navigate("ModuleAddScreen", { onAdd });
  // View...
  return (
    <Screen>
      <ButtonTray>
        <Button label="Add" icon={<Icons.Add />} onClick={goToAddScreen} />
      </ButtonTray>
      <RenderCount />
      <ModuleList modules={modules} onSelect={goToViewScreen} />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default ModuleListScreen;
