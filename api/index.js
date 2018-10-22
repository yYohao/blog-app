import ajax from "./ajax"

//基础路径
const BASE_URL = "http://127.0.0.1:3000";

//请求文章
export const getTexts = ()=> ajax(BASE_URL + "/text/api");
