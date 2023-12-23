import {atom} from "recoil"
const searchInputAtom = atom({
    key: 'searchInputAtom', 
    default: "", // default value (aka initial value)
  });
export default searchInputAtom