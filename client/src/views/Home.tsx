import React from "react";

import UrlForm from "../components/UrlForm";
import UrlList from "../components/UrlList";
import { useState } from "react";
import { formatDate } from "../utils/utils";

interface IResponse {
  status: number;
  date: string;
  latency: number;
}

export default function Home() {
  const [dataFormUrl, setData] = useState("");
  const [response, setResponse] = useState<IResponse>({
    status: 0,
    date: "",
    latency: 0,
  });
  const getFormUrl = (
    url: string,
    status: number,
    latency: number,
    date: string
  ) => {
    setData(url);
    setResponse({
      status: status,
      date,
      latency: latency,
    });
  };
  return (
    <React.Fragment>
      <div className="container">
        <div className="card url-form flex">
          <UrlForm getFormUrl={getFormUrl} />

          {/* {response.status ? ( */}
          <div className="response">
            <div className="header flex">
              <div className="heavy">Status</div>
              <div className="heavy">Latence</div>
              <div className="heavy">Date</div>
            </div>
            <div className="row flex">
              <div>{response.status ? response.status : "-"}</div>
              <div>{response.latency ? response.latency : "-"}</div>
              <div>{response.date ? formatDate(response.date) : "-"}</div>
            </div>
          </div>
          {/* ) : (
            ""
          )} */}
        </div>
        <UrlList dataFormUrl={dataFormUrl} />
      </div>
    </React.Fragment>
  );
}
