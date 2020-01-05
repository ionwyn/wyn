import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';

import { colors, fonts } from '../../styles';
import { ENTRIES1 } from '../../../static_db_data/entries';

const chartIcon = require('../../../assets/images/pages/chart.png');
const calendarIcon = require('../../../assets/images/pages/calendar.png');
const chatIcon = require('../../../assets/images/pages/chat.png');
const galleryIcon = require('../../../assets/images/pages/gallery.png');
const profileIcon = require('../../../assets/images/pages/profile.png');

export default function PagesScreen(props) {
  _renderItem = ({ item, index }) => {
    return (
      <View style={styles.slide}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    );
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
      <Carousel
        ref={c => {
          this._carousel = c;
        }}
        data={ENTRIES1}
        renderItem={this._renderItem}
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: 10,
  },
  row: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginTop: 10,
  },
  item: {
    flex: 1,
    height: 120,
    paddingVertical: 20,
    borderColor: colors.primaryLight,
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginHorizontal: 5,
  },
  itemText: {
    color: colors.primary,
    fontFamily: fonts.primary,
  },
  itemImage: {
    height: 35,
  },
});
