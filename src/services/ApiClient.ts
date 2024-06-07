import BaseResponse from "@/models/BaseResponse";

class ApiClient {

  get(url: string, success: (data: any) => void, error: (status: number, msg: string, data: any) => void) {

    fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json; charset=utf-8"
      }
    }).then(raw => raw.json()).then(json => {
      const res: BaseResponse = json;
      if (res.status === 200) {
        success(res.entries);
      } else {
        error(res.status || 500, res.message || "-", res.entries);
      }
    }).catch(e => {
      error(500, e.message, e);
    });
  }
}

export default ApiClient;
