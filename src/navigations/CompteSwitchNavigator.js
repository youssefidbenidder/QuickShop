import {createAppContainer, createSwitchNavigator} from "react-navigation";
import ConnectionMiddle from "../screens/compteScreens/ConnectionMiddle";
import Connection from "../screens/compteScreens/Connection";
import EditProfile from "../screens/compteScreens/EditProfile";
import Compte from "../screens/compteScreens/Compte";

const CompteSwitchNavigator =  createSwitchNavigator({
    AuthLoading : ConnectionMiddle,
    ConnectionNavigator : Connection,
    CompteNavigator : EditProfile
    },
{
initialRouteName : 'AuthLoading'
}
);

const CompteSwitchNavigatorContainer = createAppContainer(CompteSwitchNavigator);

export default CompteSwitchNavigatorContainer;
    
