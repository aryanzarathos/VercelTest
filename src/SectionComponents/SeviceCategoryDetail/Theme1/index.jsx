import React, { useEffect, useRef, useState } from 'react';
import LeftArrow from "../../../Assets/SectionComponent/Images/ServiceDetail/leftArrow.svg";
import RightArrow from "../../../Assets/SectionComponent/Images/ServiceDetail/rightArrow.svg"
import { HeadingWrappper, LowerWrapper, MainWrapper, TabButton, TabSection, TabWrapper, TabsContainer } from './ServiceDetailPageStyle'
import ContentTab from "./ContentTab/ContentTab";
import Text from "../../../SectionsLayout/Elements/TextElement/Text"
import AppLinkUrl from '@/CommonComponents/AppLink/AppLinkUrl';

const ServiceCategoryDetailpage = ({ children }) => {
    const scrollRef = useRef(null);
    const tabData = AppLinkUrl.isEditor()?{
    category: [
      {
        _id: '64c5595456be09085cab6917',
        isDeleted: false,
        isHide: false,
        main_category_name: 'Neurology',
        description: 'The Department of radio-diagnosis at Jeevan Hospital 1 is equipped with most advanced diagnostic equipment. Radio-diagnosis plays a crucial role in identification of an ailment. At Jeevan Hospital, our qualified technicians are dedicated to offer a wide range of high quality diagnostic services as below:\n\nThe Department of radio-diagnosis at Jeevan Hospital 1 is equipped with most advanced diagnostic equipment. Radio-diagnosis plays a crucial role in identification of an ailment. At Jeevan Hospital, our qualified technicians are dedicated to offer a wide range of high quality diagnostic services as below:',
        uploadefile: {
          isDeleted: false,
          _id: '64c559523b5fbc082a9be2b3',
          src: 'https://webneed-dev-qa.s3.ap-south-1.amazonaws.com/64c5529b18c35506c9d46344/64c4fc21b8849e081d1b9cb7/1690655058073Rectangle20.png',
          business: '64c5529b18c35506c9d46344',
          owner: '64c4fc21b8849e081d1b9cb7',
          title: 'Rectangle 20.png',
          alt: '',
          key: '64c5529b18c35506c9d46344/64c4fc21b8849e081d1b9cb7/1690655058073Rectangle20.png',
          type: 'img',
          size: 173470,
          desc: '',
          createdAt: '2023-07-29T18:24:18.787Z',
          updatedAt: '2023-07-29T18:24:18.787Z',
          __v: 0
        },
        markAsFeatured: true,
        owner: '64c4fc21b8849e081d1b9cb7',
        business: '64c5529b18c35506c9d46344',
        slug: 'neurology',
        createdAt: '2023-07-29T18:24:20.290Z',
        updatedAt: '2023-07-29T18:24:20.290Z',
        __v: 0,
        service: [
          {
            _id: '64c5529d56be09085cab66bc',
            isDeleted: false,
            isActive: true,
            isHide: false,
            visibleOneSite: true,
            markAsFeatured: true,
            fieldOne: false,
            fieldTwo: false,
            fieldThree: false,
            fieldValidationOne: false,
            fieldValidationTwo: false,
            fieldValidationThree: false,
            allowClientsOnline: true,
            metaKeywords: [
              ''
            ],
            unCategorized: false,
            owner: '64c4fc21b8849e081d1b9cb7',
            business: '64c5529b18c35506c9d46344',
            title: 'Relax & Rejuvenate',
            description: '<p>Indulge in a soothing massage to relax your mind and body.</p>',
            image: {
              src: 'https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjQxMDd8MHwxfHNlYXJjaHwyNXx8RXhjZXB0aW9uYWwlMjBjdXN0b21lciUyMHNlcnZpY2UlMjBmb3IlMjBhJTIwc2VhbWxlc3MlMjBzaG9wcGluZyUyMGV4cGVyaWVuY2V8ZW58MHx8fHwxNjkwNjI4Mzc3fDA&ixlib=rb-4.0.3&q=80&w=1080'
            },
            hoursDuration: 0,
            duration: 10,
            sessionPrice: null,
            slots: null,
            serviceDisablefrom: null,
            serviceDisableto: null,
            firstPlaceholder: '',
            secondPlaceholder: '',
            thirdPlaceholder: '',
            metaTitle: 'Relax & Rejuvenate',
            metaDescription: '',
            urlSlug: 'Relax & Rejuvenate',
            main_category: '64c5595456be09085cab6917',
            createdAt: '2023-07-29T17:55:41.360Z',
            updatedAt: '2023-07-29T18:34:17.174Z',
            __v: 0
          },
          {
            _id: '64ca0120afdd8a08e365bf30',
            isDeleted: false,
            isActive: true,
            isHide: false,
            visibleOneSite: true,
            markAsFeatured: true,
            fieldOne: false,
            fieldTwo: false,
            fieldThree: false,
            fieldValidationOne: false,
            fieldValidationTwo: false,
            fieldValidationThree: false,
            allowClientsOnline: true,
            metaKeywords: [
              ''
            ],
            unCategorized: false,
            owner: '64c4fc21b8849e081d1b9cb7',
            business: '64c5529b18c35506c9d46344',
            title: 'Neuro Surgery',
            description: '<p>The Department of radio-diagnosis at Jeevan Hospital 1 is equipped with most advanced diagnostic equipment. Radio-diagnosis plays a crucial role in identification of an ailment. At Jeevan Hospital, our qualified technicians are dedicated to offer a wide range of high quality diagnostic services as below:<br><br>1st &amp; only Cath Lab (Innova IGS530, GE-USA) in North India with wide detector &amp; tilt table, suitable for both Cardio-Vascular &amp; Neuro Interventional procedures with advanced 3D imaging &amp; CT like images.<br><br>The Department of radio-diagnosis at Jeevan Hospital 1 is equipped with most advanced diagnostic equipment. Radio-diagnosis plays a crucial role in identification of an ailment. At Jeevan Hospital, our qualified technicians are dedicated to offer a wide range of high quality diagnostic services as below:<br></p>',
            image: {
              isDeleted: false,
              _id: '64ca0101038f6b0809954894',
              business: '64c5529b18c35506c9d46344',
              owner: '64c4fc21b8849e081d1b9cb7',
              src: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjQxMDd8MHwxfHNlYXJjaHw1fHxOZXVybyUyMFN1cmdlcnl8ZW58MHx8fHwxNjkwOTYwMTI1fDA&ixlib=rb-4.0.3&q=80&w=1080',
              title: null,
              desc: '',
              alt: 'two men wearing blue lab coats',
              size: 0,
              key: '',
              type: 'img',
              createdAt: '2023-08-02T07:08:49.585Z',
              updatedAt: '2023-08-02T07:08:49.585Z',
              __v: 0
            },
            hoursDuration: 1,
            duration: 5,
            sessionPrice: 1000,
            main_category: '64c5595456be09085cab6917',
            slots: 10,
            serviceDisablefrom: null,
            serviceDisableto: null,
            firstPlaceholder: '',
            secondPlaceholder: '',
            thirdPlaceholder: '',
            metaTitle: '',
            metaDescription: '',
            urlSlug: 'Neuro-Surgery',
            createdAt: '2023-08-02T07:09:20.004Z',
            updatedAt: '2023-08-02T07:09:20.004Z',
            __v: 0
          }
        ]
      }
    ],
    service: {
      _id: '64c5529d56be09085cab66bc',
      isDeleted: false,
      isActive: true,
      isHide: false,
      visibleOneSite: true,
      markAsFeatured: true,
      fieldOne: false,
      fieldTwo: false,
      fieldThree: false,
      fieldValidationOne: false,
      fieldValidationTwo: false,
      fieldValidationThree: false,
      allowClientsOnline: true,
      metaKeywords: [
        ''
      ],
      unCategorized: false,
      owner: '64c4fc21b8849e081d1b9cb7',
      business: '64c5529b18c35506c9d46344',
      title: 'Relax & Rejuvenate',
      description: '<p>Indulge in a soothing massage to relax your mind and body.</p>',
      image: {
        src: 'https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjQxMDd8MHwxfHNlYXJjaHwyNXx8RXhjZXB0aW9uYWwlMjBjdXN0b21lciUyMHNlcnZpY2UlMjBmb3IlMjBhJTIwc2VhbWxlc3MlMjBzaG9wcGluZyUyMGV4cGVyaWVuY2V8ZW58MHx8fHwxNjkwNjI4Mzc3fDA&ixlib=rb-4.0.3&q=80&w=1080'
      },
      hoursDuration: 0,
      duration: 10,
      sessionPrice: null,
      slots: null,
      serviceDisablefrom: null,
      serviceDisableto: null,
      firstPlaceholder: '',
      secondPlaceholder: '',
      thirdPlaceholder: '',
      metaTitle: 'Relax & Rejuvenate',
      metaDescription: '',
      urlSlug: 'Relax & Rejuvenate',
      main_category: '64c5595456be09085cab6917',
      createdAt: '2023-07-29T17:55:41.360Z',
      updatedAt: '2023-07-29T18:34:17.174Z',
      __v: 0
    }
  }: children.data;
    const [activeTab, setActiveTab] = useState('');
    const [serviceData, setServiceData] = useState({});
    const [scrollX, setscrollX] = useState(0);
    const [scrolEnd, setscrolEnd] = useState(false);


    const handleTabClick = (index, data) => {
        setActiveTab(index);
        let newData = {};
        newData = tabData.category && data.find(item => item._id === index);
        setServiceData(newData);
    };

    const isObjectEmpty = Object.keys(tabData.service).length === 0;

    useEffect(() => {
        if(!AppLinkUrl.isEditor()){
        if (isObjectEmpty) {
            setServiceData(tabData.category[0]?.service[0])
            setActiveTab(tabData.category[0]?.service[0]?._id);
        } else {
            setServiceData(tabData.service)
            setActiveTab(tabData.service._id);
        }}
    }, [isObjectEmpty, tabData.category, tabData.service])

useEffect(() => {
    if(AppLinkUrl.isEditor()){
 if (isObjectEmpty) {
            setServiceData(tabData.category[0]?.service[0])
            setActiveTab(tabData.category[0]?.service[0]?._id);
        } else {
            setServiceData(tabData.service)
            setActiveTab(tabData.service._id);
        }
    }
       
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    //Slide click
    const slide = (shift) => {
        scrollRef.current.scrollLeft += shift;
        setscrollX(scrollX + shift);

        if (
            Math.floor(scrollRef.current.scrollWidth - scrollRef.current.scrollLeft) <=
            scrollRef.current.offsetWidth
        ) {
            setscrolEnd(true);
        } else {
            setscrolEnd(false);
        }
    };


    const scrollCheck = () => {
        setscrollX(scrollRef.current.scrollLeft);
        if (
            Math.floor(scrollRef.current.scrollWidth - scrollRef.current.scrollLeft) <=
            scrollRef.current.offsetWidth
        ) {
            setscrolEnd(true);
        } else {
            setscrolEnd(false);
        }
    };

    useEffect(() => {
        //Check width of the scollings
        if (
            scrollRef.current &&
            scrollRef?.current?.scrollWidth === scrollRef?.current?.offsetWidth
        ) {
            setscrolEnd(true);
        } else {
            setscrolEnd(false);
        }
        return () => { };
    }, [scrollRef?.current?.scrollWidth, scrollRef?.current?.offsetWidth]);

    const tabs = [
        {
            id: 1,
            tab: "one",
            content: {
                heading: "Neuro Surgery",
                para: "loremsdssssssssssss sffd",
                image: "",
                buttonText: "sdsdsdsdsdsdsd",
            }
        },
        {
            id: 2,
            tab: "two",
            content: {
                heading: " Surgery",
                para: "gfgfgfg ",
                image: "",
                buttonText: "sdsdsdsdsdsdsd",
            }
        },
        {
            id: 3,
            tab: "three",
            content: {
                heading: "Neuro ",
                para: "ytytytytyytyty",
                image: "",
                buttonText: "sdsdsdsdsdsdsd",
            }
        }
    ]

    const style = {
        MainWrapper: children.custom_section_editable[0],
        HeadingWrappper: children.custom_section_editable[1],
        Heading: children.custom_section_editable[2],
        para: children.custom_section_editable[3],
        LowerWrapper: children.custom_section_editable[4],
        TabsContainer: children.custom_section_editable[5],
        LeftArrow: children.custom_section_editable[6],
        RightArrow: children.custom_section_editable[7],
        TabSection: children.custom_section_editable[8],
        TabButton: children.custom_section_editable[9],
    }


    const contentStyle = {
        ContentWrapper: children.custom_section_editable[10],
        ContentLeftWrapperexport: children.custom_section_editable[11],
        ImageWrapper: children.custom_section_editable[12],
        image: children.custom_section_editable[13],
        BookButton: children.custom_section_editable[14],
        ContentRightWrapper: children.custom_section_editable[15],
        HeadingWrapper: children.custom_section_editable[16],
        Heading: children.custom_section_editable[17],
        ParaWrapper: children.custom_section_editable[18],
        Para: children.custom_section_editable[19],
    }


    return (
        <MainWrapper item={style.MainWrapper}>
            <HeadingWrappper item={style.HeadingWrappper}>
                <Text tagType={style.Heading.tagType} text={tabData?.category[0]?.main_category_name} style={style.Heading.style} />
                <Text tagType={style?.para?.tagType} text={tabData?.category[0]?.description} style={style?.para?.style} />
            </HeadingWrappper>
            <LowerWrapper item={style.LowerWrapper} >
                <TabsContainer item={style.TabsContainer}>
                    {
                        scrollX !== 0 && (
                            <LeftArrow width={style.LeftArrow.style.desktop.width}
                                height={style.LeftArrow.style.desktop.height}
                                fill={style.LeftArrow.style.desktop.fill}
                                onClick={() => slide(-50)}
                            />
                        )

                    }
                    <TabSection item={style.TabSection} ref={scrollRef} onScroll={scrollCheck}>
                        {
                            tabData.category.map((item, key) => (
                                <React.Fragment key={key}>
                                    {
                                        item.service.length > 0 && item.service.map((subItem, index) => (
                                            <TabButton
                                                key={index}
                                                onClick={() => handleTabClick(subItem._id, item.service)}
                                                className={`${activeTab === subItem._id ? "activeTab" : ""} `}
                                                item={style.TabButton}
                                            >
                                                {subItem?.title}
                                            </TabButton>
                                        ))
                                    }
                                </React.Fragment>
                            ))
                        }
                    </TabSection>
                    {
                        !scrolEnd && (
                            <RightArrow
                                width={style.RightArrow.style.desktop.width}
                                height={style?.RightArrow?.style?.desktop?.height}
                                fill={style.RightArrow.style.desktop.fill}
                                onClick={() => slide(+50)}
                            />
                        )
                    }
                </TabsContainer>
                <ContentTab data={serviceData} style={contentStyle} />
            </LowerWrapper>
        </MainWrapper>
    )
}

export default ServiceCategoryDetailpage