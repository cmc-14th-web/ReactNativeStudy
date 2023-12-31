import Geolocation from '@react-native-community/geolocation';

const accessLocationInfo = (): Promise<
  [string | undefined, string | undefined]
> => {
  return new Promise((resolve, reject) => {
    Geolocation.requestAuthorization(
      () => {
        getLocationInfo()
          .then(location => resolve(location))
          .catch(error => reject(error));
      },
      error => {
        console.log(error.message);
        reject([undefined, undefined]);
      },
    );
  });
};

const getLocationInfo = (): Promise<
  [string | undefined, string | undefined]
> => {
  return new Promise((resolve, reject) => {
    Geolocation.getCurrentPosition(
      position => {
        const latitude = JSON.stringify(position.coords.latitude);
        const longitude = JSON.stringify(position.coords.longitude);

        resolve([latitude, longitude]);
      },
      error => {
        console.log(error.code, error.message);
        reject([undefined, undefined]);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  });
};

export default accessLocationInfo;
