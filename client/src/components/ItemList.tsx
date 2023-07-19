import React from "react";
import { IResponse } from "../views/History";
import { formatDate } from "../utils/utils";

interface Props {
  items: IResponse[];
  currentPage: number;
  itemsPerPage: number;
  limit: number;
}

const ItemList: React.FC<Props> = ({
  items,
  currentPage,
  itemsPerPage,
  limit,
}) => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsToDisplay = items.slice(startIndex, endIndex);

  // Render the list of items
  return (
    <>
      <div className="header flex">
        <div className="heavy">Statut</div>
        <div className="heavy">Latence</div>
        <div className="heavy">Date</div>
      </div>
      <div className="body">
        {itemsToDisplay.map((r) => (
          <div className={`row flex `} key={r.id}>
            <div>{r.response_status}</div>
            <div className={limit < r.latency && limit !== 0 ? "warning" : ""}>
              {r.latency}
            </div>
            <div>{formatDate(r.created_at.toString())}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ItemList;
