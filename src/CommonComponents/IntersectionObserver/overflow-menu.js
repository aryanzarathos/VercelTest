import React, { useState, useMemo } from "react";
import classnames from "classnames";
import styles from "./Intersection.module.scss"
import { styled } from "styled-components";
// const useStyles = MakeStyles(() => ());
const Button = styled.button`
  /* padding:35px; */
  display: flex;
  flex: 0 0 auto;
    position:relative;
    color:#003459; 
    // font-family: 'Gilroy-SemiBold';
    font-size: 16px;
    line-height: 24px;
    transition: all .3s;
    background: #fff;
    border: none;

    &:hover{
        color:#428BC1;
    }
`;

export default function OverflowMenu({ children, className, visibilityMap }) {
  const [anchorEl, setAnchorEl] = useState(false);
  const open = Boolean(anchorEl);
  const classes = {
    // inOverflowMenu: {
    //   "&:hover": {
    //     backgroundColor: "transparent"
    //   }
    // }
  };
  const handleClick = () => {
    setAnchorEl(!anchorEl);
  };

  const handleClose = () => {
    setAnchorEl(false);
  };

  const shouldShowMenu = useMemo(
    () => Object.values(visibilityMap).some((v) => v === false),
    [visibilityMap]
  );
  if (!shouldShowMenu) {
    return null;
  }
  return (
    <>
      <Button
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        More
      </Button>
      {anchorEl && (
        <div
          id="long-menu"
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={handleClose}
        >
          {React.Children.map(children, (child) => {
            if (!visibilityMap[child.props["data-targetid"]]) {
              return (
                <div key={child} onClick={handleClose} className={styles.morePart}>
                  {React.cloneElement(child, {
                    className: classnames(child.className, styles.inOverflowMenu)
                  })}
                </div>
              );
            }
            return null;
          })}

          {
            false && <ul className={styles.submenu}>
              <li><a>browse</a></li>
              <li><a>new file</a></li>
            </ul>}
        </div>
      )

      }


    </>
  );
}
