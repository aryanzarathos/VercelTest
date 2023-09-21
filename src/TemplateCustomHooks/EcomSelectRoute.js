import React from 'react'
import { selectRouteForPreview, setParamId } from '@/store/actions/blog/blog';
import { useDispatch, useSelector } from 'react-redux';

const useEcomSelectRoute = () => {

  const dispatch = useDispatch();

  const { paramId } = useSelector((state) => {
    return {
      paramId: state.ecommerceTemplate.paramsId
    }
  })

  const selectEcomRouteForPreview = (route, slug) => {
    dispatch(selectRouteForPreview(route, true))
    dispatch(setParamId(slug))
  }

  return [selectEcomRouteForPreview, paramId]
}
export default useEcomSelectRoute;