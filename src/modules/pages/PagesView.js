import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import SliderEntry from '../../components/SliderEntry';
import { sliderWidth, itemWidth } from '../../components/SliderEntry.style.js';
import { scrollInterpolators, animatedStyles } from '../../utils/animations';
import Icon from '../../styles/icons';

import { colors, fonts } from '../../styles';
import { ENTRIES1, ENTRIES2 } from '../../../static_db_data/entries';

const chartIcon = require('../../../assets/images/pages/chart.png');
const calendarIcon = require('../../../assets/images/pages/calendar.png');
const chatIcon = require('../../../assets/images/pages/chat.png');
const galleryIcon = require('../../../assets/images/pages/gallery.png');
const profileIcon = require('../../../assets/images/pages/profile.png');
const isTinder = true;

export default function PagesScreen(props) {
  _renderItem = ({ item, index }) => {
    return <SliderEntry data={item} even={(index + 1) % 2 === 0} />;
  };

  _renderItemWithParallax = ({ item, index }, parallaxProps) => {
    return (
      <SliderEntry
        data={item}
        even={(index + 1) % 2 === 0}
        parallax={true}
        parallaxProps={parallaxProps}
      />
    );
  };

  _renderDarkItem = ({ item, index }) => {
    return <SliderEntry data={item} even={true} />;
  };

  return (
    /*
          <TouchableOpacity
        onPress={() => props.navigation.navigate({ routeName: 'Charts' })}
        style={styles.item}
      >
        <Image
          resizeMode="contain"
          source={chartIcon}
          style={styles.itemImage}
        />
        <Text style={styles.itemText}>Charts</Text>
      </TouchableOpacity>
    */
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity
          // onPress={() => props.navigation.navigate({ routeName: 'Gallery' })}
          style={styles.item}
        >
          <Icon.Ionicons name="ios-book" size={30} color={colors.white} />
          <Text style={styles.itemText}>Reading List</Text>
        </TouchableOpacity>
        <TouchableOpacity
          // onPress={() => props.navigation.navigate({ routeName: 'Profile' })}
          style={styles.item}
        >
          <Icon.Ionicons name="ios-film" size={30} color={colors.white} />
          <Text style={styles.itemText}>Photography</Text>
        </TouchableOpacity>
        <TouchableOpacity
          // onPress={() => props.navigation.navigate({ routeName: 'Profile' })}
          style={styles.item}
        >
          <Icon.Ionicons name="ios-clipboard" size={30} color={colors.white} />
          <Text style={styles.itemText}>Goals</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          // onPress={() => props.navigation.navigate({ routeName: 'Gallery' })}
          style={styles.item}
        >
          <Icon.Ionicons
            name="ios-musical-notes"
            size={30}
            color={colors.white}
          />
          <Text style={styles.itemText}>Music Projects</Text>
        </TouchableOpacity>
        <TouchableOpacity
          // onPress={() => props.navigation.navigate({ routeName: 'Profile' })}
          style={styles.item}
        >
          <Icon.Entypo name="news" size={30} color={colors.white} />
          <Text style={styles.itemText}>News</Text>
        </TouchableOpacity>
        <TouchableOpacity
          // onPress={() => props.navigation.navigate({ routeName: 'Profile' })}
          style={styles.item}
        >
          <Icon.Ionicons name="ios-today" size={30} color={colors.white} />
          <Text style={styles.itemText}>Today</Text>
        </TouchableOpacity>
      </View>
      <Carousel
        data={ENTRIES2}
        renderItem={this._renderDarkItem}
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
        containerCustomStyle={styles.slider}
        contentContainerCustomStyle={styles.sliderContentContainer}
        scrollInterpolator={scrollInterpolators[`scrollInterpolator3`]}
        slideInterpolatedStyle={animatedStyles[`animatedStyles3`]}
        useScrollView={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    paddingTop: 40,
    paddingVertical: 30,
  },
  row: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginTop: 10,
  },
  sliderContentContainer: {
    paddingVertical: 10, // for custom animation
  },
  slider: {
    marginTop: 15,
    overflow: 'visible', // for custom animations
  },
  item: {
    flex: 1,
    height: 120,
    paddingVertical: 20,
    backgroundColor: colors.greydarkest,
    borderColor: colors.greydarkest,
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginHorizontal: 5,
  },
  itemText: {
    color: colors.white,
    fontFamily: fonts.primaryBold,
  },
  itemImage: {
    height: 35,
  },
});
