let RenderModals = {};

RenderModals["ManageCategory"] = require("./Category").default;
RenderModals["ProductSection"] = require("./Product").default;
RenderModals["ManageCollections"] = require("./Collection").default;
RenderModals["ManageTestimonial"] = require("./Testimonial").default;
RenderModals["ManageTeam"] = require("./Team").default;
RenderModals["ManageFaq"] = require("./Faq").default;
RenderModals["ManageBlogs"] = require("./Blog").default;
RenderModals["ManageFacilities"] = require("./Facilities").default;
RenderModals["ManageGallery"] = require("./Gallary/index").default;
RenderModals["ManagevideoGallery"] = require("./GalleryVideo").default;
RenderModals["ManageBlogCategory"] = require("./BlogCategory").default;
RenderModals["ManageServiceCollections"] = require("./ServicesCollection").default;
RenderModals["ManageServiceCategories"] = require("./ServiceCategories").default;
RenderModals["ManageServices"] = require("./Services").default;


export default RenderModals;
