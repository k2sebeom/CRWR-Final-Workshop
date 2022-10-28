import React from "react";
import './page.css'

function Page({ content, image }: any) {
  return (
    <div className="container">
      <div className="content">
        {content}
      </div>
      <div className="image">
        {image}
      </div>
    </div>
  )
}

export default Page;
