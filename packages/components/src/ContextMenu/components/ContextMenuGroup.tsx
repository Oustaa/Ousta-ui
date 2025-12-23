import { FC } from "react";
import Separator from "./ContextMenuSeparator";

import classes from "../ContextMenu.module.css";

const ContextmenuGroup: FC<{ title: string }> = ({ title }) => {
  return (
    <>
      <Separator />
      <div className={classes["OuicontextMenu_separator_container"]}>
        <div className={classes["OuicontextMenu_separator_icon"]}></div>
        <span className={classes["OuicontextMenu_group_title"]}>{title}</span>
      </div>
    </>
  );
};

export default ContextmenuGroup;
