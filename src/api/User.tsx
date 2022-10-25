import axios, { AxiosHeaders } from "axios";

interface UserData {
  userId?: string;
  password?: string;
  name?: string;
  introduce?: string;
  sessionId?: string;
}

// 회원가입 api
export const RegisterAPI = async (props: UserData) => {
  const userData = {
    userId: props.userId,
    password: props.password,
    name: props.name,
    introduce: props.introduce,
  };

  try {
    const res = await axios.post(
      `http://localhost:5000/user/register`,
      userData
    );

    if (res) {
      return res;
    }
  } catch (err: any) {
    console.log(err);
    alert(err.response.data.message);
  }
};

// login
export const LoginAPI = async (props: UserData) => {
  const userData = {
    userId: props.userId,
    password: props.password,
  };

  try {
    const res = await axios.post(`http://localhost:5000/user/login`, userData);

    if (res) {
      return res;
    }
  } catch (err: any) {
    console.log(err);
    alert(err.response.data.message);
  }
};

// logout api
export const LogoutAPI = async (props: UserData) => {
  try {
    const res = await axios.post(
      `http://localhost:5000/user/logout`,
      {},
      {
        headers: { sessionid: props.sessionId },
      }
    );

    if (res) {
      return res;
    }
  } catch (err) {
    console.log(err);
  }
};

// user delete api
export const UserDeleteAPI = async (props: UserData) => {
  const userData = {
    sessionid: props.sessionId,
  };

  try {
    const res = await axios.post(`http://localhost:5000/user/delete`, userData);

    if (res) {
      return res;
    }
  } catch (err) {
    console.log(err);
  }
};
// user information fetch
export const UserFetch = async (props: UserData) => {
  try {
    const res = await axios.post(
      `http://localhost:5000/user/user`,
      {},
      { headers: { sessionid: props.sessionId } }
    );

    if (res) {
      return res;
    }
  } catch (err) {
    console.log(err);
  }
};

// user information Edit
export const UserEdit = async (props: UserData) => {
  const userData = {
    sessionid: props.sessionId,
    name: props.name,
    introduce: props.introduce,
  };

  try {
    const res = await axios.post(`http://localhost:5000/user/edit`, userData);

    if (res) {
      return res;
    }
  } catch (err) {
    console.log(err);
  }
};
