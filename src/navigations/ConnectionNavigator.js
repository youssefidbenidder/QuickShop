import {createStackNavigator , createAppContainer} from "react-navigation";
import Inscription from "../screens/compteScreens/Inscription";
import Login from "../screens/compteScreens/Login";
import InscriptionCheckEmail from "../screens/compteScreens/InscriptionCheckEmail";

const ConnectionNavigator = createStackNavigator({
        Inscription: {
            screen: Inscription,
            navigationOptions: {
                header: null,
            }
        },
        Login: {
            screen: Login,
            navigationOptions: {
                header: null
            }
        },
        InscriptionCheckEmail: {
            screen: InscriptionCheckEmail,
            navigationOptions: {
                header: null,
            }
        },
    },
);

const  ConnectionNavigatorContainer = createAppContainer(ConnectionNavigator);
export default ConnectionNavigatorContainer ;
