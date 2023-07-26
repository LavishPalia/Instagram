import React from 'react';
import {Text, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import colors from './src/theme/color';
import fonts from './src/theme/fonts';

const App = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{color: colors.primary, fontSize: fonts.size.xlg}}>
        Hello World
        <AntDesign name="stepforward" size={25} />
      </Text>
    </View>
  );
};

export default App;
