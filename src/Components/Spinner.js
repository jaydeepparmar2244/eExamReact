import React, { useState } from 'react'
import CircleLoader from "react-spinners/CircleLoader";
import { css } from "@emotion/react";

export const Spinner = () => {
  const [Loading, setLoading] = useState(true)
  const [color, setcolor] = useState('#00B98E')
  const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
setTimeout(() => {
  setLoading(false)
}, 500);
  return (
    <>
    {Loading?<div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"><CircleLoader
 color={color} loading={Loading} size={70} css={override}/></div>:<></>}
    </>
  )
}


{/* <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"><div className="spinner-border text-primary" style={{width: "3rem", height: "3rem"}} role="status"><span className="sr-only">Loading...</span></div></div> */}