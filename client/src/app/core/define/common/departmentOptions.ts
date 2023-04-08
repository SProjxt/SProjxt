import { Options } from '../../model/element/option';
import { DepartmentTextEnum, DepartmentValuesEnum } from '../../enum/common';

export const DepartmentOptions: Options[] = [
  { value: DepartmentValuesEnum.Frontend, text: DepartmentTextEnum.Frontend },
  { value: DepartmentValuesEnum.Backend, text: DepartmentTextEnum.Backend },
];
