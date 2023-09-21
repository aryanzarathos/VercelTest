import styled from 'styled-components';
export const FaqsHomeHeroSection = styled.div`
padding: 32px 0;
`;
export const FaqsHomeHero = styled.div``;
export const FaqsHomeHeroHead = styled.div`
margin-bottom: 40px;
text-align: center;
h2{
font-family: 'Montserrat',sans-serif;
font-weight: 700;
font-size: 32px;
line-height: 42px;
color: rgb(52, 63, 100);
display: -webkit-box;
-webkit-line-clamp: 1;
-webkit-box-orient: vertical;
overflow: hidden;
}
`;
export const FaqsHomeHeroDescription = styled.div``;

export const FaqList = styled.ul`
padding: 0 20px;
`;
export const FaqListItem = styled.li`
border-bottom: 1px solid rgb(78, 97, 107);
padding: 16px 0 16px 24px;
h6{
    font-family: 'Montserrat',sans-serif;
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    color: rgb(52, 63, 100);
    position: relative; 
  
  &::before{
    width: 8px;
    height: 8px;
    border-radius:50%;
    background: rgb(52, 63, 100);
    left: -20px;
    top: 8px;
  }
}
p{
    font-family: 'Montserrat',sans-serif;
    font-weight: 400 !important;
    font-size: 16px !important;
    line-height: 28px !important;
    color: rgb(32, 32, 32) !important;
    background: transparent !important;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;

}

`;
export const ViewMoreFaqsHeroSection = styled.div`
display: flex;
justify-content: center;
margin-top: 32px;

`;
export const ViewMoreFaqsHeroButton = styled.a`

font-weight: 400;
font-size: 18px;
line-height: 24px;
background: rgb(52, 63, 100);
border: 1px solid rgb(52, 63, 100);
border-radius: 4px;
color: rgb(255, 255, 255);
padding: 10px 40px;
cursor: pointer;
&:hover{
background: rgb(49, 70, 143);
color: rgb(255, 230, 167);
border: 1px solid rgb(49, 70, 143);
-webkit-transition-duration: 700ms;
-moz-transition-duration: 700ms;
-o-transition-duration: 700ms;
transition-duration: 700ms;
}
`;

export const data = [
    {
        title: 'What is your school philosophy or vision?',
        description: "It’s important to find out what a school’s philosophy or vision is. You want to make sure this is consistent with your own educational beliefs and values. Often, a school’s philosophy is reflected in its mission statement, and is carried out through what’s called a “strategic plan”"
    },
    {
        title: 'What curriculum do you use?',
        description: "You’ll want to make sure that your child has the right learning and academic profile for a school. To do this, you should learn as much as you can about its curriculum. Find out what the curricular guidelines and standards are at the school. You should also ask what their curricular approach is, and whether its more student- or teacher-centred. You want this approach to support your child’s learning needs and style."
    },
    {
        title: 'What are your class sizes and student-to-teacher ratios?',
        description: "Class size can really affect the quality of education. A major perk of many private schools is their smaller class sizes and lower student-to-teacher ratios. This can often lead to more personalized attention, differentiated instruction, and student engagement. However, not all private schools make differentiated learning a priority. How schools take advantage of small class sizes and low student-to-teacher ratios to enhance learning should be a key factor in your decision."
    },
    {
        title: 'How much is tuition and what does it include?',
        description: "Private schools vary widely in price. We can charge anywhere from ₹10,000 to over ₹100,000 for annual tuition.There may also be costs not included in tuition. In some schools, you may have to pay extra for school uniforms, textbooks, food, extracurricular activities, field trips, and other things."
    },
]