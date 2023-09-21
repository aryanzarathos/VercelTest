import React from 'react';
// import { ReactComponent as Icon } from '../../../../Assets/SectionComponent/Images/ReviewsAndRating/star.svg'
import Star from '../../../../Assets/SectionComponent/Images/ReviewsAndRating/star.svg'
import { ShowRatingstarContainer, StarWrap } from './ShowRatingStar.style';
import { useContext } from 'react';
import { ReviewContext } from '../Theme1';

const ShowRatingStar = ({ starsValue, width, height }) => {
  const starLength = [1, 2, 3, 4, 5]
  const data = useContext(ReviewContext)
  let styles = {
    ShowRatingstarContainer: data?.custom_section_editable[48]?.style,
    StarWrap: data?.custom_section_editable[49]?.style,
    StarWrapSvg: data?.custom_section_editable[50]?.style,
  }
  return (
    <>
      <ShowRatingstarContainer item={styles?.ShowRatingstarContainer}>
        <StarWrap item={styles?.StarWrap} itemStarSvg={styles?.StarWrapSvg}>
          {
            starLength.map((index) => {
              return (
                // <Icon />
                // <Star />
                <Star fill={`${starsValue >= index ? `${data?.custom_section_editable[50]?.style?.desktop?.fill}` : `${data?.custom_section_editable[50]?.style?.desktop?.unFill}`}`} key={index} />
              )
            })
          }
        </StarWrap>
      </ShowRatingstarContainer>
    </>
  )
}

export default ShowRatingStar