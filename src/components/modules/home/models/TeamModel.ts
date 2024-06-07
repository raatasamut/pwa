import BaseModel from '@/models/BaseModel';

export default class TeamModel extends BaseModel {
  name?: string;

  nickname?: string;

  imageURL?: string;
}
