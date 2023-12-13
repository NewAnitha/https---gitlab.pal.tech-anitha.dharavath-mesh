import React, { useEffect, useState } from "react";
import useFetch from "../../api/ApiRequest";
import DynamicGrid from "../DynamicGrid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightAndDownLeftFromCenter,faShareNodes,faMessage} from '@fortawesome/free-solid-svg-icons'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import {Routes, Route, useNavigate} from 'react-router-dom';


export const ProjectAction = ({ columnName, rowData }) => {
    const navigate = useNavigate();

    const [showRow, setShowRow] = useState(false);

    const handleProjectDetails=()=>{
        navigate('/projects/id');
    }
    return (
    <div className="flex justify-start gap-3 text-gray-400">
        <span className="border p-[10px] rounded-md">
        <svg  xmlns="http://www.w3.org/2000/svg" width="12" height="14" viewBox="0 0 12 14" fill="none">
  <path d="M10 9.72001C9.49333 9.72001 9.04 9.92001 8.69333 10.2333L3.94 7.46668C3.97333 7.31334 4 7.16001 4 7.00001C4 6.84001 3.97333 6.68668 3.94 6.53334L8.64 3.79334C9 4.12668 9.47333 4.33334 10 4.33334C11.1067 4.33334 12 3.44001 12 2.33334C12 1.22668 11.1067 0.333344 10 0.333344C8.89333 0.333344 8 1.22668 8 2.33334C8 2.49334 8.02667 2.64668 8.06 2.80001L3.36 5.54001C3 5.20668 2.52667 5.00001 2 5.00001C0.893333 5.00001 0 5.89334 0 7.00001C0 8.10668 0.893333 9.00001 2 9.00001C2.52667 9.00001 3 8.79334 3.36 8.46001L8.10667 11.2333C8.07333 11.3733 8.05333 11.52 8.05333 11.6667C8.05333 12.74 8.92667 13.6133 10 13.6133C11.0733 13.6133 11.9467 12.74 11.9467 11.6667C11.9467 10.5933 11.0733 9.72001 10 9.72001Z" fill="#004986"/>
</svg>
        </span>
        <span className="border p-[10px] rounded-md">      
<svg  xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
  <path d="M13.66 1.66668C13.66 0.933344 13.0667 0.333344 12.3333 0.333344H1.66668C0.933344 0.333344 0.333344 0.933344 0.333344 1.66668V9.66668C0.333344 10.4 0.933344 11 1.66668 11H11L13.6667 13.6667L13.66 1.66668ZM10.3333 6.33334H7.66668V9.00001H6.33334V6.33334H3.66668V5.00001H6.33334V2.33334H7.66668V5.00001H10.3333V6.33334Z" fill="#004986"/>
</svg>
</span>
<span className="border p-[10px] rounded-md"  onClick={() => {
            // setShowRow(true);
            handleProjectDetails()

          }}>
<svg  xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">
  <path d="M7.88666 4.66666L9.99999 6.77332V6.66666C9.99999 6.13622 9.78928 5.62752 9.4142 5.25244C9.03913 4.87737 8.53042 4.66666 7.99999 4.66666H7.88666ZM5.01999 5.19999L6.05332 6.23332C6.01999 6.37332 5.99999 6.51332 5.99999 6.66666C5.99999 7.19709 6.2107 7.7058 6.58578 8.08087C6.96085 8.45594 7.46956 8.66666 7.99999 8.66666C8.14666 8.66666 8.29332 8.64666 8.43332 8.61332L9.46666 9.64666C9.01999 9.86666 8.52666 9.99999 7.99999 9.99999C7.11593 9.99999 6.26809 9.6488 5.64297 9.02368C5.01785 8.39856 4.66666 7.55071 4.66666 6.66666C4.66666 6.13999 4.79999 5.64666 5.01999 5.19999ZM1.33332 1.51332L2.85332 3.03332L3.15332 3.33332C2.05332 4.19999 1.18666 5.33332 0.666656 6.66666C1.81999 9.59332 4.66666 11.6667 7.99999 11.6667C9.03332 11.6667 10.02 11.4667 10.92 11.1067L11.2067 11.3867L13.1533 13.3333L14 12.4867L2.17999 0.666656M7.99999 3.33332C8.88404 3.33332 9.73189 3.68451 10.357 4.30963C10.9821 4.93476 11.3333 5.7826 11.3333 6.66666C11.3333 7.09332 11.2467 7.50666 11.0933 7.87999L13.0467 9.83332C14.0467 8.99999 14.8467 7.90666 15.3333 6.66666C14.18 3.73999 11.3333 1.66666 7.99999 1.66666C7.06666 1.66666 6.17332 1.83332 5.33332 2.13332L6.77999 3.56666C7.15999 3.41999 7.56666 3.33332 7.99999 3.33332Z" fill="#004986"/>
</svg>
</span>
        {/* <FontAwesomeIcon icon={faEye} />
        <FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} />  
        <FontAwesomeIcon icon={faShareNodes} />
                <FontAwesomeIcon icon={faMessage} />     */}
        </div>
    );
  };

  export const SelectProjects = ({ columnName, rowData }) => {
    return (
    //   <RowDetailsEye
    //     url="/api/assets/asset-details"
    //     requestBody={{
    //       method: 'POST',
    //       body: JSON.stringify({ assetId: rowData['asset id'], type: 'View' }),
    //     }}
    //     columnName={columnName}
    //     title={'Asset Details'}
    //     rowData={rowData}
    //     refreshData={refreshData}
    //   />
    <div className="ml-6">
       <input type="checkbox"/>
        </div>
    );
  };

const Projects = () => {
    const [data,setData]=useState([])

    const data1 = [
        {
            projectId: 1,
            projectName: "mesh",
            projectType:"POC",
            projectManager: "Anitha",
            projectCreationDate: "12/12/1112",
            projectEndDate: "31/12/1311",
            projectDescription:"i will add in future"
        },
        {
            projectId: 2,
            projectName: "Agile",
            projectType:"POC",
            projectManager: "Anitha",
            projectCreationDate: "12/12/1112",
            projectEndDate: "31/12/1311",
            projectDescription:"i will add in future"

        },
        {
            projectId: 3,
            projectName: "StatusEmail",
            projectType:"POC",
            projectManager: "Anitha",
            projectCreationDate: "12/12/1112",
            projectEndDate: "31/12/1311",
            projectDescription:"i will add in future"

        },
    ];
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        // mode: "no-cors",
        body: JSON.stringify({
            search: "s",
            pageDetail: {
                pageSize: 2,
                pageNumber: 2,
            },
        }),
    };

    // const makeAPICall = async () => {
    //     try {
    //       const response = await fetch('https://localhost:7039/api/projects/getProjects', requestOptions);
    //       const data = await response.json();
    //       console.log(data,"dattttt")
    //     }
    //     catch (e) {
    //       console.log(e)
    //     }
    //   }
    //   useEffect(() => {
    //     makeAPICall();
    //   }, [])
    useEffect(()=>{
        const res = fetch('https://localhost:7039/api/projects/getProjects', requestOptions)
        .then(response => response.json())
        .then(data => {setData(data1)})
        .catch((err)=>{setData(data1); console.log(err)});
        console.log(res);
    },[])

    function getGridDataAndDataCount(
        currentPage,
        rowsperPage,
        field,
        order,
        searchString
    ) {
        console.log("query params", data);
        // loaderDispatch({
        //   type: 'SHOW_LOADER',
        //   id: v4(),
        // });
        // fetch(`/api/assets/${assetId ? `${param}/${assetId}` : param}`, {
        //   method: 'POST',
        //   body: JSON.stringify({
        //     sortColumn: field,
        //     sortOrder: order,
        //     rowStart: rowsperPage * (currentPage - 1),
        //     noOfRows: rowsperPage,
        //     searchString: searchString,
        //   }),
        // })
        //   .then((response) => {
        //     if (!response.ok) {
        //       // create error object and reject if not a 2xx response code
        //       const err = new Error('HTTP status code: ' + response.status);
        //       // err.response = response;
        //       // err.status = response.status;
        //       throw err;
        //     }
        //     return response.json();
        //   })
        //   .then((data) => {
        //     const lastItem = data[data.length - 1];
        //     const rowsData = data.slice(0, -1);
        //     setData({ tableData: rowsData, totalRowsCount: lastItem['Total Rows'] });
        //   })
        //   .catch((error) => {
        //     notificationDispatch({
        //       type: 'ADD_NOTIFICATION',
        //       payload: {
        //         id: v4(),
        //         type: 'error',
        //         msg: `Loading ${param} failed`,
        //       },
        //     });
        //     setIsError(true);
        //   })
        //   .finally(() => {
        //     loaderDispatch({
        //       type: 'HIDE_LOADER',
        //     });
        //   });
    }

    return (
        <div className="p-[40px]">
            <div className="text-[#003B6B] font-medium ml-2">Projects</div>
            <DynamicGrid
                // gridName={""}
                data={data}
                customColumns={{
                    check: {
                        // rename:["Action"],
                        cellRenderer: SelectProjects,
                        width: '30px',
                        showColumnName:true,
                        sortable: false,
                        position: 'start',
                        headerComponent:<div className="ml-6">
                        <input type="checkbox"/>
                         </div>
                      },

                  action: {
                    rename:["Actions"],
                    cellRenderer: ProjectAction,
                    width: '160px',
                    sortable: false,
                    position: 'end',
                  },
                //   ['Approval Status']: { cellRenderer: PendingCategoryButtons, sortable: false, position: 'end', width: '200px' },

                ['projectId']:{rename:"Project Id"},
                ['projectName']:{rename:"Project Type"},
                ['projectManager']:{rename:"Project Manager"},
                ['projectType']:{rename:"Project Type"},
                ['projectCreationDate']:{rename:"Project Creation Date"},
                ['projectEndDate']:{rename:"Project End Date"},
                ['projectDescription']:{rename:"Project Description"}
                
                }}
                // cardView={AssetCategoryPendingCard}
                // totalRowsCount={data?.totalRowsCount || 0}
                totalRowsCount={120}
                onGridFiltersApply={getGridDataAndDataCount}
                // noDataComponent={NoData}
            />
        </div>
    );
};

export default Projects;
