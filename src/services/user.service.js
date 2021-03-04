import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/user/";

class UserService {
  getPublicContent() {
    return axios.get(API_URL + "all");
  }

  getUserBoard() {
    return axios.get(API_URL + "user", { headers: authHeader() });
  }

  getModeratorBoard(email) {
    return axios.get(API_URL + "super", { headers: authHeader() , params: { answer: 42 }});
  }

  getAdminBoard() {
    return axios.get(API_URL + "admin", { headers: authHeader() });
  }
}

export default new UserService();
