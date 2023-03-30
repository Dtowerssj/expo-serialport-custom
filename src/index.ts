import ExpoSerialportModule from "./ExpoSerialportModule";

export interface UsbDevice {
  version: string;
  vendorId: number;
  productId: number;
  deviceName: string;
  productName: string;
  deviceClass: number;
  serialNumber: string;
  deviceProtocol: number;
  deviceSubClass: number;
  interfaceCount: number;
  manufactureName: string;
}

export interface UsbDeviceConnection {
  fileDescriptor: number;
  requestWaitMillis: number;
  protocol: number;
  interfaceCount: number;
  rawDescriptors: Uint8Array;
  serial: string | null;
}

export function getUsbDevices(): UsbDevice[] {
  return ExpoSerialportModule.getUsbDevices();
}

export function connectToDevice(deviceName: string): UsbDeviceConnection {
  return ExpoSerialportModule.connectToDevice(deviceName);
}

export function comunicate(deviceName: string): string {
  return ExpoSerialportModule.comunicate(deviceName);
}

export default {
  getUsbDevices,
  connectToDevice,
  comunicate
};
