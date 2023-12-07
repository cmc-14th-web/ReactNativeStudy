import { Linking, Platform } from "react-native";
import { PERMISSIONS, requestMultiple } from "react-native-permissions";

const androidPermissions = {
    camera: PERMISSIONS.ANDROID.CAMERA,
    readExternalStorage: PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
    readMediaImages: PERMISSIONS.ANDROID.READ_MEDIA_IMAGES,
};

const iosPermissions = {
    camera: PERMISSIONS.IOS.CAMERA,
    photoLibrary: PERMISSIONS.IOS.PHOTO_LIBRARY,
};

const getPermissionsByOS = () => {
    if (Platform.OS === 'android') {
        return Object.values(androidPermissions);
    }

    return Object.values(iosPermissions);
}

const requestPermissions = async () => {
    await requestMultiple(getPermissionsByOS()).then(
        (result) => {
            if (Object.values(result).every((permission) => permission !== 'granted')) {
                Linking.openSettings();
            }
        }
    ).catch((error) => {
        console.error(error);
    });
}

const usePermissions = () => {
    requestPermissions();
};

export default usePermissions;