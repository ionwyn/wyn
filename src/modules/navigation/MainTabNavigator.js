/* eslint-disable import/no-unresolved */
import React from 'react';
import { Image, View, StyleSheet, Text } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';

import { colors, fonts } from '../../styles';

import HomeScreen from '../home/HomeViewContainer';
import CalendarScreen from '../calendar/CalendarViewContainer';
import GridsScreen from '../grids/GridsViewContainer';
import PagesScreen from '../pages/PagesViewContainer';
import MilestonesScreen from '../milestones/MilestonesView';

import ComponentsScreen from '../components/ComponentsViewContainer';

import Icon from '../../styles/icons';

const hederBackground = require('../../../assets/images/topBarBg.png');

const styles = StyleSheet.create({
  tabBarItemContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 2,
    paddingHorizontal: 10,
    paddingTop: 7,
  },
  tabBarIcon: {
    width: 23,
    height: 23,
  },
  tabBarIconFocused: {
    tintColor: colors.primary,
  },
  headerContainer: {
    height: 70,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 10,
  },
  headerImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: 70,
    resizeMode: 'cover',
  },
  headerCaption: {
    fontFamily: fonts.primaryRegular,
    color: colors.white,
    fontSize: 18,
  },
});

export default createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        header: null,
      },
    },
    Calendar: {
      screen: CalendarScreen,
      navigationOptions: {
        header: (
          <View style={styles.headerContainer}>
            <Image style={styles.headerImage} source={hederBackground} />
            <Text style={styles.headerCaption}>Calendar</Text>
          </View>
        ),
      },
    },
    // Grids: {
    //   screen: GridsScreen,
    //   navigationOptions: {
    //     header: (
    //       <View style={styles.headerContainer}>
    //         <Image style={styles.headerImage} source={hederBackground} />
    //         <Text style={styles.headerCaption}>Grids</Text>
    //       </View>
    //     ),
    //   },
    // },
    Pages: {
      screen: PagesScreen,
      navigationOptions: {
        header: (
          <View style={styles.headerContainer}>
            <Image style={styles.headerImage} source={hederBackground} />
            <Text style={styles.headerCaption}>Pages</Text>
          </View>
        ),
      },
    },
    Milestones: {
      screen: MilestonesScreen,
      navigationOptions: {
        header: (
          <View style={styles.headerContainer}>
            <Image style={styles.headerImage} source={hederBackground} />
            <Text style={styles.headerCaption}>Milestones</Text>
          </View>
        ),
      },
    },
    // Components: {
    //   screen: ComponentsScreen,
    //   navigationOptions: {
    //     header: (
    //       <View style={styles.headerContainer}>
    //         <Image style={styles.headerImage} source={hederBackground} />
    //         <Text style={styles.headerCaption}>Components</Text>
    //       </View>
    //     ),
    //   },
    // },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      // eslint-disable-next-line react/prop-types
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconSource;
        switch (routeName) {
          case 'Home':
            iconSource = 'ios-home';
            break;
          case 'Calendar':
            iconSource = 'ios-calendar';
            break;
          // case 'Grids':
          //   iconSource = iconGrids;
          //   break;
          case 'Pages':
            iconSource = 'ios-albums';
            break;
          // case 'Components':
          //   iconSource = iconComponents;
          //   break;
          default:
            iconSource = 'ios-film';
        }
        return (
          <View style={styles.tabBarItemContainer}>
            <Icon.Ionicons name={iconSource} size={30} color={colors.grey} />
          </View>
        );
      },
    }),
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: false,
    tabBarOptions: {
      style: {
        backgroundColor: '#000000',
        borderTopWidth: 0.2,
        borderTopColor: '#4d4d4d',
      },
      labelStyle: {
        color: colors.grey,
      },
    },
  }
);
