import React, { ComponentPropsWithRef, FC, PropsWithChildren } from "react";

import classes from "./Table.module.css";

const Table: FC<PropsWithChildren<ComponentPropsWithRef<"table">>> = ({
  children,
  className,
  ...rest
}) => {
  if (!children || (Array.isArray(children) && children.length === 0)) {
    throw new Error("Table must have at least one child");
  }

  if (
    !React.isValidElement(children) &&
    !(Array.isArray(children) && children.every(React.isValidElement))
  ) {
    throw new Error("Invalid child component provided to Table");
  }
  return (
    <table
      role="table"
      {...rest}
      className={`${classes["Ouitable"]} ${className || ""}`}
    >
      {children}
    </table>
  );
};

const Thead: FC<PropsWithChildren<ComponentPropsWithRef<"thead">>> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <thead {...rest} className={`${classes["Ouithead"]} ${className || ""}`}>
      {children}
    </thead>
  );
};

const Tbody: FC<PropsWithChildren<ComponentPropsWithRef<"tbody">>> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <tbody {...rest} className={`${classes["Ouitbody"]} ${className || ""}`}>
      {children}
    </tbody>
  );
};

const Tr: FC<PropsWithChildren<ComponentPropsWithRef<"tr">>> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <tr
      {...rest}
      role="tr"
      className={`${classes["Ouitr"]} ${className || ""}`}
    >
      {children}
    </tr>
  );
};

const Th: FC<PropsWithChildren<ComponentPropsWithRef<"th">>> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <th {...rest} className={`${classes["Ouith"]} ${className || ""}`}>
      {children}
    </th>
  );
};

const Td: FC<PropsWithChildren<ComponentPropsWithRef<"td">>> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <td {...rest} className={`${classes["Ouitd"]} ${className || ""}`}>
      {children}
    </td>
  );
};

export default {
  Root: Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
};
