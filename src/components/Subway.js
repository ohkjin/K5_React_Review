import { useRecoilValue } from "recoil"
import { stLogin } from "./StAtom"
import SubwayInfo from "./SubwayInfo";
import Login from "./Login";

export default function Subway() {
  const isLogin = useRecoilValue(stLogin);
  return (
    <>
      {
        isLogin? <SubwayInfo/>:<Login/>
      }
    </>
  )
}
