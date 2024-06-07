import BaseModel from "@/models/BaseModel";

export default class BaseResponse extends BaseModel {
  status?: number;
  message?: string;
  entries?: any;
  keywords?: Array<string>;
}
