import React, { useState } from "react";
import PageScroller from "react-page-scroller";
import AppBar2 from "./AppBar2";
import CustomAppBar from "./dummyAppBar";
import PageToolBarReusable from "../ToolBarReusable";

const ReactScroll = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [pageName, setPageName] = useState();
  const pageScrollerRef = React.useRef();

  const handlePageChange = (pageNumber) => {
    console.log("Current page:", pageNumber);
    setCurrentPage(pageNumber);
    // if (currentPage === 1 && pageScrollerRef.current) {
    //   pageScrollerRef.current.scrollToPage(1, 0);
    // }
    if (pageNumber === 0) {
      setPageName("IGM details");
    } else if (pageNumber === 1) {
      setPageName("Container Details");
    } else if (pageNumber === 2) {
      setPageName("SingleWindow");
    }
  };

  return (
    <div>
      <div style={{ position: "fixed", width: "118rem" }}>
      <AppBar2 />
      </div>
      <PageScroller
        ref={pageScrollerRef}
        pageOnChange={handlePageChange}
      
        renderAllPagesOnFirstRender={true}
      >
        <CustomAppBar title = 'Job details'/>
        <CustomAppBar title = 'Job detailssss'/>
        <CustomAppBar title = 'Job detailssssssssssnnnnn' /> 
        </PageScroller>
    </div>
  );
};

export default ReactScroll;