import {atom} from "recoil"
const loginAtom = atom({
    key: 'loginAtom', 
    default: null, // default value (aka initial value)
  });
export default loginAtom