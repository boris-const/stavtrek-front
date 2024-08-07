
export type ObjectDataType = {
  id: number;
  attributes: ObjectAttributes;
  groupId: number;
  calendarId: number;
  protocol: null;
  name: string;
  uniqueId: string;
  status: string;
  lastUpdate: string;
  positionId: number;
  phone: null;
  model: null;
  contact: null;
  category: null;
  disabled: boolean;
  expirationTime: null;
};

export type ObjectAttributes = {
  deviceImage: string;
  'processing.copyAttributes': string;
  'decoder.timezone': string;
  speedLimit: number;
  'web.reportColor': string;
  deviceInactivityStart: number;
};
