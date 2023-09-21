import React from 'react'
import { SubCategoryWrap, SubCategory, Button, DropList, SubSubCategoroy,SubCategoroy } from './Header.styled';


const ShopDropdown = ({ dropdownPosition, MoreDropOpenState, refDrop, MouseLeave, dropdown, hoverId, Successdata, AllCategoryData, headerMenuList }) => {

  const Mouseover = () => {
    MouseLeave()
  }
  // const history = useHistory();
  // const dispatch = useDispatch();

  const handleSubCategoryNavbarFilter = (subCategoryitem) => {
    // dispatch(clearAllCategory())
    // dispatch(SubCategoryPush(subCategoryitem._id))
    // dispatch(showAddSubCat(subCategoryitem._id))
    // if (subCategoryitem.subsubcategories.length > 0) {
    //   for (let i = 0; i < subCategoryitem.subsubcategories.length; i++) {
    //     dispatch(showAddSubSubCat(subCategoryitem.subsubcategories[i]._id))
    //   }
    // }
    // MoreDropOpenState()
    // history.push("/products")
  }

  const handleSubSubCategoryNavbarFilter = (subsubitem) => {
    // dispatch(clearAllCategory())
    // dispatch(SubSubCategoryPush(subsubitem))
    // dispatch(showAddSubSubCat(subsubitem._id))
    // history.push("/products")
  }

  return (
    <SubCategoryWrap  onMouseLeave={Mouseover} ref={refDrop} className={`${dropdown && hoverId === (headerMenuList.path === "/products") ? "visible" : "invisible"}`}>
      <SubCategory>
        {/* {Successdata && Categoryitem?.subcategories && dropdownPosition && Categoryitem?.subcategories.length >= 1 &&
            <h5>{Categoryitem?.categoryName}</h5>
          } */}
        {
          Successdata && AllCategoryData && AllCategoryData.length >= 1 && (
            AllCategoryData?.filter((item) => item?.show_on_header === false).map((Categoryitem, key) => {
              return (
                <>
                  <DropList>
                    <Button onClick={() => { handleSubCategoryNavbarFilter(Categoryitem) }} key={key}>
                      <h4 >{Categoryitem?.categoryName}</h4>
                    </Button>
                    {
                      Successdata && Categoryitem?.subcategories.map((subCategoryitem, subKey) => (
                        <>
                          <button onClick={() => { handleSubCategoryNavbarFilter(subCategoryitem) }} key={subKey}>
                            <SubCategoroy >{subCategoryitem?.subCategoryName}</SubCategoroy>
                          </button>
                          {
                            Successdata && subCategoryitem?.subsubcategories.map((subsubcategory) => (
                              <>
                                <button onClick={() => { handleSubSubCategoryNavbarFilter(subsubcategory) }} className="buttonList">
                                  {/* <NavLink to={`/category/${subsubcategory.slug}`}> */}
                                  <SubSubCategoroy key={subsubcategory._id}>{subsubcategory.subSubCategoryName}</SubSubCategoroy>
                                  {/* </NavLink> */}
                                </button>
                              </>
                            ))
                          }
                          {/* <button onClick={() => { handleSubSubCategoryNavbarFilter(subCategoryitem.subCategoryName) }}>
                            <SubSubItems>{subCategoryitem.subCategoryName}</SubSubItems>
                          </button> */}
                        </>
                      ))
                    }
                    
                  </DropList>
                </>
              )
            })
          )

        }

      </SubCategory>
    </SubCategoryWrap>
  )
}

export default ShopDropdown