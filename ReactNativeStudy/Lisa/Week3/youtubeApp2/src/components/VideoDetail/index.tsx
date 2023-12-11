import {Image, StyleSheet, Text, View} from 'react-native';
import {theme} from 'styles/theme';
import {typoStyles} from 'styles/typo';

import {VideoDetailPropsType} from 'types/video';
import {calculateDaysAgo} from 'utils/calculateDaysAgo';
import {sliceText} from 'utils/sliceText';

const VideoDetail = ({
  publishedAt,
  title,
  thumbnailUrl,
  channelTitle,
}: VideoDetailPropsType) => {
  return (
    <View style={viewDetailStyles.container}>
      <View style={viewDetailStyles.thumbnailContainer}>
        <Image
          source={{uri: thumbnailUrl}}
          style={viewDetailStyles.thumbnail}
        />
      </View>
      <View style={viewDetailStyles.textContainer}>
        <Text style={viewDetailStyles.headingText}>{sliceText(title, 42)}</Text>
        <View style={viewDetailStyles.bodyTextContainer}>
          <Text style={viewDetailStyles.bodyText}>{channelTitle}</Text>
          <Text style={viewDetailStyles.bodyText}>{' · '}</Text>
          <Text style={viewDetailStyles.bodyText}>
            {calculateDaysAgo(publishedAt)}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default VideoDetail;

const viewDetailStyles = StyleSheet.create({
  container: {
    height: 257,
  },
  thumbnailContainer: {
    height: 180,
    marginTop: 10,
  },
  thumbnail: {
    height: '100%',
  },
  textContainer: {
    height: 45,
    marginTop: 12,
  },
  headingText: {
    fontSize: typoStyles.typo.body_3.fontSize,
    fontWeight: typoStyles.typo.body_3.fontWeight,
    lineHeight: typoStyles.typo.body_3.lineHeight,
    color: theme.palette.gray_100,
  },
  bodyTextContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  bodyText: {
    fontSize: typoStyles.typo.body_4.fontSize,
    fontWeight: typoStyles.typo.body_4.fontWeight,
    lineHeight: typoStyles.typo.body_4.lineHeight,
    color: theme.palette.gray_600,
  },
});
