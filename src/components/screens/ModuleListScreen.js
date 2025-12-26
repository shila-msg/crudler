import {
  LogBox,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Alert,
} from "react-native";
import API from "../API/API.js";
import useLoad from "../API/useLoad.js";
import useStore from "../store/useStore.js";
import Screen from "../layout/Screen";
import Icons from "../UI/Icons.js";
import { Button, ButtonTray } from "../UI/Button.js";
import ModuleList from "../entity/modules/ModuleList.js";
import RenderCount from "../UI/RenderCount.js";
import initialModules from "../../data/modules.js";

// Installations....
const ModuleListScreen = ({ navigation }) => {
  LogBox.ignoreLogs([
    "Non-serializable values were found in the navigation state",
  ]);
  const loggedinUserKey = "loggedinUser";
  const modulesEndpoint = "https://softwarehub.uk/unibase/api/modules";

  // State....
  const [modules, , isLoading, loadModules] = useLoad(modulesEndpoint);
  const [loggedinUser, saveLoggedinUser] = useStore(loggedinUserKey, null);
  // Handlers...

  const onAdd = async (module) => {
    const result = await API.post(modulesEndpoint, module);
    if (result.isSuccess) {
      loadModules(modulesEndpoint);
      navigation.goBack();
    } else Alert.alert(result.message);
  };

  const onModify = async (module) => {
    const putEndpoint = `${modulesEndpoint}/${module.ModuleID}`;
    const result = await API.put(putEndpoint, module);
    if (result.isSuccess) {
      loadModules(modulesEndpoint);
      navigation.navigate("ModuleViewScreen", { module, onDelete, onModify }); //strategy2b
    } else Alert.alert(result.message);
  };

  // navigation.replace("ModuleViewScreen", { module, onDelete, onModify }); //strategy2a

  const onDelete = async (module) => {
    const deleteEndpoint = `${modulesEndpoint}/${module.ModuleID}`;
    const result = await API.delete(deleteEndpoint, module);
    if (result.isSuccess) {
      loadModules(modulesEndpoint);
      navigation.goBack();
    } else Alert.alert(result.message);
  };

  const gotoAddScreen = () => navigation.navigate("ModuleAddScreen", { onAdd });
  const gotoViewScreen = (module) =>
    navigation.navigate("ModuleViewScreen", { module, onDelete, onModify });

  //View...
  return (
    <Screen>
      <RenderCount />
      {loggedinUser && (
        <Text style={styles.welcome}>Welcome {loggedinUser.UserFirstname}</Text>
      )}

      <View style={styles.container}>
        <ButtonTray>
          <Button
            label="Add Module"
            icon={<Icons.Add />}
            onClick={gotoAddScreen}
          />
        </ButtonTray>
        {isLoading && (
          <View style={styles.loading}>
            <Text>
              Retrieving records from
              {modulesEndpoint}...
            </Text>
            <ActivityIndicator size="large" />
          </View>
        )}

        <ModuleList modules={modules} onSelect={gotoViewScreen} />
      </View>
    </Screen>
  );
};
const styles = StyleSheet.create({
  welcome: {
    marginTop: 5,
    marginBottom: 5,
  },
  container: { gap: 15 },
  loading: {
    height: "100",
    gap: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ModuleListScreen;
