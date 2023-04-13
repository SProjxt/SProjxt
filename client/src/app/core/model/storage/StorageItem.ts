import { StorageTypesEnum } from '../../enum/storage';

/**
 * @description Storage item interface
 */
export interface StorageItem {
  key: string;
  value: string;
  type: StorageTypesEnum;
  length: number;
}
