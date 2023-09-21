import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { Main, Number, StepNumWrap, ProcessSection, ProcessStep, ProgressContainer, CheckWrap } from './ProgressTheme1.style';
import Text from '../../../SectionsLayout/Elements/TextElement/Text';
import CheckIcon from '../../../Assets/SectionComponent/Icons/check.svg'
import { useRouter } from 'next/router';


const ProgressTheme1 = ({ step, ...progressStyle }) => {
  const [keyValue, setkeyValue] = useState(0);

  const router = useRouter();
  const findLastIndex = router.asPath;
  const routeQuery = findLastIndex.split('/');
  const pathname = routeQuery[routeQuery.length - 1];

  const formSteps = [
    {
      stepNumber: 1,
      steptext: "Cart",
      text: "Cart",
      route: ["cart"],
    },
    {
      stepNumber: 2,
      steptext: 'Shipping Address',
      text: 'Address',
      route: ["shipping-address"],
    },
    {
      stepNumber: 3,
      steptext: 'Payment',
      text: 'Payment',
      route: ["payment", 'guest'],
    }
  ];

  useEffect(() => {
    if (pathname === "shipping-address") {
      setkeyValue(1)
    } else if (pathname === "cart") {
      setkeyValue(0)
    } else if ((pathname === "payment") || (pathname === "guest") || (pathname === `${pathname}`)) {
      setkeyValue(2);
    } else {
      setkeyValue(0);
    }
  }, [pathname])

  return (
    <ProgressContainer item={progressStyle.progressContainer.style}>
      <ProcessSection item={progressStyle.processSection.style} >
        {formSteps.map((e, index) => {
          // console.log(keyValue,index,keyValue >= index, "indexindex");
          return (
            <Main key={index} item={progressStyle.main.style}>
              <ProcessStep item={progressStyle.processStep.style} className={keyValue >= index ? 'active' : ''}>
                {

                  (keyValue > index) ?
                    <CheckWrap item={progressStyle.CheckWrap.style}>
                      <CheckIcon height={progressStyle.CheckSvg.height} width={progressStyle.CheckSvg.width} stroke={progressStyle.CheckSvg.stroke} />
                    </CheckWrap>
                    :
                    <StepNumWrap>
                      <Text
                        tagType={progressStyle.number.tagType}
                        text={e.stepNumber}
                        style={!e.route.includes(pathname) && !(routeQuery.includes('payment')) ? progressStyle.number.style : progressStyle.Activenumber?.style}
                      />
                    </StepNumWrap>
                }
                <Text tagType={progressStyle.text.tagType}
                  text={window.innerWidth <= "767" ? e.text : e.steptext}
                  style={!(keyValue >= index) ? progressStyle.text.style : progressStyle.ActiveText?.style} />
              </ProcessStep>
            </Main>
          )
        })}

      </ProcessSection>
    </ProgressContainer>
  )
}

export default ProgressTheme1;