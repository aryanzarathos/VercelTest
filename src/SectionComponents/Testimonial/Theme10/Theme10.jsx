import React from 'react';
import Testimonial1 from "../../../Assets/SectionComponent/Images/Testimonial/testimonial1.jpg";
import Image from 'next/image';
import { TestimonialPageListGrid, TestimonialPageListHead, TestimonialPageListItem, TestimonialPageListSection } from './Theme10.style';
const TestimonialTheme10 = () => {
    return (
        <React.Fragment>
            <TestimonialPageListSection>
                <TestimonialPageListHead>
                    <h2>Testimonials</h2>
                    <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, ut.</h3>
                </TestimonialPageListHead>
                <TestimonialPageListGrid>
                    <TestimonialPageListItem >
                        <Image src={Testimonial1} alt='Testimonial Profile' />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, facilis nesciunt! Pariatur vel ad porro. Assumenda aliquam quae facilis possimus.</p>
                        <h6>John</h6>
                    </TestimonialPageListItem>

                    {/* <>
                            < TestimonialPageListItem >
                                <img src={Testimonial1} alt='Testimonial Profile' />
                                <p title="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                <h6>Rajesh Gupta</h6>
                            </TestimonialPageListItem>
                            <TestimonialPageListItem>
                                <img src={Testimonial1} alt='Testimonial Profile' />
                                <p title="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                <h6>Rajesh Gupta</h6>
                            </TestimonialPageListItem>
                            <TestimonialPageListItem>
                                <img src={Testimonial1} alt='Testimonial Profile' />
                                <p title="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                <h6>Rajesh Gupta</h6>
                            </TestimonialPageListItem>
                            <TestimonialPageListItem>
                                <img src={Testimonial1} alt='Testimonial Profile' />
                                <p title="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                <h6>Rajesh Gupta</h6>
                            </TestimonialPageListItem>
                            <TestimonialPageListItem>
                                <img src={Testimonial1} alt='Testimonial Profile' />
                                <p title="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                <h6>Rajesh Gupta</h6>
                            </TestimonialPageListItem>
                            <TestimonialPageListItem>
                                <img src={Testimonial1} alt='Testimonial Profile' />
                                <p title="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                <h6>Rajesh Gupta</h6>
                            </TestimonialPageListItem>
                            <TestimonialPageListItem>
                                <img src={Testimonial1} alt='Testimonial Profile' />
                                <p title="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                <h6>Rajesh Gupta</h6>
                            </TestimonialPageListItem>
                        </> */}

                </TestimonialPageListGrid>
            </TestimonialPageListSection>
        </React.Fragment>
    )
}

export default TestimonialTheme10