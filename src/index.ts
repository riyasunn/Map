import { User } from './User';
import { Company } from './Company';
import { CutomMap } from "./CustomMap";

const user = new User();
const company = new Company("Hi, Riya works in our company as an software developer");
// console.log(user);
// console.log(company);

const customMap = new CutomMap("map");

customMap.addMarker(user);
customMap.addMarker(company);
