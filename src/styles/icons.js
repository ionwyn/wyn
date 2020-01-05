import FontAwesomeI from 'react-native-vector-icons/FontAwesome';
import IoniconsI from 'react-native-vector-icons/Ionicons';
import EntypoI from 'react-native-vector-icons/Entypo';
import React from 'react';

export const MaterialCommunityIcons = props => (
  <MaterialCommunityIconsI {...props} />
);
const FontAwesome = props => <FontAwesomeI {...props} />;
const Ionicons = props => <IoniconsI {...props} />;
const Entypo = props => <EntypoI {...props} />;

export default {
  FontAwesome,
  Ionicons,
  Entypo,
};
