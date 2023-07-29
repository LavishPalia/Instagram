import React, {useState} from 'react';
import {StyleSheet, View, Pressable, Text} from 'react-native';
import Video from 'react-native-video';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../theme/color';

interface IVideoPlayer {
  uri: string;
  paused: boolean;
}

const VideoPlayer = ({uri, paused}: IVideoPlayer) => {
  const [muted, setMuted] = useState(true);
  const [videoDuration, setVideoDuration] = useState('0:00');

  const onVideoMute = () => {
    setMuted(prevState => !prevState);
  };

  // ** logic for adding video duration
  const onVideoDurationCallback = (currentTime: number) => {
    const minutes = Math.floor(currentTime / 60);
    const seconds = Math.round(currentTime % 60);

    setVideoDuration(`${minutes}:${seconds.toString().padStart(2, '0')}`);
  };

  return (
    <View>
      <Text style={styles.videoDuration}>{videoDuration}</Text>
      <Video
        source={{uri}}
        style={styles.video}
        resizeMode="cover"
        repeat
        muted={muted}
        paused={paused}
        onProgress={({currentTime}) => onVideoDurationCallback(currentTime)}
      />

      <Pressable onPress={onVideoMute} style={styles.muteButton}>
        <Ionicons name={muted ? 'volume-mute' : 'volume-medium'} size={14} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  video: {
    width: '100%',
    aspectRatio: 1,
  },
  muteButton: {
    backgroundColor: colors.black,
    padding: 5,
    borderRadius: 25,
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  videoDuration: {
    backgroundColor: colors.black,
    color: colors.white,
    position: 'absolute',
    top: 5,
    right: 5,
    zIndex: 2,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
  },
});

export default VideoPlayer;
