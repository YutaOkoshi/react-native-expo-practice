// import { ColorSchemeName, useColorScheme as _useColorScheme } from 'react-native';

import {
  PermissionsAndroid
} from "react-native";

export default async function usePermissionCheck(): Promise<boolean> {
  const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;

  
  const hasPermission = await PermissionsAndroid.check(permission);
  if (hasPermission) {
    return true;
  }

  const status = await PermissionsAndroid.request(permission);
  return status === 'granted';

}
