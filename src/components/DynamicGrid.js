import React, { useState, useEffect, useMemo } from 'react';
// import Pagination from '@components/pagination';
import Pagination from './Pagination';
import { v4 } from 'uuid';

// type objectType = {
//   [key: string]: any;
// };

// type customColumnObject = {
//   cellRenderer?: any;
//   minWidth?: string;
//   maxWidth?: string;
//   width?: string;
//   alignColumn?: string;
//   showColumnName?: boolean;
//   sortable?: boolean;
//   position?: 'start' | 'end'; // position is mandatory if you are adding new column.
// };

// type titleBarComponentType = {
//   component: any;
//   position: 'start' | 'end';
// };

// type iprops = {
//   className?: string;
//   gridLayout?: 'auto' | 'fixed';
//   gridName?: string;
//   headers?: string[];
//   data: objectType[] | undefined;
//   titleBarComponents?: titleBarComponentType[];
//   customColumns?: { [columnName: string]: customColumnObject };
//   cardView?: (props: { rowData: objectType; refreshData?: () => void }) => JSX.Element;
//   totalRowsCount: number;
//   noDataComponent?: any;
//   showGlobalSearch?: boolean;
//   onGridFiltersApply: (presentPage: number, rowPerPage: number, sortField: string, sortOrder: string, searchString: string) => void;
// };

const DynamicGrid = (props) => {
  const {
    className,
    gridLayout,
    gridName,
    data,
    customColumns,
    totalRowsCount,
    onGridFiltersApply,
    titleBarComponents,
    noDataComponent: NoDataComponent,
    showGlobalSearch,
    cardView: CardView,
  } = props;
  const headers = props.headers || (props?.data?.length && Object.keys(props.data[0])) || [];

  const [positionedColumns, setPositionedColumns] = useState([]);

  const titleBarStartComponents = useMemo(() => {
    let filtered = [];
    titleBarComponents?.map((eachComponent) => {
      if (eachComponent.position === 'start') filtered = [...filtered, eachComponent];
    });
    return filtered;
  }, [titleBarComponents]);
  const titleBarEndComponents = useMemo(() => {
    let filtered = [];
    titleBarComponents?.map((eachComponent) => {
      if (eachComponent.position === 'end') filtered = [...filtered, eachComponent];
    });
    return filtered;
  }, [titleBarComponents]);

  const [initialLoad, setInitialLoad] = useState(true);
  const [presentPage, setPresentPage] = useState(1);
  const [rowPerPage, setRowPerPage] = useState(10);
  const [sortField, setSortField] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const [findValue, setFindValue] = useState('');
  const [refreshId, setRefreshId] = useState(v4());

  function getCellData(header, rowData, i) {
    const Component = customColumns?.[header]?.cellRenderer;
    if (Component) {
      return <Component key={'custom column component' + i} columnName={header} rowData={rowData} refreshData={refreshGridData} />;
    }
    return (
      <span key={'some value' + i} className="tabitem">
        {rowData[header] ? rowData[header].toString() : ''}
      </span>
    );
  }

  const handleSort = (field, order) => {
    onGridFiltersApply(presentPage, rowPerPage, field, order, findValue);
    setSortField(field);
    // setArrowFlag(!arrowflag);
    setSortOrder(order);
  };

  const highlightText = (findval) => {
    const checkTags = document.body.getElementsByClassName('tabitem');
    findval = findval.replace(/([<>*()\\^$.|+?])/g, '\\$1');
    for (let i = 0; i < checkTags.length; i++) {
      const re = new RegExp(`${findval}`, 'gmi');
      checkTags[i].innerHTML = checkTags[i].innerHTML.replaceAll(/(<mark style="background-color:yellow">|<\/mark>)/gim, '');
      checkTags[i].innerHTML = checkTags[i].innerHTML.replaceAll(re, `<mark style="background-color:yellow">$&</mark>`); //$& is the last matched search string in ReGex
    }
  };

  function handleFindInput(e) {
    if (e.target.value == '') {
      handleFindCancel();
    }
    // highlightText(e.target.value);
    setFindValue(e.target.value);
  }

  function handleFindSubmit() {
    if (findValue) {
      onGridFiltersApply(1, rowPerPage, sortField, sortOrder, findValue);
      highlightText(findValue);
    }
  }

  function handleFindCancel() {
    const findInput = document.body.querySelector('.findInput') ;
    findInput.value = '';
    setFindValue('');
    onGridFiltersApply(presentPage, rowPerPage, sortField, sortOrder, '');
    highlightText(findValue);
  }

  function refreshGridData() {
    setRefreshId(v4());
  }

  function getColumnAlignment(columnStyle) {
    if (columnStyle == 'left') return 'justify-start';
    else if (columnStyle == 'right') return 'justify-end';
    else return 'justify-center';
  }

  function getColumnTextAlignment(columnStyle) {
    if (columnStyle == 'left') return 'text-left';
    else if (columnStyle == 'right') return 'text-right';
    else return 'text-center';
  }

  useEffect(() => {
    highlightText(findValue);
  }, [data, findValue]);

  useEffect(() => {
    let page = presentPage;
    onGridFiltersApply(page, rowPerPage, sortField, sortOrder, findValue);
    if (totalRowsCount > 0) {
      const pages = Math.ceil(totalRowsCount / rowPerPage);
      if (presentPage > pages) {
        setPresentPage(pages);
        page = pages;
      }
    }
    setInitialLoad(false);
  }, [refreshId]);

  useEffect(() => {
    const customColumnsFromPros = Object.keys(customColumns || {});

    let startingColumns = [];
    let middleColumns = [];
    let endingColumns = [];

    for (const key in customColumns) {
      if (customColumns[key].position === 'start') startingColumns = [...startingColumns, key];
      else if (customColumns[key].position === 'end') endingColumns = [...endingColumns, key];
    }

    headers.map((columnName, i) => {
      if (customColumns?.[columnName]) {
        if (!customColumns[columnName].position) middleColumns = [...middleColumns, columnName];
      } else middleColumns = [...middleColumns, columnName];
    });
    setPositionedColumns([...startingColumns, ...middleColumns, ...endingColumns]);
  }, [data]);

  return (
    <>
      <div className={`grow mt-2 w-full flex flex-col gap-1 ${className}`}>
        <div className=" min-h-[36px] flex flex-wrap justify-center md:justify-between items-center gap-3  mb-6">
          {gridName && (
            <span className="text-xl font-semibold capitalize" test-id="page-title">
              {gridName}
            </span>
          )}
          {titleBarComponents && titleBarComponents?.length > 0 && (
            <div className="min-h-[36px] px-2 md:flex-1 flex items-center justify-between">
              {titleBarStartComponents.length > 0 && (
                <div className="w-full flex items-center gap-4">
                  {titleBarStartComponents.map((componentObj, i) => {
                    const Component = componentObj.component;
                    return <Component key={'titlebar start component' + i} refreshData={refreshGridData} />;
                  })}
                </div>
              )}
              {titleBarEndComponents.length > 0 && (
                <div className="w-full flex justify-end items-center gap-4">
                  {titleBarEndComponents.map((componentObj, i) => {
                    const Component = componentObj.component;
                    return <Component key={'titlebar end component' + i} refreshData={refreshGridData} />;
                  })}
                </div>
              )}
            </div>
          )}

          {!(showGlobalSearch === false) && (data?.length != 0 || findValue) && (<>
            <div className="w-full md:w-max findForm flex justify-center items-center gap-6">
              <div className="min-h-[44px] w-[300px] pl-2 pr-1 py-2 flex items-center gap-1 rounded-md border  dark:border-gray-600">
                <svg
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
                <input
                  className="focus:outline-0 findInput dark:bg-slate-900"
                  autoFocus
                  onChange={handleFindInput}
                  onKeyDown={(e) => {
                    if (e.key == 'Enter') {
                      e.preventDefault();
                      handleFindSubmit();
                    }
                  }}
                  defaultValue={findValue}
                  type="search"
                  placeholder="Search..."
                ></input>
              </div>

              {/* <div className="flex gap-1">
                <button
                  onClick={handleFindSubmit}
                  className="w-full md:w-auto whitespace-nowrap  flex items-center justify-center py-2 px-4 text-sm font-medium  bg-white rounded-lg border  hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  type="button"
                >
                  Find All
                </button>
                <button
                  onClick={handleFindCancel}
                  className="w-full md:w-auto whitespace-nowrap  flex items-center justify-center py-2 px-4 text-sm font-medium  bg-white rounded-lg border  hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  Clear
                </button>
              </div> */}
              <div className='p-3 border rounded-md'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M18.125 15.625H9.91125C9.63172 14.5498 8.66172 13.75 7.5 13.75C6.33828 13.75 5.36828 14.5498 5.08875 15.625H1.875C1.52953 15.625 1.25 15.9048 1.25 16.25C1.25 16.5952 1.52953 16.875 1.875 16.875H5.08875C5.36828 17.9502 6.33828 18.75 7.5 18.75C8.66172 18.75 9.63172 17.9502 9.91125 16.875H18.125C18.4705 16.875 18.75 16.5952 18.75 16.25C18.75 15.9048 18.4705 15.625 18.125 15.625ZM7.5 17.5C6.81094 17.5 6.25 16.9394 6.25 16.25C6.25 15.5606 6.81094 15 7.5 15C8.18906 15 8.75 15.5606 8.75 16.25C8.75 16.9394 8.18906 17.5 7.5 17.5ZM18.125 9.375H14.9113C14.6317 8.29984 13.6617 7.5 12.5 7.5C11.3383 7.5 10.3683 8.29984 10.0887 9.375H1.875C1.52953 9.375 1.25 9.65484 1.25 10C1.25 10.3452 1.52953 10.625 1.875 10.625H10.0887C10.3683 11.7002 11.3383 12.5 12.5 12.5C13.6617 12.5 14.6317 11.7002 14.9113 10.625H18.125C18.4705 10.625 18.75 10.3452 18.75 10C18.75 9.65484 18.4705 9.375 18.125 9.375ZM12.5 11.25C11.8109 11.25 11.25 10.6894 11.25 10C11.25 9.31063 11.8109 8.75 12.5 8.75C13.1891 8.75 13.75 9.31063 13.75 10C13.75 10.6894 13.1891 11.25 12.5 11.25ZM1.875 4.375H5.08875C5.36828 5.45016 6.33828 6.25 7.5 6.25C8.66172 6.25 9.63172 5.45016 9.91125 4.375H18.125C18.4705 4.375 18.75 4.09516 18.75 3.75C18.75 3.40484 18.4705 3.125 18.125 3.125H9.91125C9.63172 2.04984 8.66172 1.25 7.5 1.25C6.33828 1.25 5.36828 2.04984 5.08875 3.125H1.875C1.52953 3.125 1.25 3.40484 1.25 3.75C1.25 4.09516 1.52953 4.375 1.875 4.375ZM7.5 2.5C8.18906 2.5 8.75 3.06062 8.75 3.75C8.75 4.43937 8.18906 5 7.5 5C6.81094 5 6.25 4.43937 6.25 3.75C6.25 3.06062 6.81094 2.5 7.5 2.5Z" fill="#6A6A6A"/>
</svg></div>
            </div>
           
            </>
          )}
          <button className={`py-3 bg-[#003B6B] text-white rounded-lg px-8`}> Share</button>
        </div>


        <div className=" flex flex-1 flex-col items-stretch overflow-x-auto">
          {/*do not use data?.length here */}
          {data && data.length != 0 ? (
            <table
              className={`min-w-full hidden md:table ${
                gridLayout ? gridLayout : 'table-fixed'
              } border-collapse border-2 rounded-lg`}
            >
              <thead className=" dark:bg-[#272b41] text-[#004986]">
                <tr className="h-16 border">
                  {positionedColumns.map((columnName, i) => {
                    const minWidth = customColumns?.[columnName]?.minWidth;
                    const width = customColumns?.[columnName]?.width;
                    const maxWidth = customColumns?.[columnName]?.maxWidth;
                    const styleObject = {
                      ...(minWidth && { minWidth }),
                      ...(width && { width }),
                      ...(maxWidth && { maxWidth }),
                    };
                    return (
                      <th
                        key={'positioned column th' + i}
                        className={`${
                          customColumns?.[columnName]?.sortable != false ? 'cursor-pointer hover:bg-[#E8E8E8] dark:hover:bg-slate-700' : ''
                        } `}
                        style={styleObject}
                        onClick={() => {
                          if (customColumns?.[columnName]?.sortable != false) {
                            if (sortOrder == '' || sortField != columnName) {
                              handleSort(`${columnName}`, 'ASC');
                            } else {
                              if (sortOrder == 'ASC') {
                                handleSort(`${columnName}`, 'DESC');
                              } else {
                                handleSort('', '');
                              }
                            }
                          }
                        }}
                      >
                        <div className={`flex items-center ${getColumnAlignment(customColumns?.[columnName]?.alignColumn || 'center')}`}>
                          {customColumns?.[columnName]?.showColumnName === false ? (
                            ' '
                          ) : (
                            <>
                              {/* <span>
                            <Highlighted text={columnName.toUpperCase()} highlight={findValue} />
                          </span> */}

                              <div className="flex flex-row  h-full">
                                <div
                                  className={`flex flex-row gap-1 `}
                                  tabIndex={customColumns?.[columnName]?.showColumnName === false ? -1 : 0}
                                >
                                  <span className={``}>{customColumns?.[columnName]?.headerComponent || customColumns?.[columnName]?.rename || columnName}</span>
                                  <svg
                                    width="6"
                                    height="15"
                                    viewBox="0 0 6 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={`mt-1 ${sortField == columnName && sortOrder != '' ? 'flex' : 'hidden'} ${
                                      sortOrder == 'DESC' ? 'rotate-180' : ''
                                    }`}
                                  >
                                    <path
                                      d="M0.769226 2.76923L3.07692 0.46154M3.07692 0.46154L5.38461 2.76923M3.07692 0.46154V11.5385"
                                      stroke={'currentcolor'}
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </div>
                              </div>

                            </>
                          )}
                        </div>
                      </th>
                    );
                  })}
                </tr>
              </thead>

              <tbody className="">
                {data?.map((obj, i) => (
                  <tr
                    key={obj.TicketNo + 'row' + i + '-'}
                    className={`h-16 odd:bg-white even:bg-white border  even:dark:bg-slate-800 odd:dark:bg-slate-900 hover:bg-blue-50 hover:text-slate-900 hover:dark:bg-slate-700/30 hover:dark:text-current `}
                  >
                    {positionedColumns.map((columnName, j) => (
                      <td
                        key={'custom column' + j + '-' + i}
                        className={`${getColumnTextAlignment(customColumns?.[columnName]?.alignColumn || 'center')}  `}
                      >
                        {getCellData(columnName, obj, i)} {}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <>
              {data != undefined && (
                <div className="grow flex justify-center items-center">{NoDataComponent ? <NoDataComponent /> : <span>No Data</span>}</div>
              )}
            </>
          )}

          {CardView && (
            <div className="md:hidden w-full flex flex-col items-center">
              {data?.map((item, i) => (
                <CardView key={'cardView' + i} rowData={item} refreshData={refreshGridData} />
              ))}
            </div>
          )}
        </div>
        {totalRowsCount >= rowPerPage && data && (
          <div className="m-2 flex flex-row justify-between flex-wrap">
            <div className="w-max text-sm font-normal text-gray-500 dark:text-gray-400">
              <label htmlFor="rows" className="flex flex-wrap gap-2">
               
                <select
                  className="border  p-2 rounded dark:bg-slate-800 cursor-pointer "
                  name="rows"
                  onChange={(e) => {
                    let page = presentPage;
                    setRowPerPage(Number(e.target.value));
                    const pages = Math.ceil(totalRowsCount / Number(e.target.value));
                    if (presentPage > pages) {
                      setPresentPage(pages);
                      page = pages;
                    }
                    onGridFiltersApply(page, Number(e.target.value), sortField, sortOrder, findValue);
                  }}
                >
                  {/* <option value="5">5</option> */}
                  <option value="10">10</option>
                  <option value="20">20</option>
                  <option value="40">40</option>
                  <option value={`${totalRowsCount}`}>All</option>
                </select>
                <div className='flex gap-2 items-center'>
                <span className="hidden md:flex font-semibold text-black">Items Per Page |</span><span> Showing {rowPerPage} of {totalRowsCount} results </span>
                <span className="md:hidden">Items</span>
                </div>
              </label>
            </div>
            <Pagination
              presentPage={presentPage}
              rowsPerPage={rowPerPage}
              totalCount={totalRowsCount}
              onPageChange={(page) => {
                setPresentPage(page);
                onGridFiltersApply(page, rowPerPage, sortField, sortOrder, findValue);
              }}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default DynamicGrid;
