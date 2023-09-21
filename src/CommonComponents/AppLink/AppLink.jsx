import Link from "next/link";
import { bool } from "prop-types";
import React from "react";

const AppLink = (props) => {

  return (
    <React.Fragment>
    
    <Link exact={true} href={props.href} {...props}>
          {props.hasOwnProperty("children") ? props.children : props.title}
        </Link>
    </React.Fragment>
  );
};

// AppLink.defaultProps = {
//     createsubdomain: false,
// }

AppLink.propTypes = {
  createsubdomain: bool,
};

export default AppLink;
