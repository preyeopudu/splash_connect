import { useGoogleLogin } from "@react-oauth/google";
import prenzyvideo from "../../assets/videos/prenzy.mp4";
import logo from "../../assets/images/logo.png";
import { FcGoogle } from "react-icons/fc";
const Login = () => {
  const handleLogin = useGoogleLogin({
    onSuccess: (credentialResponse) => {
      console.log(credentialResponse.access_token);
      const { access_token } = credentialResponse;
      //   Use the access token to fetch the user's profile information
      fetch(
        `https://www.googleapis.com/oauth2/v2/userinfo?access_token=${access_token}`
      )
        .then((response) => response.json())
        .then((data) => {
          console.log("user data", data);
          localStorage.setItem("user", JSON.stringify(data));
        })
        .catch((error) => {
          console.error(error);
        });
    },
  });
  return (
    <div className="flex justify-start items-center flex-col h-screen">
      <div className="relative w-full h-full">
        <video
          src={prenzyvideo}
          type="video/mp4"
          loop
          controls={false}
          muted
          autoPlay
          className="w-full h-full object-cover"
        />

        <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 flex-col bg-black opacity-75 ">
          <div className="p-5">
            <img src={logo} width="150px" alt="logo" />
          </div>

          <div>
            <button
              onClick={handleLogin}
              className="bg-white flex justify-center  items-center text-black font-bold py-2 px-4 rounded"
            >
              <FcGoogle className="mr-4" size={32} />
              Sign in with google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
