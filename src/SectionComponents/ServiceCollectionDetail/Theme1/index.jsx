import React, { useEffect, useRef, useState } from 'react';
import LeftArrow from "../../../Assets/SectionComponent/Images/ServiceDetail/leftArrow.svg";
import RightArrow from "../../../Assets/SectionComponent/Images/ServiceDetail/rightArrow.svg"
import { HeadingWrappper, LowerWrapper, MainWrapper, TabButton, TabSection, TabWrapper, TabsContainer } from './ServiceDetailPageStyle'
import ContentTab from "./ContentTab/ContentTab";
import Text from "../../../SectionsLayout/Elements/TextElement/Text"
import AppLinkUrl from '@/CommonComponents/AppLink/AppLinkUrl';
const ServiceCollectionDetailpage = ({ children }) => {
    const scrollRef = useRef(null);

    const tabData =AppLinkUrl.isEditor()?{
    category: [
      {
        _id: '64c5726a56be09085cab69de',
        show_on_header: false,
        show_on_footer: false,
        service: [
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
          },
          {
            _id: '64ca01d0afdd8a08e365c054',
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
            title: 'Neuro Physian',
            description: '<p>A neurologist is a medical expert who treats conditions related to the central and peripheral nervous system, spinal cord and the brain.<br></p>',
            image: {
              isDeleted: false,
              _id: '64ca01b3038f6b0809954896',
              business: '64c5529b18c35506c9d46344',
              owner: '64c4fc21b8849e081d1b9cb7',
              src: 'https://images.unsplash.com/photo-1664447972779-316251bd8bd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjQxMDd8MHwxfHNlYXJjaHwzfHxOZXVyb3xlbnwwfHx8fDE2OTA4NzM5NTN8MA&ixlib=rb-4.0.3&q=80&w=1080',
              title: 'An artist’s illustration of artificial intelligence (AI). This image represents how machine learning is inspired by neuroscience and the human brain. It was created by Novoto Studio as part of the Visualising AI project launched by Google DeepMind.',
              desc: '',
              alt: 'background pattern',
              size: 0,
              key: '',
              type: 'img',
              createdAt: '2023-08-02T07:11:47.594Z',
              updatedAt: '2023-08-02T07:11:47.594Z',
              __v: 0
            },
            hoursDuration: 1,
            duration: 5,
            sessionPrice: 1000,
            main_category: '64c5597156be09085cab6924',
            slots: 10,
            serviceDisablefrom: null,
            serviceDisableto: null,
            firstPlaceholder: '',
            secondPlaceholder: '',
            thirdPlaceholder: '',
            metaTitle: '',
            metaDescription: '',
            urlSlug: 'Neuro-Physian',
            createdAt: '2023-08-02T07:12:16.666Z',
            updatedAt: '2023-08-02T07:12:16.666Z',
            __v: 0
          },
          {
            _id: '64ca020dafdd8a08e365c0c6',
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
            title: 'Xray',
            description: '<p>X-rays are a type of radiation called electromagnetic waves. X-ray imaging creates pictures of the inside of your body. The images show the parts of your body in different shades of black and white.<br></p>',
            image: {
              isDeleted: false,
              _id: '64ca01f2038f6b0809954898',
              business: '64c5529b18c35506c9d46344',
              owner: '64c4fc21b8849e081d1b9cb7',
              src: 'https://images.unsplash.com/photo-1584555613497-9ecf9dd06f68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjQxMDd8MHwxfHNlYXJjaHwyfHxYcmF5fGVufDB8fHx8MTY5MDk2MDM2N3ww&ixlib=rb-4.0.3&q=80&w=1080',
              title: 'X-ray showing Pneumonia',
              desc: '',
              alt: 'woman in black and white stripe shirt',
              size: 0,
              key: '',
              type: 'img',
              createdAt: '2023-08-02T07:12:50.896Z',
              updatedAt: '2023-08-02T07:12:50.896Z',
              __v: 0
            },
            hoursDuration: 1,
            duration: 10,
            sessionPrice: 1000,
            main_category: '64c5599556be09085cab6931',
            slots: 20,
            serviceDisablefrom: null,
            serviceDisableto: null,
            firstPlaceholder: '',
            secondPlaceholder: '',
            thirdPlaceholder: '',
            metaTitle: '',
            metaDescription: '',
            urlSlug: 'Xray',
            createdAt: '2023-08-02T07:13:17.491Z',
            updatedAt: '2023-08-02T07:13:17.491Z',
            __v: 0
          },
          {
            _id: '64ca026dafdd8a08e365c15b',
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
            title: 'Dialysis',
            description: '<p>Dialysis is a procedure to remove waste products and excess fluid from the blood when the kidneys stop working properly. It often involves diverting blood to a machine to be cleaned.<br></p>',
            image: {
              isDeleted: false,
              _id: '64ca024f038f6b080995489a',
              business: '64c5529b18c35506c9d46344',
              owner: '64c4fc21b8849e081d1b9cb7',
              src: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjQxMDd8MHwxfHNlYXJjaHw2fHxob3NwaXRhbHxlbnwwfHx8fDE2OTA5NjA0NTh8MA&ixlib=rb-4.0.3&q=80&w=1080',
              title: 'Cancer Surgeons',
              desc: '',
              alt: 'people in white shirt holding clear drinking glasses',
              size: 0,
              key: '',
              type: 'img',
              createdAt: '2023-08-02T07:14:23.140Z',
              updatedAt: '2023-08-02T07:14:23.140Z',
              __v: 0
            },
            hoursDuration: 1,
            duration: 5,
            sessionPrice: 1000,
            main_category: '64c559b556be09085cab693e',
            slots: 10,
            serviceDisablefrom: null,
            serviceDisableto: null,
            firstPlaceholder: '',
            secondPlaceholder: '',
            thirdPlaceholder: '',
            metaTitle: '',
            metaDescription: '',
            urlSlug: 'Dialysis',
            createdAt: '2023-08-02T07:14:53.047Z',
            updatedAt: '2023-08-02T07:14:53.047Z',
            __v: 0
          }
        ],
        isDeleted: false,
        metaKeywords: [],
        name: 'Cardiology  ',
        business: '64c5529b18c35506c9d46344',
        owner: '64c4fc21b8849e081d1b9cb7',
        image: {
          isDeleted: false,
          _id: '64c572693b5fbc082a9be2bb',
          business: '64c5529b18c35506c9d46344',
          owner: '64c4fc21b8849e081d1b9cb7',
          src: 'https://images.unsplash.com/photo-1628348070889-cb656235b4eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjQxMDd8MHwxfHNlYXJjaHwxfHxDYXJkaW9sb2d5fGVufDB8fHx8MTY5MDY1MDc1OXww&ixlib=rb-4.0.3&q=80&w=1080',
          title: null,
          desc: '',
          alt: 'person writing on white paper',
          size: 0,
          key: '',
          type: 'img',
          createdAt: '2023-07-29T20:11:21.875Z',
          updatedAt: '2023-07-29T20:11:21.875Z',
          __v: 0
        },
        urlSlug: 'cardiology',
        metaTitle: 'cardiology',
        __v: 0
      }
    ],
    service: {
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
  }: children.data;
    const [activeTab, setActiveTab] = useState('');
    const [filterData, setFilterData] = useState({});


    // const [scrollcheck, setScrollCheck] = useState(false);
    const [scrollX, setscrollX] = useState(0);
    const [scrolEnd, setscrolEnd] = useState(false);


    //Slide click
    const slide = (shift) => {
        const scrollLeft = scrollRef.current.scrollLeft + shift;
        scrollRef.current.scrollLeft = scrollLeft;
        setscrollX(scrollLeft);

        const isScrollEnd = Math.floor(scrollRef.current.scrollWidth - scrollLeft) <= scrollRef.current.offsetWidth;
        setscrolEnd(isScrollEnd);
    };

    const scrollCheck = () => {
        const scrollLeft = scrollRef.current.scrollLeft;
        setscrollX(scrollLeft);

        const isScrollEnd = Math.floor(scrollRef.current.scrollWidth - scrollLeft) <= scrollRef.current.offsetWidth;
        setscrolEnd(isScrollEnd);
    };

    useEffect(() => {
        if (scrollRef.current) {
            const isScrollEnd = scrollRef.current.scrollWidth <= scrollRef.current.offsetWidth;
            setscrolEnd(isScrollEnd);
        }
    }, []);



    const handleTabClick = (index, data) => {
        setActiveTab(index);
        let newData;
        newData = data.find(item => item._id === index);
        setFilterData(newData);
    };

    const isObjectEmpty = Object.keys(tabData.service).length === 0;
    useEffect(() => {
      if(!AppLinkUrl.isEditor()){
        if (isObjectEmpty) {
            setFilterData(tabData?.category?.[0]?.service?.[0])
            setActiveTab(tabData?.category?.[0]?.service?.[0]?._id);
        } else {
            setFilterData(tabData?.service)
            setActiveTab(tabData?.service._id);
        }
      }
    }, [isObjectEmpty, tabData.category, tabData.service])

     useEffect(() => {
      if(AppLinkUrl.isEditor()){
if (isObjectEmpty) {
            setFilterData(tabData?.category?.[0]?.service?.[0])
            setActiveTab(tabData?.category?.[0]?.service?.[0]?._id);
        } else {
            setFilterData(tabData?.service)
            setActiveTab(tabData?.service._id);
        }
      }
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // console.log(filterData, "filterData")

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
                <Text tagType={style.Heading.tagType} text={tabData?.category && tabData?.category?.length ? tabData?.category[0]?.metaTitle : ""} style={style.Heading.style} />
                {/* <Text tagType={style.para.tagType} text={style.para.text} style={style.para.style} /> */}
            </HeadingWrappper>
            <LowerWrapper item={style.LowerWrapper} >
                <>
                    <>
                        <TabsContainer item={style.TabsContainer}>
                            {
                                scrollX !== 0 && (
                                    <LeftArrow onClick={() => slide(-50)} width={style.LeftArrow.style.desktop.width} height={style.LeftArrow.style.desktop.height} fill={style.LeftArrow.style.desktop.fill} />
                                )
                            }
                            <TabSection item={style.TabSection} ref={scrollRef} onScroll={scrollCheck}>
                                {tabData.category && tabData.category[0]?.service?.length > 0 && tabData?.category[0]?.service.map((item, index) => (
                                    <TabButton
                                        key={item.id}
                                        onClick={() => handleTabClick(item._id, tabData?.category[0]?.service)}
                                        className={`${activeTab === item._id ? "activeTab" : ""} `}
                                        item={style.TabButton}
                                    >
                                        {item.title}
                                    </TabButton>
                                ))}

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


                        <ContentTab data={filterData} style={contentStyle} />

                    </>
                </>
            </LowerWrapper>
        </MainWrapper>
    )
}

export default ServiceCollectionDetailpage