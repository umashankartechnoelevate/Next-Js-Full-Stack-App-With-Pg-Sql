// "use client";

// import React, { useState } from "react";

// const dummyData=[1,2,3,4,5,6,7,8,9,10,11,12,13]

const PaginationExample = () => {
  // //   const data = Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`);
  // //   const itemsPerPage = 5;
  // //   const [currentPage, setCurrentPage] = useState(1);

  // //   const totalPages = Math.ceil(data.length / itemsPerPage);
  // //   const startIndex = (currentPage - 1) * itemsPerPage;
  // //   const currentItems = data.slice(startIndex, startIndex + itemsPerPage);

  // //   const goToPage = (page) => {
  // //     if (page >= 1 && page <= totalPages) {
  // //       setCurrentPage(page);
  // //     }
  // //   };

  // const [currentPage,setCurrentPage]=useState(1)

  // const perPage=3

  // const totalPages=Math.ceil(dummyData.length/perPage)

  // const startIndex=(currentPage-1)*perPage

  // const itemsToBeShown=dummyData.slice(startIndex,perPage)

  //   return (
  //     <div style={{ padding: "20px" }}>
  //       {/* <h2>Pagination Example</h2>
  //       <ul>
  //         {currentItems.map((item, index) => (
  //           <li key={index}>{item}</li>
  //         ))}
  //       </ul>

  //       <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
  //         <button
  //           onClick={() => goToPage(currentPage - 1)}
  //           disabled={currentPage === 1}
  //         >
  //           Prev
  //         </button>

  //         {[...Array(totalPages)].map((_, index) => (
  //           <button
  //             key={index}
  //             onClick={() => goToPage(index + 1)}
  //             style={{
  //               fontWeight: currentPage === index + 1 ? "bold" : "normal",
  //             }}
  //           >
  //             {index + 1}
  //           </button>
  //         ))}

  //         <button
  //           onClick={() => goToPage(currentPage + 1)}
  //           disabled={currentPage === totalPages}
  //         >
  //           Next
  //         </button>
  //       </div> */}

  //       <h1>pagination</h1>
  //       {
  //         itemsToBeShown.map((data)=>{
  //             return (
  //                 <p>{data}</p>
  //             )
  //         })
  //       }
  //       {
  //         totalPages.map((_,index)=>{
  //             return (
  //                 <p>{index+1}</p>
  //             )
  //         })
  //       }
  //     </div>
  //   );
  return <></>;
};

export default PaginationExample;
