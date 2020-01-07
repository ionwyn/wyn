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
    {
      time: 'Jan 1',
      title: 'Knife throwing',
      description: 'First place in accuracy',
    },
    {
      time: 'Jan 3',
      title: 'Data extraction',
      description: 'Finished Naomi data extraction with zero error',
    },
    { time: 'Jan 4', title: 'Wyn', description: 'Wyn app is born' },
    {
      time: 'Jan 5',
      title: 'Performed',
      description: 'Played music at club ilia',
    },
    {
      time: 'Jan 7',
      title: 'First film',
      description: 'Developed my first black and white film camera',
    },
  ];
  return (
    <View style={styles.container}>
      <Timeline
        data={this.data}
        innerCircle={'dot'}
        lineColor={colors.smokyblack}
        circleColor={colors.smokyblack}
        descriptionStyle={{ color: 'gray' }}
      />
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
