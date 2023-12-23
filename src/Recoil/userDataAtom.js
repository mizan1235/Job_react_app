import {atom} from "recoil"
const userDataAtom = atom({
    key: 'userDataAtom', 
    default: null, // default value (aka initial value)
  });
export default userDataAtom