import { useDispatch, useSelector } from 'react-redux';
// import { selectRouteForPreview, setParamId } from '../../../../store/actions/serviceWebsiteTemplate';


const useServiceSelectRoute = () => {

  const dispatch = useDispatch();

  const { serviceparamId } = useSelector((state) => {
    return {
      serviceparamId: state.serviceTemplate.paramsId
    }
  })

  const selectServiceRouteForPreview = (route, slug) => {
    // dispatch(selectRouteForPreview(route, true))
    // dispatch(setParamId(slug))
  }

  return [selectServiceRouteForPreview, serviceparamId]
}
export default useServiceSelectRoute