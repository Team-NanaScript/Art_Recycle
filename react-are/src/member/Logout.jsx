import React, { useCallback, useEffect } from "react";
import { useHistory } from "react-router";
import { useUserContext } from "../context/UserContext";
import { fetchLogout } from "../modules/memberFetch";

function Logout() {
  const { setUser } = useUserContext();
  const history = useHistory();

  const fetchUserOut = useCallback(async () => {
    await fetchLogout();
    console.log("fetchUserOut");
    await setUser([]);
    history.replace("/");
  }, [setUser]);

  useEffect(fetchUserOut, [fetchUserOut]);

  return <></>;
}

export default Logout;
