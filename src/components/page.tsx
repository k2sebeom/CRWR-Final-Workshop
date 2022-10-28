import React from "react";
import './page.css'


function Page({ content, image, setPoint, destination, directions }: any) {
  return (
    <div className="container">
      <div className="content">
        {content}

        <div>
          {
            destination.map((e: number, idx: number) => (
              <button key={`to-btn-${idx}`} onClick={() => {
                console.log(e); 
                setPoint(e);
              }}>To {directions[idx]}</button>
            ))
          }
        </div>
      </div>
      <div className="image">
        {image}
      </div>
    </div>
  )
}

export default Page;
