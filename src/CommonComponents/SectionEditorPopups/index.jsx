import React, { forwardRef, useRef } from 'react';
import CategoryPopup from './Category';
import ProductPopup from './Product';
import CollectionPopup from './Collection';
import ServicesPopup from './Services';
import ServiceCategoriesPopup from './ServiceCategories';
import ServiceCollectionPopup from './ServicesCollection';
import RenderModals from './RenderModals';


const SectionEditorPopups = forwardRef(({ sectionName, item,multiSelect, onclose, showSelectedData,uploadLimit }, ref) => {
    return (
        <>
            {
                typeof RenderModals[sectionName] !== "undefined" ?
                    React.createElement(RenderModals[sectionName], null, { onclose, ref, showSelectedData,uploadLimit,multiSelect }) :
                    ""
            }
        </>
    )
});
SectionEditorPopups.displayName = "SectionEditorPopups"

export default SectionEditorPopups;