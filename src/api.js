import _ from "lodash";
import http from "axios";
class API {
  static headers() {
    return {
      "Content-Type": "application/json",
    };
  }
  static get(route, headers, otherHost, key) {
    return this.api({ requestType: "get", route, headers, otherHost, key });
  }
  static api({ requestType, route, headers, params, data, otherHost, key }) {
    const url = `${route}`;
    const baseHeaders = API.headers();
    const axiosInstance = http.create({
      baseURL: url,
      headers: headers ? Object.assign({}, baseHeaders, headers) : baseHeaders,
      method: requestType,
      params: params ? params : {},
      data: data ? data : {},
    });
      return axiosInstance
        .get(url, {})
        .then((response) => {
          if (url.includes("guestlogin")) {
            return response;
          }

          return response.data;
        })
        .catch((err) => {
          throw err;
        });
    
  }
}
export default API;
