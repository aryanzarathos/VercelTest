import Request from "../../../Classes/Request";

class SiteEditorRequest extends Request {
  constructor() {
    super();
    this.siteEditor = {
      getAllPages: super.url(
        "/site-editor/GetSitePagesTemplateDropDown",
        "commonservices"
      ),
      getSectionData: super.url(
        "/site-editor/GetSectionDataGlobal",
        "commonservices"
      ),
      getSitePages: super.url(
        "/site-editor/GetSitePagesTemplate",
        "commonservices"
      ),
      updateButtonElement: super.url(
        "/crup-site-editor/grid-edit/__PAGEID__?grid=__GRIDID__",
        "commonservices"
      ),
      getAddPageList: super.url(
        "/site-editor/GetAddPageDynamicGlobal",
        "commonservices"
      ),

      //top-header requests
      getTopHeaderData: super.url(
        "/crup-site-editor/getHeader/_Template_/_Business_",
        "commonservices"
      ),
      updateTopHeaderData: super.url(
        "/crup-site-editor/editHeader/_HeaderID_?page_id=__PAGEID__",
        "commonservices"
      ),
      getTopHeaderLayouts: super.url(
        "/site-editor/GetdynamicSectionDataGlobal?sectionname=TopHeader",
        "commonservices"
      ),
      //main-header requests
      getMainHeaderData: super.url(
        "/crup-site-editor/getMainHeader/_Template_/_Business_",
        "commonservices"
      ),
      updateMainHeaderData: super.url(
        "/crup-site-editor/editMainHeader/_HeaderID_?page_id=__PAGEID__",
        "commonservices"
      ),
      //nav menu list
      getNavigationMenuList: super.url(
        "/site-editor/getNavHeaders/_Business_?template=__TEMPLATEID__",
        "commonservices"
      ),
      //footer requests
      getFooterData: super.url(
        "/crup-site-editor/getNewFooter/_Template_",
        "commonservices"
      ),
      updateFooterData: super.url(
        "/crup-site-editor/footer/_Footer_?page_id=__PAGEID__",
        "commonservices"
      ),
      //copy-right requests
      getCopyRightData: super.url(
        "/crup-site-editor/getCopyRight/_Template_",
        "commonservices"
      ),
      updateCopyRightData: super.url(
        "/crup-site-editor/editCopyRight/_Template_",
        "commonservices"
      ),
      //get product data
      getProductListData: super.url(
        "/productService/product-list-client-initital?subdomain=_DOMAIN_",
        "ecommerce"
      ),
      //get category pages data
      getCategoryPages: super.url(
        "/site-editor/getCollectionAndCategoryPages/_Business_/_Template_",
        "commonservices"
      ),
      //add category collection page
      addCategoryCollectionPage: super.url(
        "/crup-site-editor/dynamicPageCreate?business=__BUSINESS__&template=__TEMPLATE__&type=_Type_&theme=_Theme_&id=_ID_&owner=_Owner_",
        "commonservices"
      ),
      //edit page data
      editPageData: super.url(
        "/crup-site-editor/editPage/__PAGEID__?business=_Business_",
        "commonservices"
      ),
      //delete pages
      deletePages: super.url(
        "/crup-site-editor/deletePageById/__PAGEID__?business=_Business_&template=_Template_",
        "commonservices"
      ),
      //delete navigation pages
      deleteNavPages: super.url(
        "/crup-site-editor/removeNavigationPage",
        "commonservices"
      ),
      // page slug availabilty
      checkPageSlugAvailability: super.url(
        "/site-editor/searchPageSlug/_Template_?searchQuery=_Query_",
        "commonservices"
      ),
      //add-new page
      addNewPage: super.url("", "commonservices"),
      addNewEmptyPage: super.url("", "commonservices"),
      addNewPage: super.url(
        "draft-site-editor/AddPageDynamic?template=__TEMPLATE__&business=__BUSINESS__&dynamic_page_id=__PAGEID__&owner=__OWNER__",
        "commonservices"
      ),
      addNewEmptyPage: super.url(
        "/draft-site-editor/AddPageBlank?template=__TEMPLATE__&business=__BUSINESS__&name=__PAGENAME__&owner=__OWNER__&category_name=_CATEGORY_",
        "commonservices"
      ),
      getGlobalThemeList: super.url(
        "/draft-site-editor/GetTemplateThemeData?template=__TEMPLATE__",
        "commonservices"
      ),
      createCustomTheme: super.url(
        "draft-site-editor/CreateUserCustomTheme",
        "commonservices"
      ),
      deleteCustomTheme: super.url(
        "draft-site-editor/DeleteUserCustomTheme/__ID__",
        "commonservices"
      ),
      editCustomTheme: super.url(
        "draft-site-editor/EditUserCustomTheme?customTheme=__THEMEID__",
        "commonservices"
      ),
      createCustomFonts: super.url(
        "draft-site-editor/CreateUserCustomFontFamily",
        "commonservices"
      ),
      deleteCustomFonts: super.url(
        "draft-site-editor/DeleteUserCustomFontFamily/__ID__",
        "commonservices"
      ),
      editCustomFonts: super.url(
        "draft-site-editor/EditUserCustomFontFamily?userFontFamily=__THEMEID__",
        "commonservices"
      ),
      editFontSize: super.url(
        "draft-site-editor/EditDraftFontSize/__TEMPLATEID__",
        "commonservices"
      ),
      headerLayout: super.url(
        "draft-site-editor/changeheadervariation",
        "commonservices"
      ),
      getHeaderStructure: super.url(
        "site-editor/GetdynamicSectionDataGlobal?sectionname=Header",
        "commonservices"
      ),
      publishSite: super.url(
        "/publish-site-editor/draft-to-publish",
        "commonservices"
      ),
      captureScreenshot: super.url(
        "/site-editor/sreeenShot",
        "commonservices"
      ),
    };
  }
}
let data = new SiteEditorRequest();
export default data;
