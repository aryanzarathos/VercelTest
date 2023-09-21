import React from 'react'
import { List, ListItem, MiscellaneousBody, MiscellaneousHead, MiscellaneousWrapper, ViewMoreFaqsHeroButton, ViewMoreFaqsHeroSection } from './MiscTheme2.style';

const MiscellaneousTheme2 = () => {

    return (
        <>
            <MiscellaneousWrapper>
                <MiscellaneousHead>
                    {/* <h4>Miscellaneous</h4> */}

                    <h2>Miscellaneous</h2>
                    <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti officia fugit voluptatum dicta perspiciatis placeat ad reiciendis delectus magni nobis!</h3>
                </MiscellaneousHead>
                <MiscellaneousBody>
                    <List>
                        <ListItem>
                            Lörem ipsum tens ninade ihar tetöbelt.IDivöhet  <mark>New</mark>

                        </ListItem>

                    </List>

                </MiscellaneousBody>
            </MiscellaneousWrapper>
            <ViewMoreFaqsHeroSection>
                <ViewMoreFaqsHeroButton>
                    View More
                </ViewMoreFaqsHeroButton>
            </ViewMoreFaqsHeroSection>
        </>
    )
}

export default MiscellaneousTheme2
