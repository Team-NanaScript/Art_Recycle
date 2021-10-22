import React, { useState } from "react";
import AteItem from "./AteItem";
import "../css/atelier.css";

export default function AteList({ notMsg, ateList }) {
  const viewList = ateList.map((atelier) => {
    return <AteItem atelier={atelier} />;
  });

  return <section>{ateList.length > 0 ? viewList : notMsg}</section>;
}
