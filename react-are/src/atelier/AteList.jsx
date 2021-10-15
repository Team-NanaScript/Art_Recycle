import React, { useState } from "react";

export default function AteList({ notMsg }) {
  const [ateList, setAteList] = useState();

  const viewList = ateList.map((atelier) => {
    return <AteItem atelier={atelier} />;
  });

  return (
    <div className="ate_list">{ateList.length > 0 ? viewList : notMsg}</div>
  );
}
