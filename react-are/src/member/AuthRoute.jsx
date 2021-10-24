import React, { useCallback, useEffect } from "react";

export const AuthRoute = () => {
  const { user, setUser } = useUserContext();

  const fetchCallback = useCallback(async () => {
    const resultUser = fetchUser();

    if (!resultUser?.userid) {
      setUser(resultUser);
    }
  }, []);
  useEffect(fetchCallback, [fetchCallback]);
  return <></>;
};
