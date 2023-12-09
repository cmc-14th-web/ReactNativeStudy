import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useRef} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import BottomDrawer, {
  BottomDrawerMethods,
} from 'react-native-animated-bottom-drawer';
import ImagePicker from 'react-native-image-crop-picker';
import {useRecoilValue, useSetRecoilState} from 'recoil';
import Home from '../../screens/Home';
import Setting from '../../screens/Setting';
import colorState from '../../store/color';
import imageListState from '../../store/image';
import palette from '../../styles/palette';
import {RootTabParamList} from '../../types/type';
import IconFactory from '../IconFactory';
import SvgIcons from '../SvgIcons';

const Tab = createBottomTabNavigator<RootTabParamList>();

const BottomTabNavigation = () => {
  // ref
  const setImageList = useSetRecoilState(imageListState);
  const bottomDrawerRef = useRef<BottomDrawerMethods>(null);
  const color = useRecoilValue(colorState);
  const screenOptions = {
    headerStyle: {
      backgroundColor: 'transparent',
    },
    headerShown: false,
  };
  return (
    <View style={{flex: 1}}>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({focused}) => (
              <SvgIcons.HomeIcon fill={focused ? color : 'Gray400'} />
            ),
          }}
        />
        <Tab.Screen
          name="CameraDraw"
          component={View}
          options={{
            tabBarButton: () => (
              <CameraDrawer
                handleClick={() => bottomDrawerRef.current?.open()}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Setting"
          component={Setting}
          options={{
            headerTitle: '설정',
            tabBarLabel: '설정',
            tabBarActiveTintColor: palette[color],
            tabBarIcon: ({focused}) => (
              <SvgIcons.SettingIcon fill={focused ? color : 'Gray400'} />
            ),
          }}
        />
      </Tab.Navigator>
      <BottomDrawer ref={bottomDrawerRef} initialHeight={150}>
        <View style={{height: 50, justifyContent: 'center', padding: 10}}>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}
            onPress={() => {
              ImagePicker.openCamera({
                width: 300,
                height: 400,
                cropping: true,
              }).then(image => {
                setImageList(prev => [...prev, image]);
              });
              // stackNavigation.navigate('Gallery');
            }}>
            <View style={{width: 30}}>
              <SvgIcons.CameraIcon fill={color} />
            </View>
            <Text>카메라로 촬영하기</Text>
          </TouchableOpacity>
        </View>
        <View style={{height: 50, justifyContent: 'center', padding: 10}}>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}
            onPress={() => {
              ImagePicker.openPicker({
                width: 300,
                height: 400,
                cropping: true,
              }).then(image => {
                setImageList(prev => [...prev, image]);
                bottomDrawerRef.current?.close();
              });
              // stackNavigation.navigate('Gallery');
            }}>
            <View style={{width: 30}}>
              <SvgIcons.GalleryIcon fill={color} />
            </View>
            <Text>갤러리에서 선택하기</Text>
          </TouchableOpacity>
        </View>
      </BottomDrawer>
    </View>
  );
};

const CameraDrawer = ({handleClick}: {handleClick: () => void}) => {
  const color = useRecoilValue(colorState);
  return (
    <TouchableOpacity onPress={handleClick}>
      <IconFactory icon="Add" width={50} height={50} fill={palette[color]} />
    </TouchableOpacity>
  );
};

export default BottomTabNavigation;
