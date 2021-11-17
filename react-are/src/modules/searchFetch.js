const fetchOption = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "http://localhost:3000",
  },
  credentials: "include",
};

const hashSearch = async (hashTagList) => {
  // const hashSearch = async (strTmp) => {
  fetchOption.body = JSON.stringify(hashTagList);

  const res = await fetch("http://localhost:5000/hash", fetchOption);
  //   const res = await fetch("http://localhost:5000/hash", strTmp);

  const result = await res.json();
  return result;
};
