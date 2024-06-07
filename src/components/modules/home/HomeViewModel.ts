import TeamModel from "@components/modules/home/models/TeamModel";
import ApiClient from "@services/ApiClient";

export default class HomeViewModel {
  loadTeamData(cb: (list: Array<TeamModel>) => void) {
    new ApiClient().get(`https://idev.shu.global/mockdata/pwa/home/team.json`
      , (data) => {
        cb(data);
      }
      , (status, msg, data) => {

      });
  }
}
