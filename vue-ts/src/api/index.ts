import axios, { AxiosPromise } from "axios";

interface User {
  id: string;
  /** 이 친구는 문자열입니다 */
  name: string;
}

/**
 * @description 사용자 정보를 조회하는 API
 */
function fetchUser(): AxiosPromise<User> {
  return axios.get("https://jsonplaceholder.typicode.com/users/1");
}

export { fetchUser };
