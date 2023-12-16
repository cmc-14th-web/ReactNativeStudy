import {Image, StyleSheet, Text, View} from 'react-native';
import {palette} from '../styles/ColorPalette';
import getDate from '../utils/getDate';

interface VideoProps {
  uri: string;
  writer: string;
  title: string;
  date: string;
  view?: number;
}
function Video({uri, writer, title, date, view = 0}: VideoProps) {
  return (
    <View style={styles.container}>
      <Image source={{uri: uri}} style={styles.img} />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.content}>
          <Text style={styles.detailContent}>{writer}..</Text>
          {/*<Text style={styles.detailContent}>조회수{view}</Text>*/}
          {/*<Text style={styles.detailContent}>{date}</Text>*/}
          <Text style={styles.detailContent}>&nbsp;· {getDate(date)}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  contentContainer: {
    marginLeft: 18,
    marginBottom: 10,
  },
  img: {
    width: '100%',
    height: 180,
  },
  title: {
    color: palette.white,
    marginTop: 12,
    fontSize: 16,
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
  },
  detailContent: {
    color: palette.gray[600],
    fontSize: 12,
  },
});
export default Video;
