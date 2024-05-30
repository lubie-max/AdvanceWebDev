import React from "react";
import { Item } from "../Redux/Types/searchResponseTypes";

interface itemData {
  item: Item;
}
const GridComponent = (props: itemData) => {
  const { item } = props;

  const { href, data, links } = item;

  console.log(data, href, links);
  // console.table(links)
  const thumbLinks = links?.find((l) => l.rel === "preview")?.href;

  return (
    <>
      <div className="grid-container">
        {data.map((item) => {
          return item.media_type === "video" ? (
            <>
              <div className="grid-item">
                <img src={thumbLinks} alt="" className="thumbnail" style={{ objectFit : 'cover', width: '100%', height: '100%' }} />
                <div className="play-button-overlay">
                  <span className="play-icon">▶</span>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="grid-item">
                <img src={thumbLinks} alt="" className="thumbnail" style={{ objectFit : 'cover', width: '100%', height: '100%' }} />
              </div>
            </>
          );


      

        })}
      </div>
    </>
  );
};

export default GridComponent;
