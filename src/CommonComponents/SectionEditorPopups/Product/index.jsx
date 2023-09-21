/* eslint-disable react/display-name */


import React, { forwardRef, useEffect, useRef, useState } from 'react';
import Modals from '../../Modals';
import ModalHeader from '../../Modals/ModalsHeader';
import ModalBody from '../../Modals/ModalsBody';
import ModalsFooter from '../../Modals/ModalsFooter';
import styles from "./ProductPopUp.module.scss"
import Image from 'next/image';
import Sort from '../../../Assets/SiteEditor/Icons/sort.svg';
import SelectDropDown from '@/CommonComponents/SelectDropdown';
import SearchControl from '@/CommonComponents/SearchControl';
import ShortDropDown from '@/CommonComponents/SortDropDown/ShortDropDown';
import { SearchProduct, SortProduct, getProductList } from '@/store/actions/productList';
import { useDispatch, useSelector } from 'react-redux';
import useTemplateData from '@/CustomHooks/useTemplateData';
import ValidationFile from '@/Classes/ValidationFile';
import { updateManagePopupData } from '@/store/actions/managePopups';
import MultiSelectDropdown from '@/CommonComponents/MultiSelectDropDown';
import { getCollectionList } from '@/store/actions/ecomCollections';
import { getAllCategoryList } from '@/store/actions/ecomCategories';
import ProductCategory from '@/CommonComponents/CategoryDropDown';
import RecordNotFound from '@/CommonComponents/RecordNotFound/RecordNotFound';
import { dummyImg, dummyUserImg2 } from '@/Constant/constants';
import ImageElement from '@/SectionsLayout/Elements/ImageElement/ImageElement';
import SpinnerLoader from '@/CommonComponents/SpinnerLoader/SpinnerLoader';

const data = [
    {
        id: "1",
        ProductLavel: ["Black Tshirt ajksur hjfd dfdkfjd dfkjdfkld dfkdjflsf sklfjsf"],
        url: "https://images.unsplash.com/photo-1654157925394-4b7809721149?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1460&q=80",
        Inventry: "30 in stock for 19 variants",
        Status: "Active",
        Quantity: "12"
    },
    {
        id: "2",
        ProductLavel: ["Black Tshirt ajksur..."],
        url: "https://images.unsplash.com/photo-1654157925394-4b7809721149?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1460&q=80",
        Inventry: "30 in stock for 19 variants",
        Status: "Active",
        Quantity: "12"
    },
    {
        id: "3",
        ProductLavel: ["Black Tshirt ajksur..."],
        url: "https://images.unsplash.com/photo-1654157925394-4b7809721149?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1460&q=80",
        Inventry: "30 in stock for 19 variants",
        Status: "Active",
        Quantity: "12"
    },
    {
        id: "4",
        ProductLavel: ["Black Tshirt ajksur..."],
        url: "https://images.unsplash.com/photo-1654157925394-4b7809721149?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1460&q=80",
        Inventry: "30 in stock for 19 variants",
        Status: "Active",
        Quantity: "12"
    },
    {
        id: "5",
        ProductLavel: ["Black Tshirt ajksur..."],
        url: "https://images.unsplash.com/photo-1654157925394-4b7809721149?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1460&q=80",
        Inventry: "30 in stock for 19 variants",
        Status: "Active",
        Quantity: "12"
    },
    {
        id: "6",
        ProductLavel: ["Black Tshirt ajksur..."],
        url: "https://images.unsplash.com/photo-1654157925394-4b7809721149?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1460&q=80",
        Inventry: "30 in stock for 19 variants",
        Status: "Active",
        Quantity: "12"
    }
]

const ProductPopup = forwardRef(({ children }) => {

    const dispatch = useDispatch();
    const listInnerRef = useRef();
    let PageSize = 200;
    const [page, setPage] = useState(1);
    const [selectedIds, setSelectedIds] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCollections, setSelectedCollections] = useState([]);
    const [productsList, setProductsList] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState([]);
    const [clearState, setClearState] = useState(false)
    const sortvalue = ["Products : (Latest)", "Products : (Oldest)", "Status : (Active)", "Status : (Draft)"];

    const [mainContainerId,
        mainContainerIndex,
        mainContainerData,
        subcontainerId,
        subcontainerIndex,
        subcontainerData,
        sectionId,
        sectionIndex,
        sectionData,
        gridId,
        gridIndex,
        gridData,
        selectedElementId,
        selectedElementIndex,
        selectedElementData, pageId] = useTemplateData();

    const { user, getProductListSuccess, getProductListData, getCategorylistSuccess, getCategorylistData,
        getCollectionSuccess, getCollectionData, modalState } = useSelector((state) => {
            return {
                user: state.user,
                getProductListSuccess: state.productList.adminProductList.success,
                getProductListData: state.productList.adminProductList.data,
                getCategorylistSuccess: state.ecomCategory.adminCategoryList.success,
                getCategorylistData: state.ecomCategory.adminCategoryList.data,
                getCollectionSuccess: state.collection.adminCollectionList.success,
                getCollectionData: state.collection.adminCollectionList.data,
                modalState: state.commonStates.modalState
            }
        })

    useEffect(() => {
        if (modalState) {
            if (searchTerm) {
                dispatch(SearchProduct(user.user_business, searchTerm, {}));
            }
            else {
                dispatch(getProductList(user.user_business, { limit: PageSize, skip: (page - 1) * PageSize }));
            }
        }
    }, [dispatch, user.user_business, searchTerm, page, PageSize, modalState])

    useEffect(() => {
        if (getProductListSuccess) {
            let data = getProductListData?.productlist?.filter((item) => item?.productActive === "active")
            if (clearState) {
                setProductsList(data)
            } else {
                if (data?.length > 0) {

                    setProductsList([...productsList, ...data])
                } else {

                    setProductsList([...productsList])
                }
            }

        }
    }, [getProductListData, getProductListSuccess])

    useEffect(() => {
        dispatch(getAllCategoryList(user.user_business))
    }, [dispatch, user.user_business])

    useEffect(() => {
        dispatch(getCollectionList(user.user_business));
    }, [dispatch, user.user_business])

    const ModalClosehandle = () => {
        setSelectedIds([])
        children.onclose()
        setPage(1);
    }

    const handleCheckbox = (e, _id, type) => {
        if (type === "SelectAll") {
            let array = selectedIds
            if (e.target.checked) {
                productsList?.map((item) => {
                    if (!array.includes(item?._id)) {
                        array.push(item?._id)
                    }
                    item?.data?.map((subItem) => {
                        if (!array.includes(subItem?._id)) {
                            array.push(subItem?._id);
                        }

                        subItem?.data?.map((subSubItem) => {
                            if (!array.includes(subSubItem?._id)) {
                                array.push(subSubItem?._id);
                            }
                        })
                    })
                })
                setSelectedIds([...array])
            } else {
                setSelectedIds([])
            }

        } else {
            let array = selectedIds
            if (e.target.checked) {
                array.push(_id)
            } else {
                let index = array.indexOf(_id)
                array.splice(index, 1)
            }
            setSelectedIds([...array])
        }
    }

    const idIndex = (_id) => {
        let index = selectedIds.indexOf(_id)
        return index + 1
    }

    useEffect(() => {
        if (gridData?.data?.length) {
            let array = []
            gridData?.data[0]?.productlist?.map((item) => {
                if (!array.includes(item._id)) {
                    array.push(item._id)
                }
            })
            setSelectedIds([...array])
        }
    }, [gridData, modalState])

    const handleAddProducts = () => {
        dispatch(
            updateManagePopupData({
                body: { data: selectedIds },
                pageId: pageId,
                grid: gridData?._id,
                indexesData: {
                    mainContainerIndex: mainContainerIndex,
                    subcontainerIndex: subcontainerIndex,
                    sectionIndex: sectionIndex,
                    gridIndex: gridIndex,
                },
            })
        );
        ModalClosehandle();
    }

    const handleSearch = (e) => {
        setClearState(true)
        let inputValue = e.target.value;
        let value = ValidationFile.spaceNotAccept(inputValue);
        setSearchTerm(value);
        listInnerRef.current.scrollTop = 0;
    }

    const handleSort = (val) => {
        if (val === "Products : (Latest)") {
            dispatch(SortProduct(user.user_business, "rto", {}));
        }
        else if (val === "Products : (Oldest)") {
            dispatch(SortProduct(user.user_business, "otr", {}));
        }
        else if (val === "Status : (Active)") {
            dispatch(SortProduct(user.user_business, "active", {}));
        }
        else {
            dispatch(SortProduct(user.user_business, "draft", {}));
        }
        setClearState(true)
    }

    const handleSelectCollection = (e, value) => {
        if (e.target.checked) {
            let arr = selectedCollections;
            arr.push(value)
            setSelectedCollections([...arr])
        } else {
            let arr = selectedCollections;
            let index = arr.indexOf(value)
            arr.splice(index, 1)
            setSelectedCollections([...arr])
        }
    }

    const handleCollectionApplyBtn = () => {
        dispatch(getProductList(user.user_business,
            {
                collection: selectedCollections
            }));
        setClearState(true)
    }

    const onScroll = async () => {
        if (listInnerRef.current) {
            const { scrollTop, scrollHeight, clientHeight } = listInnerRef?.current;
            if (Math.round(scrollTop + clientHeight) === scrollHeight) {
                setPage(page + 1);
                setClearState(false)
            }
        }
    };

    const handleCategoryApplyBtn = () => {
        setClearState(true)
        dispatch(getProductList(user.user_business,
            {
                level: [
                    { category_level: 0, _id: selectedCategory?.category },
                    { category_level: 1, _id: selectedCategory?.subcategory },
                    { category_level: 2, _id: selectedCategory?.subsubcategory }
                ]
            }));
    }

    return (
        <Modals ref={children.ref} ModalsSize={`modalL`} Position="center" ClosePopUp={ModalClosehandle} ClassName={styles.Product_modal}>
            <ModalHeader title="Select Products" />
            <ModalBody className={styles.Product_Body}>
                <ul className={styles.ListWrapper_Header}>
                    <li className={styles.Item_wrap_header}>
                        <div className={styles.label_Item}>
                            <div className={styles.selectAll_Custom_checkbox}>
                                <input type="checkbox" className={styles.checkbox} id={`checkbox`}
                                    checked={selectedIds?.length && getProductListData?.productlength && selectedIds?.length === getProductListData?.productlength}
                                    onChange={(e) => handleCheckbox(e, "", "SelectAll")} />
                                <label htmlFor={`checkbox`} ></label>
                            </div>
                            <p className={styles.count_title}>Select All</p>
                        </div>
                        <SearchControl placeholder={"Search..."} border={true} classNameWrappper={styles.classNameWrappper} className={styles.searchbar} value={searchTerm}
                            onChange={handleSearch} reset={() => setSearchTerm("")} />
                        <ProductCategory setSelectedCategroy={(value) => setSelectedCategory(value)}
                            selectedValues={selectedCategory} handleApplyBtn={handleCategoryApplyBtn} />
                        <MultiSelectDropdown
                            heading={""}
                            label={"collectionName"}
                            value={"_id"}
                            showApplyBtn={true}
                            values={getCollectionData}
                            handleSelect={(e, val) => handleSelectCollection(e, val)}
                            selectedValues={selectedCollections}
                            defaultValue={"Collection"}
                            handleApplyBtn={() => handleCollectionApplyBtn()}
                            showValue={"collections"}
                            selectedName={getCollectionData.length > 0 && selectedCollections.length > 0 && getCollectionData.find((item) => item._id === selectedCollections[0]).collectionName}
                            BorderRadius={true}
                            className={styles.mainWrapper}
                        />
                        <ShortDropDown values={sortvalue} onChange={handleSort} />
                    </li>
                </ul>
                <div className={styles.List_Item}>
                    <p className={styles.title}>NAME</p>
                    <p className={styles.title}>INVENTORY</p>
                    <p className={styles.title}>STATUS</p>
                    <p className={styles.title}>QUANTITY</p>
                </div>
                <ul className={styles.ListWrapper} onScroll={onScroll} ref={listInnerRef}>
                    {getProductListSuccess ?
                        productsList && productsList?.length ?
                            productsList?.map((item, key) => (
                                <li key={key} className={styles.Item_wrap}>
                                    <div className={styles.label_Item}>
                                        <div className={styles.custom_checkbox}>
                                            <input type="checkbox" className={styles.checkbox} id={key} onChange={(e) => handleCheckbox(e, item?._id)}
                                                checked={selectedIds.includes(item?._id)} />
                                            <label htmlFor={key} data-content={idIndex(item?._id)}></label>
                                        </div>
                                        <div className={styles.Image_wrapper}>
                                            <div className={styles.image_wrap}>
                                                <ImageElement
                                                    className={styles.Item_image}
                                                    src={item?.productPicture && item?.productPicture?.length ? item?.productPicture[0]?.src : ""}
                                                    defaultImage={dummyImg}
                                                />
                                            </div>
                                            {/* <Image className={styles.Item_image}
                                                src={item?.productPicture && item?.productPicture?.length ? item?.productPicture[0]?.src : ""}
                                                alt="List Image" width={56} height={56} /> */}
                                        </div>
                                        <li className={styles.bradcrumb_Item}>{item?.productName}</li>
                                    </div>
                                    {
                                        item?.defaultVariation ?
                                            <li className={styles.bradcrumb_Item}>{item?.stock} in stock</li>
                                            :
                                            <li className={styles.bradcrumb_Item}>{item?.stock} in stock for {item?.Totalvariation} variants</li>
                                    }

                                    <li className={styles.bradcrumb_Status}>{item?.productActive}</li>
                                    <li className={styles.bradcrumb_Item}>{item?.stock}</li>

                                </li>
                            ))
                            : <RecordNotFound text={'No Products available to display. Products added in the dashboard will be displayed here.'} />
                        :
                        <SpinnerLoader />
                    }
                </ul>
            </ModalBody>
            <ModalsFooter className={styles.product_Foot_Wrap}>
                <div className={styles.product_Foot}>
                    <p>{selectedIds?.length || 0} Selected</p>
                    <div className={styles.button_group}>
                        <button className={`button btn-o-silver btn-xs btn-oval`} onClick={() => ModalClosehandle()}>Cancel</button>
                        <button className={`button  btn-xs btn-oval ${selectedIds?.length ? "button-primary" : "button-gray"}`}
                            onClick={handleAddProducts} disabled={!selectedIds?.length} >Add Products</button>
                    </div>
                </div>
            </ModalsFooter>
        </Modals>
    )
})

export default ProductPopup;