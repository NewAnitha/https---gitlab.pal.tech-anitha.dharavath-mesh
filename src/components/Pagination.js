import React from "react";
// import { usePagination } from '@utils/hooks/usePagination';
import { usePagination } from "./UsePagination";

// type propsType = {
//   presentPage: number;
//   rowsPerPage: number;
//   totalCount: number;
//   onPageChange: (a: number) => void;
// };

export default function Pagination(props) {
    const { onPageChange, totalCount, presentPage, rowsPerPage } = props;
    const siblingCount = 1;
    const paginationList = usePagination({
        presentPage,
        totalCount,
        siblingCount,
        rowsPerPage,
    });
    const lastPage = paginationList[paginationList.length - 1];
    return (
        <div className="w-max flex gap-4 md:gap-4 items-center">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="9"
                height="14"
                viewBox="0 0 9 14"
                fill="none"
            >
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.85309 7.5993C2.69687 7.44303 2.6091 7.2311 2.6091 7.01013C2.6091 6.78916 2.69687 6.57724 2.85309 6.42097L7.56726 1.7068C7.64413 1.62721 7.73609 1.56372 7.83776 1.52005C7.93943 1.47637 8.04878 1.45339 8.15943 1.45242C8.27007 1.45146 8.37981 1.47255 8.48222 1.51445C8.58463 1.55635 8.67768 1.61823 8.75592 1.69647C8.83417 1.77471 8.89604 1.86776 8.93794 1.97017C8.97985 2.07258 9.00093 2.18232 8.99997 2.29297C8.99901 2.40362 8.97602 2.51297 8.93234 2.61464C8.88867 2.71631 8.82519 2.80826 8.74559 2.88513L4.62059 7.01013L8.74559 11.1351C8.89739 11.2923 8.98139 11.5028 8.97949 11.7213C8.97759 11.9398 8.88995 12.1488 8.73544 12.3033C8.58094 12.4578 8.37192 12.5455 8.15343 12.5474C7.93493 12.5493 7.72443 12.4653 7.56726 12.3135L2.85309 7.5993Z"
                    fill="#5E5E5E"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.85309 7.5993C2.69687 7.44303 2.6091 7.2311 2.6091 7.01013C2.6091 6.78916 2.69687 6.57724 2.85309 6.42097L7.56726 1.7068C7.64413 1.62721 7.73609 1.56372 7.83776 1.52005C7.93943 1.47637 8.04878 1.45339 8.15943 1.45242C8.27007 1.45146 8.37981 1.47255 8.48222 1.51445C8.58463 1.55635 8.67768 1.61823 8.75592 1.69647C8.83417 1.77471 8.89604 1.86776 8.93794 1.97017C8.97985 2.07258 9.00093 2.18232 8.99997 2.29297C8.99901 2.40362 8.97602 2.51297 8.93234 2.61464C8.88867 2.71631 8.82519 2.80826 8.74559 2.88513L4.62059 7.01013L8.74559 11.1351C8.89739 11.2923 8.98139 11.5028 8.97949 11.7213C8.97759 11.9398 8.88995 12.1488 8.73544 12.3033C8.58094 12.4578 8.37192 12.5455 8.15343 12.5474C7.93493 12.5493 7.72443 12.4653 7.56726 12.3135L2.85309 7.5993Z"
                    fill="black"
                    fill-opacity="0.2"
                />
                <path
                    d="M1 12.5476L1 1.54761"
                    stroke="#5E5E5E"
                    stroke-width="1.5"
                    stroke-linecap="round"
                />
                <path
                    d="M1 12.5476L1 1.54761"
                    stroke="black"
                    stroke-opacity="0.2"
                    stroke-width="1.5"
                    stroke-linecap="round"
                />
            </svg>
            <button
                onClick={() => {
                    if (presentPage != 1) onPageChange(presentPage - 1);
                }}
                className="flex items-center"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 18 16"
                >
                    <path
                        fillRule="evenodd"
                        d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                    />
                </svg>
            </button>
            {paginationList.map((pageNumber, index) => {
                if (pageNumber === "...") {
                    return (
                        <div key={index} className="">
                            {". . ."}
                        </div>
                    );
                }
                return (
                    <button
                        key={index}
                        // style={{
                        //     // background: pageNumber === presentPage ? 'white ' : '#e2e2e2',
                        //     // border: pageNumber === presentPage ? '1px solid black' : '',
                        //     fontWeight:
                        //         pageNumber === presentPage ? "900" : "normal",
                        // }}
                        className={` font-semibold cursor-pointer ${pageNumber === presentPage ? "font-black border rounded-md py-1 px-3 text-[#004986]" : "font-normal text-gray-500"}`}
                        onClick={() => {
                            if (typeof pageNumber == "number")
                                onPageChange(pageNumber);
                        }}
                    >
                        {pageNumber}
                    </button>
                );
            })}
            <button
                onClick={() => {
                    if (presentPage != lastPage) onPageChange(presentPage + 1);
                }}
                className="flex items-center"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                >
                    <path
                        fillRule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                    />
                </svg>
            </button>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="9"
                height="14"
                viewBox="0 0 9 14"
                fill="none"
            >
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.14691 6.4007C6.30313 6.55697 6.3909 6.7689 6.3909 6.98987C6.3909 7.21084 6.30313 7.42276 6.14691 7.57903L1.43274 12.2932C1.35587 12.3728 1.26391 12.4363 1.16224 12.48C1.06057 12.5236 0.951224 12.5466 0.840575 12.5476C0.729925 12.5485 0.620192 12.5275 0.517779 12.4856C0.415365 12.4437 0.322321 12.3818 0.244078 12.3035C0.165834 12.2253 0.103956 12.1322 0.0620553 12.0298C0.0201545 11.9274 -0.000930049 11.8177 3.14642e-05 11.707C0.000992978 11.5964 0.0239815 11.487 0.0676557 11.3854C0.11133 11.2837 0.174815 11.1917 0.254407 11.1149L4.37941 6.98987L0.254407 2.86487C0.102608 2.7077 0.0186129 2.4972 0.0205116 2.2787C0.0224103 2.0602 0.110051 1.85119 0.264558 1.69669C0.419064 1.54218 0.628075 1.45454 0.846572 1.45264C1.06507 1.45074 1.27557 1.53474 1.43274 1.68653L6.14691 6.4007Z"
                    fill="#5E5E5E"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.14691 6.4007C6.30313 6.55697 6.3909 6.7689 6.3909 6.98987C6.3909 7.21084 6.30313 7.42276 6.14691 7.57903L1.43274 12.2932C1.35587 12.3728 1.26391 12.4363 1.16224 12.48C1.06057 12.5236 0.951224 12.5466 0.840575 12.5476C0.729925 12.5485 0.620192 12.5275 0.517779 12.4856C0.415365 12.4437 0.322321 12.3818 0.244078 12.3035C0.165834 12.2253 0.103956 12.1322 0.0620553 12.0298C0.0201545 11.9274 -0.000930049 11.8177 3.14642e-05 11.707C0.000992978 11.5964 0.0239815 11.487 0.0676557 11.3854C0.11133 11.2837 0.174815 11.1917 0.254407 11.1149L4.37941 6.98987L0.254407 2.86487C0.102608 2.7077 0.0186129 2.4972 0.0205116 2.2787C0.0224103 2.0602 0.110051 1.85119 0.264558 1.69669C0.419064 1.54218 0.628075 1.45454 0.846572 1.45264C1.06507 1.45074 1.27557 1.53474 1.43274 1.68653L6.14691 6.4007Z"
                    fill="black"
                    fill-opacity="0.2"
                />
                <path
                    d="M8 1.45239V12.4524"
                    stroke="#5E5E5E"
                    stroke-width="1.5"
                    stroke-linecap="round"
                />
                <path
                    d="M8 1.45239V12.4524"
                    stroke="black"
                    stroke-opacity="0.2"
                    stroke-width="1.5"
                    stroke-linecap="round"
                />
            </svg>
        </div>
    );
}
