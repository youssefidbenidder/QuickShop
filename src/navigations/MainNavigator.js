import {createAppContainer, createBottomTabNavigator, createStackNavigator,} from "react-navigation";
import Compte from "../screens/compteScreens/Compte";
import {Icon} from "react-native-elements";
import React from "react";
import CompteSwitchNavigatorContainer from "./CompteSwitchNavigator";
import EditProfile from "../screens/compteScreens/EditProfile";
import Inscription from "../screens/compteScreens/Inscription";
import Login from "../screens/compteScreens/Login";
import InscriptionCheckEmail from "../screens/compteScreens/InscriptionCheckEmail";
import StackNavigator from "./HomeNavigator";
import ResetPasword from "../screens/compteScreens/ResetPasword";
import AdresseLivraison from "../screens/adresseScreens/AdresseLivraison";
import AddressFormScreen from "../screens/adresseScreens/AddressForm";
import SearchScreen from "../screens/SearchScreen";

const TabNavigator = createBottomTabNavigator(
    {
        Accueil: StackNavigator,
        Recherche: SearchScreen,
        Compte: CompteSwitchNavigatorContainer,
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            tabBarIcon: ({focused, horizontal, tintColor}) => {
                const {routeName} = navigation.state;
                let iconName;
                if (routeName === 'Accueil') {
                    iconName = 'home';
                } else if (routeName === 'Recherche') {
                    iconName = 'search';
                } else if (routeName === 'Compte') {
                    iconName = 'person';
                }
                return <Icon name={iconName} size={25} color={tintColor}/>;

            },
        }),
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'black',
            style: {
                backgroundColor: "#eaf4f0",
                borderTopWidth: 0,
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 3,
                },
                shadowOpacity: 0.31,
                shadowRadius: 4.11,
                elevation: 6,
            }
        },
    }
);


const stackNavigator = createStackNavigator({
        TabNavigator: {
            screen: TabNavigator,
            navigationOptions: {
                header: null,
            }
        },
        EditProfile: {
            screen: EditProfile,
            navigationOptions: {
                headerStyle: {
                    backgroundColor: "#000",
                },
                headerTitle: "Edit Compte",
                headerTitleStyle: {
                    color: "#fff",
                    fontSize: 16,
                    fontWeight: "normal"
                },
                headerTintColor: "#fff",
                headerRightStyle: {backgroundColor: '#fff'}
            }
        },
        AjouteAdresse: {
            screen: AddressFormScreen,
            navigationOptions: {
                headerStyle: {
                    backgroundColor: "#000",
                },
                headerTitle: "Ajouter / Modifier une adresse",
                headerTitleStyle: {
                    color: "#fff",
                    fontSize: 16,
                    fontWeight: "normal"
                },
                headerTintColor: "#fff",
                headerRightStyle: {backgroundColor: '#fff'}
            }
        },

        AdresseLivraison: {
            screen: AdresseLivraison,
            navigationOptions: {
                headerStyle: {
                    backgroundColor: "#000",
                },
                headerTitle: "Ajouter / Modifier une adresse",
                headerTitleStyle: {
                    color: "#fff",
                    fontSize: 16,
                    fontWeight: "normal"
                },
                headerTintColor: "#fff",
                headerRightStyle: {backgroundColor: '#fff'}
            }
        },
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
        }, ResetPassword: {
            screen: ResetPasword,
            navigationOptions: {
                title: 'Mot de pass oublié',
                headerStyle: {
                    backgroundColor: '#000',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    color: "#fff",
                    fontSize: 16,
                    fontWeight: "normal"
                },
            }

        },
        Drawer: StackNavigator,
    }
    , {
        initialRouteName: 'TabNavigator'
    }
);

const StackNavigatorContainer = createAppContainer(stackNavigator);
export default StackNavigatorContainer;