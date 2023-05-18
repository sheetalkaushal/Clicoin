import { Login } from "../Screens/Login/Login";
import { OTP } from "../Screens/OTP/OTP";
import { Register } from "../Screens/Register/Register";
import { Tutorial } from "../Screens/Tutroial/Tutorial";
export default function AuthStack(Stack) {
  return (
    <>
      <Stack.Screen
        name={"Tutorial"}
        component={Tutorial}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={"Register"}
        component={Register}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={"Login"}
        component={Login}
        options={{ headerShown: false }}
      />
        <Stack.Screen
        name={"OTP"}
        component={OTP}
        options={{ headerShown: false }}
      />
    </>
  );
}
