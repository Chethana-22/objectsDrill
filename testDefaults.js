import { defaults } from "./defaults.js";

const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };
const defaultProps = {name:'thor', age:45};
console.log(defaults(defaultProps, testObject));