import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { styled } from 'styled-components';

const MainWrapperToolTip = styled.div`
position: relative;
width:fit-content;

`;

const Tooltip = ({ text, placement = "top", children, className, topRight = "150%", toolTipClass, toolTipDownClass }) => {
    const [showTooltip, setShowTooltip] = useState(false);

    const handleMouseEnter = () => {
        setShowTooltip(true);
    };

    const handleMouseLeave = () => {
        setShowTooltip(false);
    };

    const getTooltipStyle = () => {
        let tooltipStyle = {
            position: 'absolute',
            backgroundColor: '#333',
            color: '#fff',
            padding: '5px',
            borderRadius: '4px',
            whiteSpace: 'nowrap',
            zIndex: 1,
            fontFamily: "Poppins",
            fontSize: "12px",
            fontWeight: "400",
            lineHeight: "18px",
            textAlign: "center"
        };

        switch (placement) {
            case 'top':
                tooltipStyle.bottom = '115%';
                tooltipStyle.left = '50%';
                tooltipStyle.transform = 'translateX(-50%)';
                break;
            case 'top-start':
                tooltipStyle.bottom = '115%';
                tooltipStyle.left = '0%';
                break;
            case 'top-right':
                tooltipStyle.bottom = `${topRight}`;
                tooltipStyle.right = '0%';
                break;
            case 'bottom':
                tooltipStyle.top = '115%';
                tooltipStyle.left = '50%';
                tooltipStyle.transform = 'translateX(-50%)';
                break;
            case 'bottom-left':
                tooltipStyle.top = '115%';
                tooltipStyle.left = '0%';
                break;
            case 'bottom-right':
                tooltipStyle.top = '115%';
                tooltipStyle.right = '0%';
                break;
            case 'left':
                tooltipStyle.top = '50%';
                tooltipStyle.right = '110%';
                tooltipStyle.transform = 'translateY(-50%)';
                break;
            case 'right':
                tooltipStyle.top = '50%';
                tooltipStyle.left = '110%';
                tooltipStyle.transform = 'translateY(-50%)';
                break;
            default:
                break;
        }

        return tooltipStyle;
    };
    const downArrow = () => {
        let downArrowStyle = {
            position: "absolute",
            backgroundColor: '#333',
            color: '#fff',
            height: "10px",
            width: "10px",
            transform: "rotate(90 deg)"

        }
        switch (placement) {
            case 'top':
                downArrowStyle.bottom = '115%';
                downArrowStyle.left = '50%';
                downArrowStyle.transform = 'translateX(-50%)';
                break;
            case 'top-start':
                downArrowStyle.bottom = '115%';
                downArrowStyle.left = '0%';
                break;
            case 'top-right':
                downArrowStyle.bottom = `${topRight}`;
                downArrowStyle.right = '0%';
                break;
            case 'bottom':
                downArrowStyle.top = '115%';
                downArrowStyle.left = '50%';
                downArrowStyle.transform = 'translateX(-50%)';
                break;
            case 'bottom-left':
                downArrowStyle.top = '115%';
                downArrowStyle.left = '0%';
                break;
            case 'bottom-right':
                downArrowStyle.top = '115%';
                downArrowStyle.right = '0%';
                break;
            case 'left':
                downArrowStyle.top = '50%';
                downArrowStyle.right = '110%';
                downArrowStyle.transform = 'translateY(-50%)';
                break;
            case 'right':
                downArrowStyle.top = '50%';
                downArrowStyle.left = '110%';
                downArrowStyle.transform = 'translateY(-50%)';
                break;
            default:
                break;
        }
        return downArrowStyle
    }

    return (
        <MainWrapperToolTip
            className={className}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {children}
            {showTooltip && (
                <>
                    <div style={getTooltipStyle()} className={toolTipClass}>{text}</div>
                    <div style={downArrow()} className={toolTipDownClass}></div>
                </>
            )}
        </MainWrapperToolTip>
    );
};

Tooltip.propTypes = {
    text: PropTypes.string.isRequired,
    placement: PropTypes.oneOf(['top', 'bottom', 'left', 'right', "top-start", 'top-right', 'bottom-left', 'bottom-right']),
    children: PropTypes.node.isRequired,
};
export default Tooltip;
