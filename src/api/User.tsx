import axios from "axios";

interface UserData {
  userId: string;
  password: string;
  name?: string;
  introduce?: string;
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
  } catch (err) {
    console.log(err);
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
  } catch (err) {
    console.log(err);
  }
};
