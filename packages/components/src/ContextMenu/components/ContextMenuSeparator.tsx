import { FC } from "react";

import classes from "../ContextMenu.module.css";

const Separator: FC = () => {
  return (
    <div className={classes["OuicontextMenu_separator_container"]}>
      <div className={classes["OuicontextMenu_separator_icon"]}></div>
      <div className={classes["OuicontextMenu_separator"]}></div>
    </div>
  );
};

export default Separator;
