import {atom} from "recoil"
const createJobAtom = atom({
    key: 'createJobAtom', 
    default: null, // default value (aka initial value)
  });
export default createJobAtom