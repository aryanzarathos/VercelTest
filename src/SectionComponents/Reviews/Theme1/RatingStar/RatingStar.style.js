import styled from "styled-components"
import StarSvg from '../../../../Assets/SectionComponent/Images/ReviewsAndRating/star.svg'


export const StarContainer = styled.div`
background: ${({item})=>item?.desktop?.background};

`
export const StarWrap = styled.div`
  display: ${({item})=>item?.desktop?.display};
  align-items: ${({ item }) => item?.desktop?.alignItems};
  justify-content: ${({ item }) => item?.desktop?.justifyContent};
  gap: ${({ item }) => item?.desktop?.gap};
  @media screen and (max-width: 767px) {
  gap:${({ item }) => item?.mobile?.display};
  }
`

export const RatingLabel = styled.label`
   input[type='radio'] {
    display: ${({ itemInput }) => itemInput?.desktop?.display};
  }

.starIcon-filled {
  fill: ${({ itemRatingSvg }) => itemRatingSvg?.desktop?.fill};
}

.starIcon-empty {
  fill: ${({ itemRatingSvg }) => itemRatingSvg?.desktop?.unFill};
}
`