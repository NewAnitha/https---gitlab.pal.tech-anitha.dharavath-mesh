// //https://semaphoreci.com/blog/api-layer-react

// import { api } from "./Configs/axiosConfigs";
// import { defineCancelApiObject } from "./Configs/axiosUtils";

// const companyId = sessionStorage.getItem('company');

// export const CompanyDetailsById = {
//     get: async function (props, cancel = false) {
//       const response = await api.request({
//         url: `/Configuration/GetCompanyDetailsById?companyId=${companyId}`,
//         method: "GET",
//         signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined,
//       })
  
//       // returning the product returned by the API
//       return response.data;
//     },
//     update: async function (props, cancel = false) {
//       const response = await api.request({
//         url: `/Configuration/UpdateCompanyDetailsById?companyId=${companyId}`,
//         method: "POST",
//         data: props.data,
//         signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined,
//       })
//       return response.data;
//     }
// }

// // defining the cancel API object for the API
// const cancelApiObject = defineCancelApiObject(CompanyDetailsById)