import React from 'react'
import { FaqList, FaqListItem, Faqs, FaqsDescription, FaqsHead, FaqsSection } from './MiscTheme1.style';
const MiscellaneousTheme1 = () => {
  // const handleDownload = (item) => {
  //   if (item.attachment && item.attachment !== "") {
  //     window.open(item.attachment, '_blank');
  //   }
  // }

  return (
    <React.Fragment>

      <FaqsSection>
        <Faqs>
          <FaqsHead>
            <h2>Miscellaneous</h2>
            <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, quam?</h3>
          </FaqsHead>
          <FaqsDescription>
            <FaqList>
              <FaqListItem>
                <h6>
                  Lorem ipsum dolor sit amet.
                </h6>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique sit beatae, placeat eius voluptatum quasi quibusdam? Laboriosam at magni minima quaerat, earum molestiae iste minus, ipsum repudiandae ad dolor officia.</p>
                <button onClick={""}>Download</button>
              </FaqListItem>
            </FaqList>
          </FaqsDescription>
        </Faqs>
      </FaqsSection>
    </React.Fragment>
  )
}

export default MiscellaneousTheme1
