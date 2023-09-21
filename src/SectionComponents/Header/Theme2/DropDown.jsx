import React from 'react'
import styled from 'styled-components';
import { SubCategoryWrap, SubCategory, SubSubItems, DropList, ArrowIconLeft } from './Header.styled';

const Dropdown = ({ dropdownPosition, MoreDropOpenState,MouseEnter, refDrop, MouseLeave, dropdown, hoverId, Successdata, Categoryitem }) => {

  const Mouseover = () => {
    MouseLeave()
  }
  const MouseEnterHandle = () => {
    MouseLeave("MoreOptionvisible")
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
    <>
      <SubCategoryWrap onMouseLeave={Mouseover} ref={refDrop} className={`${dropdownPosition ? "Right" : ""} ${dropdown && hoverId === Categoryitem._id ? "visible" : "invisible"}`}>
        <SubCategory>
          {Successdata && Categoryitem?.subcategories && dropdownPosition && Categoryitem?.subcategories.length >= 1 &&
            <h6 onClick={MouseEnterHandle}><span><ArrowIconLeft/></span> {Categoryitem?.categoryName}</h6>
          }
          {
            Successdata && Categoryitem?.subcategories && Categoryitem?.subcategories.length >= 1 && (
              Categoryitem?.subcategories.map((subCategoryitem, key) => {
                return (
                  <>
                    <DropList>
                      <button onClick={() => { handleSubCategoryNavbarFilter(subCategoryitem) }} key={key}>
                        <h5 >{subCategoryitem?.subCategoryName}</h5>
                      </button>
                      {
                        Successdata && subCategoryitem?.subsubcategories && subCategoryitem?.subsubcategories.length > 0 ? (
                          subCategoryitem?.subsubcategories.map((subsubitem, key) => (
                            <button onClick={() => { handleSubSubCategoryNavbarFilter(subsubitem) }} key={key}>
                              <SubSubItems>{subsubitem?.subSubCategoryName}</SubSubItems>
                            </button>
                          ))
                        ) : ("")
                      }
                    </DropList>
                  </>
                )
              })
            )
          }

        </SubCategory>
      </SubCategoryWrap>
    </>
  )
}

export default Dropdown