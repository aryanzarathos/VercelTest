import Request from "../../../Classes/Request";

class GlobalSearchRequest extends Request {
  constructor() {
    super();
    this.searchEndpoint = {
      getSearchList: super.url(
        "/site-editor/search?business=__BUSINESS__&searchQuery=__SEARCH__&template=__TEMPLATEID__",
        "commonservices"
      ),
      getGlobalSearchList: super.url(
        "/site-editor/search?business=__BUSINESS__&searchQuery=__SEARCH__&__QUERY__=__VALUE__",
        "commonservices"
      ),
    };
  }
}
let data = new GlobalSearchRequest();
export default data;
