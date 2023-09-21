import React, { useEffect, useState } from "react";
import FormInput from "../../../../../../../CommonComponents/Form/FormInput";
import styles from "./Menus.module.scss";
import SelectDropDown from "../../../../../../../CommonComponents/SelectDropdown";
import { useDispatch, useSelector } from "react-redux";
import {
  getNavigationMenuList,
  updateFooterData,
} from "../../../../../../../store/actions/siteEditor";
import SelectDropDownRandom from "../../../../../../../CommonComponents/Dropdown/OpenPage&ScrollBlock";
import { useDebounceFunction } from "../../../../../../../CommonFunctions/debounce";
import useTemplateId from "@/CustomHooks/useTemplateId";

const data = [
  {
    menu: "Menu Block 1",
    choosemenu: "Choose Menu",
    label: "Block Title",
    value: ["Explore Menu1", "Brands Menu1"],
  },
  {
    menu: "Menu Block 2",
    choosemenu: "Choose Menu",
    label: "Block Title",
    value: ["Explore Menu2", "Brands Menu2"],
  },
  {
    menu: "Menu Block 3",
    choosemenu: "Choose Menu",
    label: "Block Title",
    value: ["Explore Menu3", "Brands Menu3"],
  },
  {
    menu: "Menu Block 4",
    choosemenu: "Choose Menu",
    label: "Block Title",
    value: ["Explore Menu4", "Brands Menu4"],
  },
];

const MenusFooter = () => {
  const dispatch = useDispatch();
  const templateId = useTemplateId()
  const debouncedAppearance = useDebounceFunction(
    (callback) => callback(),
    1000
  );

  const { footerData, getTemplateData, navMenuList } = useSelector((state) => {
    return {
      footerData: state.editor.footerData.data,
      getTemplateData: state.websiteTemplate.getTemplate.data,
      navMenuList: state.editor.navigationMenu.data,
    };
  });

  const [Menus, setMenus] = useState([]);

  useEffect(() => {
    if (footerData) {
      setMenus(footerData?.Menus);
    }
  }, [footerData]);

  const handleChange = (val, itemID, key) => {
    let array = [...Menus];
    const updatedObject = { ...array[key], block_title: val };
    array.splice(key, 1, updatedObject);
    setMenus([...array]);
    if (
      array.every(
        (item) => item.nav_head_menu !== "" && item.block_title !== ""
      )
    ) {
      debouncedAppearance(() =>
        dispatch(
          updateFooterData({
            id: footerData?._id,
            body: {
              Menus: Menus.map((item, i) =>
                i === key ? { ...item, block_title: val } : item
              ),
            },
          })
        )
      );
    }
  };

  useEffect(() => {
    if (templateId)
      dispatch(getNavigationMenuList({ id: getTemplateData?.business, template: templateId }));
  }, [dispatch, templateId]);

  const handleSelect = (_id, itemID, key) => {
    let array = [...Menus];
    const updatedObject = { ...array[key], nav_head_menu: _id };
    // Create a new array with the updated object
    // const updatedData = [
    //   ...array.slice(0, key),
    //   updatedObject,
    //   ...array.slice(key + 1),
    // ];
    array.splice(key, 1, updatedObject);
    setMenus([...array]);
    dispatch(
      updateFooterData({
        id: footerData?._id,
        body: {
          Menus: Menus.map((item, i) =>
            i === key ? { ...item, nav_head_menu: _id } : item
          ),
        },
      })
    );
  };

  const AddNewMenu = () => {
    let array = [...Menus];
    array.push({
      block_title: "",
      nav_head_menu: ""
    });
    setMenus([...array]);
  };



  //delete handle for footer menu list;
  const deleteMenuHandle = (ItemId) => {
    const updatedArray = Menus.filter((item, index) => index !== ItemId); // Filter out the array of item from the array;
    setMenus(updatedArray);
    dispatch(
      updateFooterData({
        id: footerData?._id,
        body: {
          Menus: updatedArray, // Send the updated array to the backend
        },
      })
    );
  }




  return (
    <div className={styles.menusMain}>
      {Menus.length > 0 &&
        Menus.map((item, i) => {
          return (
            <span key={i}>
              <div className={styles.menuBlock}>
                <p className={styles.menuBlocktxt}>Menu Block {i + 1} </p>
                <span className={styles.menuDelete_wrap} onClick={() => deleteMenuHandle(i)}><i className={styles.icon_menuDelete}></i>Delete</span>
              </div>
              <div className={styles.menuSection}>
                <FormInput
                  LabelClassName={styles.labeltxt}
                  className={styles.menuSectionInput}
                  label={"Block Title"}
                  type={"text"}
                  placeholder={"Explore"}
                  labelPosition="top"
                  value={item?.block_title}
                  onChange={(e) => handleChange(e.target.value, item?._id, i)}
                />
                <p className={styles.ChooseMenutxt}>{"Choose Menu"}</p>
                <SelectDropDownRandom
                  className={styles.dropdownmenu}
                  handleSelect={(_id) => handleSelect(_id, item._id, i)}
                  deafultValue={"Select Menu"}
                  label={"nav_name"}
                  showValue={item?.nav_head_menu}
                  value={"_id"}
                  values={navMenuList}
                />
                {/* {/ <SelectDropDown handleSelect={selectedHandle} className={styles.dropdownmenu} deafultValue={"Explore Menu1"} values={navMenuList} /> /} */}
              </div>
            </span>
          );
        })}
      <div className={styles.borderlineMain}>
        <span className={styles.borderline} />
      </div>

      <div className={styles.buttonwrap}>
        <button className={styles.newmenubtn} onClick={AddNewMenu}>
          Add new menu block
        </button>
      </div>
    </div>
  );
};

export default MenusFooter;
