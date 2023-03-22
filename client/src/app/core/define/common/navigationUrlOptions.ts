import { Options } from '../../model/element/option';
import {
  NavigationTextEnum,
  NavigationUrlEnum,
} from '../../enum/element/navigation';

export const NavigationUrlOptions: Options[] = [
  { value: NavigationUrlEnum.Board, text: NavigationTextEnum.Board },
  { value: NavigationUrlEnum.Backlog, text: NavigationTextEnum.Backlog },
  { value: NavigationUrlEnum.Member, text: NavigationTextEnum.Member },
  { value: NavigationUrlEnum.Statistics, text: NavigationTextEnum.Statistics },
];
