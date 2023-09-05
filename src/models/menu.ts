export interface Menu {
  path: string;
  keyTranslate: string;
}

export interface IResource {
  author: string;
  content: string;
  createdAt: string;
  expiredTime: string;
  id: number;
  status: number;
  thumbnail: string;
  title: string;
  type: string;
  updatedAt: string;
  startPosition?: number
}
export interface VehicleModel {
  images: string;
}
