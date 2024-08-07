import { NetClient } from '../../network/net-client';
import UtilsENVConfig from '../../utils/utils-env-config';

export const API_V1_URL = `${UtilsENVConfig.getProcessEnv().VITE_BACK_URL}`;

export const API = new NetClient().setHost(API_V1_URL);
