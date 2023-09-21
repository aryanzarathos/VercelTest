import Request from "../../../Classes/Request";

 class WebsiteTemplateRequest extends Request {
  constructor() {
    super();
    this.websiteTemplate = {
      getTemplate: super.url(
        "/default-site-editor/DefaultPreview/__SLUG__?__TYPE__=__VALUE__",
        "commonservices"
      ),
      deleteMainContainer: super.url(
        "/crup-site-editor/delete-main/__PAGEID__?mcon=__MAINCONTAINERID__",
        "commonservices"
      ),
      repositionMainContainer: super.url(
        "/crup-site-editor/change-main-pos/__PAGEID__?pos=__POSITION__&mcon=__MAINCONTAINERID__",
        "commonservices"
      ),
      duplicateMainContainer: super.url(
        "/crup-site-editor/duplicate-main/__PAGEID__?pos=__POSITION__&mcon=__MAINCONTAINERID__",
        "commonservices"
      ),
      addSection: super.url(
        "/draft-site-editor/AddSection?variation=__VARIATIONID__&template=__TEMPLATEID__&page_id=__PAGEID__&position=__POS__&business=__BUSINESSID__&owner=__OWNERID__",
        "commonservices"
      ),

      activateTheme: super.url(
        "/draft-site-editor/UpdateDraftTheme?draftTheme=__THEMEID__",
        "commonservices"
      ),
      activateFontFamily: super.url(
        "/draft-site-editor/UpdateDraftFontFamily?draftFontFamily=__THEMEID__","commonservices"
      ),
    };
  }
}
let data= new WebsiteTemplateRequest()
export default data;