import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings196215Navigator from '../features/Settings196215/navigator';
import UserProfile196208Navigator from '../features/UserProfile196208/navigator';
import Settings196207Navigator from '../features/Settings196207/navigator';
import Settings196205Navigator from '../features/Settings196205/navigator';
import SignIn2196203Navigator from '../features/SignIn2196203/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings196215: { screen: Settings196215Navigator },
UserProfile196208: { screen: UserProfile196208Navigator },
Settings196207: { screen: Settings196207Navigator },
Settings196205: { screen: Settings196205Navigator },
SignIn2196203: { screen: SignIn2196203Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
