export const conf = require("../config.json");
const activeConfKey = "active-conf";
export function sessionGetActiveConf() {
  const ac = sessionStorage.getItem(activeConfKey);
  if (ac === undefined || ac === null) return 0;
  return parseInt(ac);
}
