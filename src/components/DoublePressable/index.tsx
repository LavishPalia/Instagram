import React, {ReactNode} from 'react';
import {Text, Pressable} from 'react-native';

interface IDoublePressable {
  onDoublePress?: () => void;
  children: ReactNode;
}

const DoublePressable = ({
  onDoublePress = () => {},
  children,
}: IDoublePressable) => {
  let lastTap = 0;
  const handleDoublePress = () => {
    //** handleDoublePress will trigger two times for double presses */
    const now = Date.now();

    if (now - lastTap < 300) {
      //** differnce between 2 taps is less than 300 milliseconds */
      onDoublePress();
    }

    lastTap = now; // ** updating lastTap value to current for comparing with second tap
  };

  return <Pressable onPress={handleDoublePress}>{children}</Pressable>;
};

export default DoublePressable;
