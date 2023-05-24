import { StorageKeysEnum, StorageTypesEnum } from '../../enum/storage';

/**
 * @description Storage defines
 */
export const StorageDefines: Readonly<
  Record<StorageKeysEnum, StorageTypesEnum>
> = {
  [StorageKeysEnum.Authorization]: StorageTypesEnum.Local,
};
