import React, { useContext } from 'react';
import { useState } from 'react';
import { RatingLabel, StarContainer, StarWrap } from './RatingStar.style';
// import {ReactComponent as StarSvg} from '../../../../Assets/SectionComponent/Images/ReviewsAndRating/star.svg'
import StarSvg from '../../../../Assets/SectionComponent/Images/ReviewsAndRating/star.svg';
import { ReviewContext } from '../Theme1';



const RatingStar = ({ state, title, onRatingClick }) => {
  const data = useContext(ReviewContext);


  const stars = [
    {
      id: 1,
      ratingValue: 1,
    },
    {
      id: 2,
      ratingValue: 2,
    },
    {
      id: 3,
      ratingValue: 3,
    },
    {
      id: 4,
      ratingValue: 4,
    },
    {
      id: 5,
      ratingValue: 5,
    },
  ]
  const [rating, setRating] = useState(null);
  const [onHover, setHover] = useState(null);
  let styles = {
    StarContainer: data?.custom_section_editable[77]?.style,
    StarWrap: data?.custom_section_editable[78]?.style,
    RatingLabel: data?.custom_section_editable[79]?.style,
    RatingLabelInput: data?.custom_section_editable[80]?.style,
    RatingSvg: data?.custom_section_editable[81]?.style

  }
  return (
    <StarContainer item={styles?.StarContainer}>
      {/* <p className='text-xs w-400 base rating-label'>{title ? title : 'Select Stars'}</p> */}
      <StarWrap item={styles?.StarWrap}>
        {/* <i className='star star-filled'></i>
     <i className='star star-empty'></i>
     <i className='star'></i> */}
        {
          stars.map(({ id, ratingValue }) => (
            // <RatingLabel key={id} >
            //   <input type="radio" name="rating" value={ratingValue} onClick={() => { setRating(ratingValue) }} />
            //   <StarSvg className={`star-icon ${ratingValue <= (onHover || rating) ? 'starIcon-filled' : 'starIcon-empty'}`} onMouseEnter={() => { setHover(ratingValue) }} onMouseLeave={() => { setHover(null) }}></StarSvg>
            // </RatingLabel>
            <RatingLabel key={id} item={styles?.RatingLabel} itemInput={styles?.RatingLabelInput} itemRatingSvg={styles?.RatingSvg}>

              <input type="radio" name="rating" value={ratingValue} onClick={(e) => {
                setRating(ratingValue)
                onRatingClick(e.target.value)
              }} />

              <StarSvg height={"22px"} width={"22px"} className={`${ratingValue <= (onHover || rating) ? 'starIcon-filled' : 'starIcon-empty'}`} onMouseEnter={() => { setHover(ratingValue) }} onMouseLeave={() => { setHover(null) }} />
            </RatingLabel>

          ))
        }
      </StarWrap>
    </StarContainer>
  )
}

export default RatingStar