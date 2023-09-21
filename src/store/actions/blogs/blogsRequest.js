import Request from "@/Classes/Request";

class InstituteBlogsRequest extends Request {

  constructor() {
    super()
    this.instituteBlogsEndpoint = {
      getBlogList: super.url("/blog/getAllBlog?instituteId=_Id_&industry=Ecommerce"),
      searchBlogs: super.url("/blog/getAllBlog?instituteId=_Id_&search=_value_&industry=Ecommerce"),
      sortBlogs: super.url("/blog/getAllBlog?instituteId=_Id_&sortOrder=_value_&industry=Ecommerce"),
    }
  }

}

export default new InstituteBlogsRequest()