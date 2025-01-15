import { useEffect, useState } from "react";

import Parse from "parse";
import { IParseServerAPICred, ParseInitialize, SubClasses } from "../client";

export const useParseWebConnect = (parseConfig: IParseServerAPICred) => {
  const [user, setUser] = useState<Parse.User<Parse.Attributes>>();
  const [loadingParse, setLoadingParse] = useState(true);
  useEffect(() => {
    const getConnected = async () => {
      const cloud = new ParseInitialize(parseConfig, SubClasses);
      const currentUser = await Parse.User.currentAsync();
      if (currentUser) {
        setUser(currentUser);
      }
      setLoadingParse(false);
    };

    getConnected();
  }, [parseConfig]);

  return { user, loadingParse };
};
