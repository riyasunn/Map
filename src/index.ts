import { User } from './User';
import { Company } from './Company';
import { CutomMap } from "./CustomMap";

const user = new User();
const company = new Company();
// console.log(user);
// console.log(company);

const customMap = new CutomMap("map");

customMap.addMarker(user);
customMap.addMarker(company);
