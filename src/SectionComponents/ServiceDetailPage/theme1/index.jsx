import React, { useEffect, useRef, useState } from 'react';
import LeftArrow from "../../../Assets/SectionComponent/Images/ServiceDetail/leftArrow.svg";
import RightArrow from "../../../Assets/SectionComponent/Images/ServiceDetail/rightArrow.svg"
import { HeadingWrappper, LowerWrapper, MainWrapper, TabButton, TabSection, TabWrapper, TabsContainer } from './ServiceDetailPageStyle'
import ContentTab from "./ContentTab/ContentTab";
import Text from "../../../SectionsLayout/Elements/TextElement/Text"
import useAppNavigate from '@/CustomHooks/useAppNavigate';
import { useRouter } from 'next/router';
import AppLinkUrl from '@/CommonComponents/AppLink/AppLinkUrl';
const ServiceDetailpage = ({ children }) => {
    const history = useAppNavigate();
    const tabData = children.data;

    let finalData = AppLinkUrl.isEditor() ? {
    SlugData: {
      _id: '64ca0120afdd8a08e365bf30',
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
      urlSlug: 'Neuro-Surgery'
    },
    allServices: [
      {
        _id: '64c5529d56be09085cab66bc',
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
        main_category: '64c5595456be09085cab6917'
      },
      {
        _id: '64c5529d56be09085cab66ce',
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
        unCategorized: true,
        owner: '64c4fc21b8849e081d1b9cb7',
        business: '64c5529b18c35506c9d46344',
        title: 'Adventure Escapes',
        description: 'Embark on thrilling adventures with expert guides.',
        image: {
          src: 'https://images.unsplash.com/photo-1525328437458-0c4d4db7cab4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjQxMDd8MHwxfHNlYXJjaHwyM3x8RXhjZXB0aW9uYWwlMjBjdXN0b21lciUyMHNlcnZpY2UlMjBmb3IlMjBhJTIwc2VhbWxlc3MlMjBzaG9wcGluZyUyMGV4cGVyaWVuY2V8ZW58MHx8fHwxNjkwNjI4Mzc3fDA&ixlib=rb-4.0.3&q=80&w=1080'
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
        metaTitle: '',
        metaDescription: '',
        urlSlug: 'Adventure Escapes',
        main_category: '64c5529d56be09085cab66b0'
      },
      {
        _id: '64c5529d56be09085cab66e0',
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
        unCategorized: true,
        owner: '64c4fc21b8849e081d1b9cb7',
        business: '64c5529b18c35506c9d46344',
        title: 'Expert Consultations',
        description: 'Book one-on-one consultations with industry professionals.',
        image: {
          src: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjQxMDd8MHwxfHNlYXJjaHwyMHx8RXhjZXB0aW9uYWwlMjBjdXN0b21lciUyMHNlcnZpY2UlMjBmb3IlMjBhJTIwc2VhbWxlc3MlMjBzaG9wcGluZyUyMGV4cGVyaWVuY2V8ZW58MHx8fHwxNjkwNjI4Mzc3fDA&ixlib=rb-4.0.3&q=80&w=1080'
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
        metaTitle: '',
        metaDescription: '',
        urlSlug: 'Expert Consultations',
        main_category: '64c5529d56be09085cab66b0'
      },
      {
        _id: '64c5529d56be09085cab66f2',
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
        unCategorized: true,
        owner: '64c4fc21b8849e081d1b9cb7',
        business: '64c5529b18c35506c9d46344',
        title: 'Virtual Tutoring',
        description: 'Connect with experienced tutors for personalized learning online.',
        image: {
          src: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjQxMDd8MHwxfHNlYXJjaHwxMHx8RXhjZXB0aW9uYWwlMjBjdXN0b21lciUyMHNlcnZpY2UlMjBmb3IlMjBhJTIwc2VhbWxlc3MlMjBzaG9wcGluZyUyMGV4cGVyaWVuY2V8ZW58MHx8fHwxNjkwNjI4Mzc3fDA&ixlib=rb-4.0.3&q=80&w=1080'
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
        metaTitle: '',
        metaDescription: '',
        urlSlug: 'Virtual Tutoring',
        main_category: '64c5529d56be09085cab66b0'
      },
      {
        _id: '64c5529d56be09085cab6704',
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
        unCategorized: true,
        owner: '64c4fc21b8849e081d1b9cb7',
        business: '64c5529b18c35506c9d46344',
        title: 'Pet Care & Sitting',
        description: 'Trustworthy pet care and sitting services for your furry friends.',
        image: {
          src: 'https://images.unsplash.com/photo-1509985903765-ec29ecd17bc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjQxMDd8MHwxfHNlYXJjaHwxNnx8RXhjZXB0aW9uYWwlMjBjdXN0b21lciUyMHNlcnZpY2UlMjBmb3IlMjBhJTIwc2VhbWxlc3MlMjBzaG9wcGluZyUyMGV4cGVyaWVuY2V8ZW58MHx8fHwxNjkwNjI4Mzc3fDA&ixlib=rb-4.0.3&q=80&w=1080'
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
        metaTitle: '',
        metaDescription: '',
        urlSlug: 'Pet Care & Sitting',
        main_category: '64c5529d56be09085cab66b0'
      },
      {
        _id: '64c5529d56be09085cab6716',
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
        unCategorized: true,
        owner: '64c4fc21b8849e081d1b9cb7',
        business: '64c5529b18c35506c9d46344',
        title: 'Home Cleaning & Organizing',
        description: 'Get your home spotless with professional cleaning and organizing services.',
        image: {
          src: 'https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjQxMDd8MHwxfHNlYXJjaHwxfHxFeGNlcHRpb25hbCUyMGN1c3RvbWVyJTIwc2VydmljZSUyMGZvciUyMGElMjBzZWFtbGVzcyUyMHNob3BwaW5nJTIwZXhwZXJpZW5jZXxlbnwwfHx8fDE2OTA2MjgzNzd8MA&ixlib=rb-4.0.3&q=80&w=1080'
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
        metaTitle: '',
        metaDescription: '',
        urlSlug: 'Home Cleaning & Organizing',
        main_category: '64c5529d56be09085cab66b0'
      },
      {
        _id: '64c5529d56be09085cab6728',
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
        unCategorized: true,
        owner: '64c4fc21b8849e081d1b9cb7',
        business: '64c5529b18c35506c9d46344',
        title: 'Fitness Coaching',
        description: 'Achieve your fitness goals with personalized coaching sessions.',
        image: {
          src: 'https://images.unsplash.com/photo-1475998893297-4da48a6e037d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjQxMDd8MHwxfHNlYXJjaHw1fHxFeGNlcHRpb25hbCUyMGN1c3RvbWVyJTIwc2VydmljZSUyMGZvciUyMGElMjBzZWFtbGVzcyUyMHNob3BwaW5nJTIwZXhwZXJpZW5jZXxlbnwwfHx8fDE2OTA2MjgzNzd8MA&ixlib=rb-4.0.3&q=80&w=1080'
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
        metaTitle: '',
        metaDescription: '',
        urlSlug: 'Fitness Coaching',
        main_category: '64c5529d56be09085cab66b0'
      },
      {
        _id: '64c5529d56be09085cab673a',
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
        unCategorized: true,
        owner: '64c4fc21b8849e081d1b9cb7',
        business: '64c5529b18c35506c9d46344',
        title: 'Event Planning Assistance',
        description: 'Find skilled event planners to create unforgettable occasions.',
        image: {
          src: 'https://images.unsplash.com/photo-1555529669-2269763671c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjQxMDd8MHwxfHNlYXJjaHwxMnx8RXhjZXB0aW9uYWwlMjBjdXN0b21lciUyMHNlcnZpY2UlMjBmb3IlMjBhJTIwc2VhbWxlc3MlMjBzaG9wcGluZyUyMGV4cGVyaWVuY2V8ZW58MHx8fHwxNjkwNjI4Mzc3fDA&ixlib=rb-4.0.3&q=80&w=1080'
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
        metaTitle: '',
        metaDescription: '',
        urlSlug: 'Event Planning Assistance',
        main_category: '64c5529d56be09085cab66b0'
      },
      {
        _id: '64c5529d56be09085cab674c',
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
        unCategorized: true,
        owner: '64c4fc21b8849e081d1b9cb7',
        business: '64c5529b18c35506c9d46344',
        title: 'Digital Marketing Solutions',
        description: 'Boost your business with expert digital marketing services.',
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
        metaTitle: '',
        metaDescription: '',
        urlSlug: 'Digital Marketing Solutions',
        main_category: '64c5529d56be09085cab66b0'
      },
      {
        _id: '64c5529d56be09085cab675e',
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
        unCategorized: true,
        owner: '64c4fc21b8849e081d1b9cb7',
        business: '64c5529b18c35506c9d46344',
        title: 'Home Repairs & Maintenance',
        description: 'Book skilled professionals for home repairs and maintenance tasks.',
        image: {
          src: 'https://images.unsplash.com/photo-1601598704991-eef6114775e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjQxMDd8MHwxfHNlYXJjaHw2fHxFeGNlcHRpb25hbCUyMGN1c3RvbWVyJTIwc2VydmljZSUyMGZvciUyMGElMjBzZWFtbGVzcyUyMHNob3BwaW5nJTIwZXhwZXJpZW5jZXxlbnwwfHx8fDE2OTA2MjgzNzd8MA&ixlib=rb-4.0.3&q=80&w=1080'
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
        metaTitle: '',
        metaDescription: '',
        urlSlug: 'Home Repairs & Maintenance',
        main_category: '64c5529d56be09085cab66b0'
      },
      {
        _id: '64c5529d56be09085cab6770',
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
        unCategorized: true,
        owner: '64c4fc21b8849e081d1b9cb7',
        business: '64c5529b18c35506c9d46344',
        title: 'Art & Design Workshops',
        description: 'Unleash your creativity through inspiring art and design workshops.',
        image: {
          src: 'https://images.unsplash.com/photo-1516274626895-055a99214f08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjQxMDd8MHwxfHNlYXJjaHwxMXx8RXhjZXB0aW9uYWwlMjBjdXN0b21lciUyMHNlcnZpY2UlMjBmb3IlMjBhJTIwc2VhbWxlc3MlMjBzaG9wcGluZyUyMGV4cGVyaWVuY2V8ZW58MHx8fHwxNjkwNjI4Mzc3fDA&ixlib=rb-4.0.3&q=80&w=1080'
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
        metaTitle: '',
        metaDescription: '',
        urlSlug: 'Art & Design Workshops',
        main_category: '64c5529d56be09085cab66b0'
      },
      {
        _id: '64c5529d56be09085cab6782',
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
        unCategorized: true,
        owner: '64c4fc21b8849e081d1b9cb7',
        business: '64c5529b18c35506c9d46344',
        title: 'Health & Nutrition Guidance',
        description: 'Receive personalized health and nutrition advice from experts.',
        image: {
          src: 'https://images.unsplash.com/photo-1521566652839-697aa473761a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjQxMDd8MHwxfHNlYXJjaHwyfHxFeGNlcHRpb25hbCUyMGN1c3RvbWVyJTIwc2VydmljZSUyMGZvciUyMGElMjBzZWFtbGVzcyUyMHNob3BwaW5nJTIwZXhwZXJpZW5jZXxlbnwwfHx8fDE2OTA2MjgzNzd8MA&ixlib=rb-4.0.3&q=80&w=1080'
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
        metaTitle: '',
        metaDescription: '',
        urlSlug: 'Health & Nutrition Guidance',
        main_category: '64c5529d56be09085cab66b0'
      },
      {
        _id: '64c5529d56be09085cab6794',
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
        unCategorized: true,
        owner: '64c4fc21b8849e081d1b9cb7',
        business: '64c5529b18c35506c9d46344',
        title: 'Language Lessons',
        description: 'Learn a new language with experienced language instructors.',
        image: {
          src: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjQxMDd8MHwxfHNlYXJjaHw4fHxFeGNlcHRpb25hbCUyMGN1c3RvbWVyJTIwc2VydmljZSUyMGZvciUyMGElMjBzZWFtbGVzcyUyMHNob3BwaW5nJTIwZXhwZXJpZW5jZXxlbnwwfHx8fDE2OTA2MjgzNzd8MA&ixlib=rb-4.0.3&q=80&w=1080'
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
        metaTitle: '',
        metaDescription: '',
        urlSlug: 'Language Lessons',
        main_category: '64c5529d56be09085cab66b0'
      },
      {
        _id: '64c5529d56be09085cab67a6',
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
        unCategorized: true,
        owner: '64c4fc21b8849e081d1b9cb7',
        business: '64c5529b18c35506c9d46344',
        title: 'Legal Consultations',
        description: 'Consult with knowledgeable lawyers for legal guidance.',
        image: {
          src: 'https://images.unsplash.com/photo-1593412578702-3332c86f3db3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjQxMDd8MHwxfHNlYXJjaHwyOHx8RXhjZXB0aW9uYWwlMjBjdXN0b21lciUyMHNlcnZpY2UlMjBmb3IlMjBhJTIwc2VhbWxlc3MlMjBzaG9wcGluZyUyMGV4cGVyaWVuY2V8ZW58MHx8fHwxNjkwNjI4Mzc3fDA&ixlib=rb-4.0.3&q=80&w=1080'
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
        metaTitle: '',
        metaDescription: '',
        urlSlug: 'Legal Consultations',
        main_category: '64c5529d56be09085cab66b0'
      },
      {
        _id: '64c5529d56be09085cab67b8',
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
        unCategorized: true,
        owner: '64c4fc21b8849e081d1b9cb7',
        business: '64c5529b18c35506c9d46344',
        title: 'Career Coaching',
        description: 'Advance your career with professional career coaching services.',
        image: {
          src: 'https://images.unsplash.com/photo-1487744480471-9ca1bca6fb7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjQxMDd8MHwxfHNlYXJjaHw0fHxFeGNlcHRpb25hbCUyMGN1c3RvbWVyJTIwc2VydmljZSUyMGZvciUyMGElMjBzZWFtbGVzcyUyMHNob3BwaW5nJTIwZXhwZXJpZW5jZXxlbnwwfHx8fDE2OTA2MjgzNzd8MA&ixlib=rb-4.0.3&q=80&w=1080'
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
        metaTitle: '',
        metaDescription: '',
        urlSlug: 'Career Coaching',
        main_category: '64c5529d56be09085cab66b0'
      },
      {
        _id: '64c5529d56be09085cab67ca',
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
        unCategorized: true,
        owner: '64c4fc21b8849e081d1b9cb7',
        business: '64c5529b18c35506c9d46344',
        title: 'Tech Support',
        description: 'Get reliable tech support and troubleshooting for your devices.',
        image: {
          src: 'https://images.unsplash.com/photo-1601924349924-e2da825ad42a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjQxMDd8MHwxfHNlYXJjaHwzfHxFeGNlcHRpb25hbCUyMGN1c3RvbWVyJTIwc2VydmljZSUyMGZvciUyMGElMjBzZWFtbGVzcyUyMHNob3BwaW5nJTIwZXhwZXJpZW5jZXxlbnwwfHx8fDE2OTA2MjgzNzd8MA&ixlib=rb-4.0.3&q=80&w=1080'
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
        metaTitle: '',
        metaDescription: '',
        urlSlug: 'Tech Support',
        main_category: '64c5529d56be09085cab66b0'
      },
      {
        _id: '64ca0120afdd8a08e365bf30',
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
        urlSlug: 'Neuro-Surgery'
      },
      {
        _id: '64ca01d0afdd8a08e365c054',
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
        urlSlug: 'Neuro-Physian'
      },
      {
        _id: '64ca020dafdd8a08e365c0c6',
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
        urlSlug: 'Xray'
      },
      {
        _id: '64ca026dafdd8a08e365c15b',
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
        urlSlug: 'Dialysis'
      }
    ]
} : tabData
    const [activeTab, setActiveTab] = useState(finalData?.SlugData?._id ? finalData?.SlugData?._id : 0);

    const handleTabClick = (index, slug) => {
        setActiveTab(index);
        const newSlug = slug; // Replace with your new slug
        history(`/service-details/${newSlug}`)
    };

    const scrollRef = useRef(null);
    const [scrollX, setscrollX] = useState(0);
    const [scrolEnd, setscrolEnd] = useState(false);
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

    // console.log("", "finalData")
    return (
        <MainWrapper item={style.MainWrapper}>
            <HeadingWrappper item={style.HeadingWrappper}>
                <Text tagType={style.Heading.tagType} text={style.Heading.text} style={style.Heading.style} />
                <Text tagType={style.para.tagType} text={style.para.text} style={style.para.style} />
            </HeadingWrappper>
            <LowerWrapper item={style.LowerWrapper} >
                <>
                    <>
                        <TabsContainer item={style.TabsContainer}>
                            {
                                scrollX !== 0 && (
                                    <LeftArrow
                                        width={style.LeftArrow.style.desktop.width}
                                        height={style.LeftArrow.style.desktop.height}
                                        fill={style.LeftArrow.style.desktop.fill}
                                        onClick={() => slide(-50)}
                                    />
                                )
                            }
                            <TabSection item={style.TabSection} ref={scrollRef} onScroll={scrollCheck}>

                                {
                                    finalData.allServices && finalData.allServices.map((item, index) => (
                                        <TabButton
                                            key={index}
                                            onClick={() => handleTabClick(item._id, item.urlSlug)}
                                            className={`${activeTab === item._id ? "activeTab" : ""} `}
                                            item={style.TabButton}
                                        >
                                            {item.title}
                                        </TabButton>
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
                        <ContentTab data={finalData.SlugData} style={contentStyle} />
                    </>
                </>
            </LowerWrapper>
        </MainWrapper>
    )
}

export default ServiceDetailpage