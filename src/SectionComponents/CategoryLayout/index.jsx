import React from 'react'
import CategoryTheme1 from './Theme1/Theme1'
import CategoryTheme2 from './Theme2/Theme2'
import CategoryTheme3 from './Theme3/Theme3'
import CategoryTheme4 from './Theme4/Theme4'
import CategoryTheme5 from './Theme5/Theme5'
import CategoryTheme6 from './Theme6/CategoryTheme6'
import CategoryTheme7 from './Theme7/CategoryTheme7'

const CategoryLayout = () => {
  return (
    <React.Fragment>
      {/* <CategoriesTheme1/> */}
      <CategoryTheme1 />
      <CategoryTheme2 />
      <CategoryTheme3 />
      <CategoryTheme4 />
      <CategoryTheme5 />
      <CategoryTheme6 />
      <CategoryTheme7 />
    </React.Fragment>
  )
}

export default CategoryLayout