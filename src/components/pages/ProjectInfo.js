import React, { useState } from "react";

const ProjectInfo = () => {
    const [projectSection,setProjectSection]=useState("ProjectDetails")
    return (
        <div className="p-[40px] w-full">
            <div className=" flex justify-between"><span className="text-[#003B6B] font-medium text-2xl">Project Info</span><button className="flex gap-2 bg-[#003B6B] text-white p-3 rounded-md hover:cursor-pointer"><svg className="mt-0.5" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M18.3332 5.00001C18.3332 4.08334 17.5832 3.33334 16.6665 3.33334H3.33317C2.4165 3.33334 1.6665 4.08334 1.6665 5.00001V15C1.6665 15.9167 2.4165 16.6667 3.33317 16.6667H16.6665C17.5832 16.6667 18.3332 15.9167 18.3332 15V5.00001ZM16.6665 5.00001L9.99984 9.15834L3.33317 5.00001H16.6665ZM16.6665 15H3.33317V6.66668L9.99984 10.8333L16.6665 6.66668V15Z" fill="white"/>
</svg><span>Add Suggestions</span></button></div>
            <div className="border-b-2  flex flex-row gap-x-20">
                <span className= {`py-5 ${projectSection==="ProjectDetails" && "text-[#003B6B] border-b-2 border-[#003B6B]"}`} onClick={()=>setProjectSection("ProjectDetails")}>
                    Project Details
                </span>
                <span className= {`py-5 ${projectSection==="Documents&File" && "text-[#003B6B] border-b-2 border-[#003B6B]"}`} onClick={()=>setProjectSection("Documents&File")}>Documents/File</span>
                <span className= {`py-5 ${projectSection==="Tools&Technologies" && "text-[#003B6B] border-b-2 border-[#003B6B]"}`} onClick={()=>setProjectSection("Tools&Technologies")}>Tools & Technologies</span>
            </div>
            
            <div className="flex gap-10 mt-5">
            {projectSection==="ProjectDetails" && <div className="border-2 rounded-md w-full flex flex-col gap-y-4 p-3">
                    <div className="border-2 rounded-md p-2">
                        <details open className="">
                            <summary>Project Id</summary>
                            {/* <div className="bg-gray-100"> */}
                            <div className="flex gap-80 m-8 ">
                                <div className="flex flex-col gap-y-1">
                                    <span className="text-gray-600 text-sm">
                                        Name
                                    </span>
                                    <span>Anitha</span>
                                </div>
                                <div className="flex flex-col gap-y-1">
                                    <span className="text-gray-600 text-sm">
                                        Type
                                    </span>
                                    <span>POC</span>
                                </div>
                                <div className="flex flex-col gap-y-1">
                                    <span className="text-gray-600 text-sm">
                                        Manager
                                    </span>
                                    <span>Pavan</span>
                                </div>
                            </div>
                            <div className="flex gap-72 mx-8">
                                <div className="flex flex-col gap-y-1">
                                    <span className="text-gray-600 text-sm">
                                        Creation Date
                                    </span>
                                    <span>04-03-2010</span>
                                </div>
                                <div className="flex flex-col gap-y-1">
                                    <span className="text-gray-600 text-sm">
                                        End Date
                                    </span>
                                    <span>04-03-2020</span>
                                </div>
                                
                                
                            </div>
                            <div className="flex flex-col gap-y-1 m-8">
                                    <span className="text-gray-600 text-sm">
                                       Description
                                    </span>
                                    <span>The application will have a provision to provide an overview of all internal projects (internal accelerators, internal proof of concepts, internal use application, and internal products) for direct consumption by the employees within the organisation or for collaboration among the employees</span>
                                </div>
                                {/* </div> */}
                        </details>
                    </div>
                    <div className="border-2 rounded-md p-2">
                        <details>
                            <summary className="hr">App URL</summary>
                            <div className="flex flex-col gap-3 m-3">
                            <p >
                            http://www.konmatfix.com
                            </p>
                            <p>http://www.statholdings.com</p>
                            </div>
                        </details>
                    </div>
                    <div className="border-2 rounded-md p-2">
                        <details>
                            <summary>App Demo URL</summary>
                            <p>
                                Epcot is a theme park at Walt Disney World
                                Resort featuring exciting attractions,
                                international pavilions, award-winning fireworks
                                and seasonal special events.
                            </p>
                        </details>
                    </div>
                </div> }
                {projectSection==="Documents&File" && <div> Documents </div> }
                {projectSection==="Tools&Technologies" && <div> Tools & Technologies </div> }

            </div>
        </div>
    );
};

export default ProjectInfo;
