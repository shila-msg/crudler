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
  const handleAdd = (newModule) => setModules([...modules, newModule]);
  const onAdd = (newModule) => {
    handleAdd(newModule);
    navigation.goBack();
  };

  const handleModify = (updatedModule) =>
    setModules(
      modules.map((module) =>
        module.ModuleID === updatedModule.ModuleID ? updatedModule : module
      )
    );
  const onModify = (module) => {
    handleModify(module);
    //navigation.navigate("ModuleListScreen"); strategy0
    //navigation.popToTop(); strategy1

    navigation.replace("ModuleViewScreen", { module, onDelete, onModify }); //strategy2a
  };

  const handleDelete = (targetModule) =>
    setModules(modules.filter((module) => item.ModuleID !== module.ModuleID));

  const onDelete = (targetModule) => {
    handleDelete(targetModule);
    navigation.goBack();
  };

  const gotoViewScreen = (module) =>
    navigation.navigate("ModuleViewScreen", { module, onDelete, onModify });

  const gotoAddScreen = () => navigation.navigate("ModuleAddScreen", { onAdd });
  // View...
  return (
    <Screen>
      <ButtonTray>
        <Button
          label="Add Modules"
          icon={<Icons.Add />}
          onClick={gotoAddScreen}
        />
      </ButtonTray>
      <RenderCount />
      <ModuleList modules={modules} onSelect={gotoViewScreen} />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default ModuleListScreen;
