import request from "./request";

// export function getCustomers() {
//     return request({
//         method: "get",
//         url: './users'
//     })
// }
export const getCustomers = (value) => request("get","./users",value)

export const addCustomers = (value) => request("post","./users",value)

// export const deleteCustomers = (value) => request("delete","./users",value)
