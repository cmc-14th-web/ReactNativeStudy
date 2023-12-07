import {Alert, Linking, Platform} from 'react-native';
import {
  RESULTS,
  requestMultiple,
  Permission,
  check,
} from 'react-native-permissions';

class PermissionUtil {
  private cmmAccessDevicePlatformCheck = (): boolean => {
    const isUseDevice = true;
    if (Platform.OS !== 'ios' && Platform.OS !== 'android') !isUseDevice;
    return isUseDevice;
  };

  private cmmPermsArrCheck = async (
    permsCodeArr: Permission[],
  ): Promise<Permission[]> => {
    const notGrantedArr: Permission[] = [];

    for (const permsItem of permsCodeArr) {
      if (permsItem != undefined) {
        const permsCheck = await check(permsItem);
        switch (permsCheck) {
          case 'granted':
            break;
          case 'blocked':
          case 'denied':
          case 'limited':
          case 'unavailable':
            notGrantedArr.push(permsItem);
            break;
        }
      }
    }
    return notGrantedArr;
  };

  cmmReqPermis = async (permsArr: Permission[]): Promise<void> => {
    console.log('[+] 함수 실행완료');

    if (!this.cmmAccessDevicePlatformCheck()) return;
    const notGrantedArr = await this.cmmPermsArrCheck(permsArr);
    const notGrantedArrLen = notGrantedArr.length;
    if (notGrantedArrLen == 0) return;
    else {
      await requestMultiple(notGrantedArr)
        .then(statues => {
          let permsCnt = 0;
          notGrantedArr.map(permsItem =>
            statues[permsItem] === RESULTS.GRANTED ? (permsCnt += 1) : 0,
          );
          if (notGrantedArrLen === permsCnt) return;
          else {
            Linking.openSettings();
            Alert.alert('권한을 모두 허용해주세요');
          }
        })
        .catch(e => {
          console.log('[-] 권한 요청에서 에러가 발생하였습니다.', e);
        });
    }
  };
}
export default new PermissionUtil();
