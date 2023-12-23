import {atom} from "recoil"
const jobDataAtom = atom({
    key: 'jobDataAtom', 
    default: [], // default value (aka initial value)
  });
export default jobDataAtom