import {IconPath} from '../assets/Icon';

export type iconType = keyof typeof IconPath;

export type TabType = {
  [key: string]: {icon: iconType; iconColor: string};
};
