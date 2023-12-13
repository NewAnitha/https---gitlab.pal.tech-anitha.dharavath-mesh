import React, { useState } from "react";

const Documents = () => {
    const [documentSection,setDocumentSection]=useState("RFP")
    return (
        <div className="p-[40px] w-full">
            <div className="text-[#003B6B] font-medium  text-2xl">Documents</div>
            <div className="border-b-2  flex flex-row gap-x-20">
                <span className= {`py-5 ${documentSection==="RFP" && "text-[#003B6B] border-b-2 border-[#003B6B]"}`} onClick={()=>setDocumentSection("RFP")}>
                    RFP's
                </span>
                <span className= {`py-5 ${documentSection==="CaseStudies" && "text-[#003B6B] border-b-2 border-[#003B6B]"}`} onClick={()=>setDocumentSection("CaseStudies")}>Case Studies</span>
            </div>
            
            <div className="flex gap-10 mt-5">
            {documentSection==="RFP" && <div className="border-2 rounded-md w-full flex flex-col gap-y-4 p-3">
                  rfc
                </div> }
                {documentSection==="CaseStudies" && <div> Case Studies </div> }

            </div>
        </div>
    );
};

export default Documents;
