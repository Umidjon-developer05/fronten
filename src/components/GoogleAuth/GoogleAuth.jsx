import { Button } from "../ui/button";
import GoogleImage from "../../assets/google.png";
import { useGoogleLogin } from "@react-oauth/google";
import { googleAuth } from "../../api";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/slice";

const GoogleAuth = () => {
  const dispatch = useDispatch();

  const responseGoogle = async (authResult) => {
    console.log(authResult);
    try {
      if (authResult["code"]) {
        const result = await googleAuth(authResult["code"]);
        const { _id, email, name, image, createdAt, updatedAt } =
          result?.data?.user;

        dispatch(setUser({ _id, email, name, image, createdAt, updatedAt }));

        console.log(result?.data?.user);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const googleLogin = useGoogleLogin({
    onSuccess: responseGoogle,
    onError: responseGoogle,
    flow: "auth-code",
  });

  return (
    <div className="flex justify-center items-center h-screen">
      <Button
        variant="outline"
        className="w-[400px] h-[60px] flex items-center gap-2"
        onClick={googleLogin}
      >
        <span>
          <img src={GoogleImage} alt="Google" className="w-8 h-8" />
        </span>
        <span className="text-xl">Sign in with Google</span>
      </Button>
    </div>
  );
};

export default GoogleAuth;
