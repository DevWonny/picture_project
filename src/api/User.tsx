import axios from "axios";

// // 회원가입 api
// export const SignUp = async () => {
//   try {
//     const res = await axios.post(`http://localhost:5000/user/`)
//   } catch (err) {
//     console.log(err);
//   }
// };

interface UserData {
  userId: string;
  password: string;
}
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
