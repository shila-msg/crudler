import { StyleSheet } from "react-native";
import Screen from "../layout/Screen";
import ModuleList from "../entity/modules/ModuleList.js";

import initialModules from "../../data/modules.js";

const ModuleListScreen = () => {
  // Installations....
  const modules = initialModules;

  // State....
  // Handlers...
  const handleSelect = (module) => alert(`Item ${module.ModuleCode} selected`);

  // View...
  return (
    <Screen>
      <ModuleList modules={modules} onSelect={handleSelect} />
    </Screen>
  );
};

const styles = StyleSheet.create({
  contaoiner: {},
});

export default ModuleListScreen;
