import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import SliderEntry from '../../components/SliderEntry';
import { sliderWidth, itemWidth } from '../../components/SliderEntry.style.js';
import { scrollInterpolators, animatedStyles } from '../../utils/animations';
import Icon from '../../styles/icons';
import Timeline from 'react-native-timeline-flatlist';

import { colors, fonts } from '../../styles';
import { ENTRIES1, ENTRIES2 } from '../../../static_db_data/entries';

const chartIcon = require('../../../assets/images/pages/chart.png');
const calendarIcon = require('../../../assets/images/pages/calendar.png');
const chatIcon = require('../../../assets/images/pages/chat.png');
const galleryIcon = require('../../../assets/images/pages/gallery.png');
const profileIcon = require('../../../assets/images/pages/profile.png');
const isTinder = true;

export default function MilestonesScreen(props) {
  this.data = [
    { time: '09:00', title: 'Event 1', description: 'Event 1 Description' },
    { time: '10:45', title: 'Event 2', description: 'Event 2 Description' },
    { time: '12:00', title: 'Event 3', description: 'Event 3 Description' },
    { time: '14:00', title: 'Event 4', description: 'Event 4 Description' },
    { time: '16:30', title: 'Event 5', description: 'Event 5 Description' },
  ];
  return (
    <View style={styles.container}>
      <Timeline data={this.data} innerCircle={'dot'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: 40,
    paddingVertical: 30,
  },
});
