import React from 'react';
import styles from "./RenderComponents.module.scss"
import Image from 'next/image';
import data from "../../LeftSidebar/leftPanel.json"

const RenderComponents = ({ data, addVariation }) => {
  return (
    <div className={styles.RenderTabWrapper}>
      <div className={styles.CardWrapper}>
        {
          data?.objects?.length > 0 && data.objects.map((item, key) => (


            <div className={styles.card} key={key} >
              <Image src={item.img ? item.img : "https://images.unsplash.com/photo-1468581264429-2548ef9eb732?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"} alt={item.page_type} layout="responsive" width={1000} height={800} />
              <button
                className={styles.addButton}
                onClick={() => addVariation(item._id)}
              >
                <i className={styles.AddIcon}>&#8853;</i> Add Page to site
              </button>
            </div>



          ))
        }
      </div>
    </div>
  )
}

export default RenderComponents