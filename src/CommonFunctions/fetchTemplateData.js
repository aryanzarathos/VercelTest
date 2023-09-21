import Auth from "@/Classes/Auth";
import AppLinkUrl from "../CommonComponents/AppLink/AppLinkUrl";
import { hostName } from "./isBrowser";
import axios from "axios";

import Api from "../Classes/Api";
let config = new Api
let apiConfig = config.apiConfig;

const fetchHeader = (auth, hash) => {
  return {
    'Content-Type': 'application/json',
    'Authorization': auth,
    'hash': hash,
    'Token': auth
  };
}
export const getSlug = (hostname, slug) => {
  let hostNameValue = hostName(hostname);

  if (
    AppLinkUrl.subdomain(hostNameValue) === "webwiz" ||
    AppLinkUrl.subdomain(hostNameValue) === "preview"
  ) {
    let path = slug.split("/");
    path = path.slice(2);
    path = path.join("/");
    if (path === "/") {
      return "home";
    } else {
      return path;
    }
  } else {
    return slug;
  }
};
const fetchTemplateData = async (hostname, slug, condition, filters, cacheControl = "no-cache") => {
  let hostNameValue = hostName(hostname);
  let dynamicslug = getSlug(hostname, slug);
  let response;
  let isPrivateDomain = AppLinkUrl.privateDomain(hostNameValue);
  let host = AppLinkUrl.privateDomain(hostNameValue)
    ? hostNameValue
    : AppLinkUrl.subdomain(hostNameValue);
  let route = "publish-site-editor/PublishTemplateGet";

  response = await axios({
    method: "get",
    url: `https://commonservices${apiConfig[apiConfig.mode].dynamicHost}/${route}/${condition}?${isPrivateDomain ? "domain" : "subdomain"}=${host}`,
    data: { filter: ShopPageFilter(filters) },
    headers: {
      'Cache-Control': cacheControl
    }
  })
    .then((data) => {
      if (data?.data) return data.data;
    })
    .catch((err) => []);

  return response;
};

function ShopPageFilter(filters) {
  let data = {};
  if (filters?.col) {
    data.collection = filters?.col?.split("-");
  }
  if (filters?.cat || filters?.sbcat || filters?.sbsbcat) {
    data.level = [
      {
        category_level: 0,
        _id: filters?.cat?.length ? filters?.cat?.split("-") : [],
      },
      {
        category_level: 1,
        _id: filters?.sbcat?.length ? filters?.sbcat?.split("-") : [],
      },
      {
        category_level: 2,
        _id: filters?.sbsbcat?.length ? filters?.sbsbcat?.split("-") : [],
      },
    ];
  }
  if (filters?.price) {
    data.price = {
      start: filters?.price?.length ? filters?.price?.split("-")[0] : [],
      end: filters?.price?.length ? filters?.price?.split("-")[1] : [],
    };
  }
  if (filters?.page) {
    // console.log("filters?.page", filters?.page)
    data.page = filters?.page;
  }
  return data;
}
export const HOMEfetchTemplateData = async (hostname, cacheControl = "no-cache") => {
  let route = "publish-site-editor/PublishTemplateGet";
  let hostNameValue = hostName(hostname);
  let response;
  let host = AppLinkUrl.privateDomain(hostNameValue)
    ? hostNameValue
    : AppLinkUrl.subdomain(hostNameValue);
  let isPrivateDomain = AppLinkUrl.privateDomain(hostNameValue);
  response = await fetch(`https://commonservices${apiConfig[apiConfig.mode].dynamicHost}/${route}/home?${isPrivateDomain ? "domain" : "subdomain"}=${host}`, {
    headers: {
      'Cache-Control': cacheControl
    }
  });
  ;
  return response.json();
};
export const LoginSignupfetchTemplateData = async (
  hostname,
  slug,
  condition, cacheControl = "no-cache"
) => {
  let route = "publish-site-editor/PublishTemplateGet";
  let hostNameValue = hostName(hostname);
  let response;
  let host = AppLinkUrl.privateDomain(hostNameValue)
    ? hostNameValue
    : AppLinkUrl.subdomain(hostNameValue);
  let isPrivateDomain = AppLinkUrl.privateDomain(hostNameValue);

  response = await fetch(`https://commonservices${apiConfig[apiConfig.mode].dynamicHost}/${route}/login-signup?${isPrivateDomain ? "domain" : "subdomain"}=${host}`, {
    headers: {
      'Cache-Control': cacheControl
    }
  });
  ;
  return response.json();
};
export const PaymentfetchTemplateData = async (hostname, slug, condition, cacheControl = "no-cache") => {
  let route = "publish-site-editor/PublishTemplateGet";
  let hostNameValue = hostName(hostname);
  let response;
  let host = AppLinkUrl.privateDomain(hostNameValue)
    ? hostNameValue
    : AppLinkUrl.subdomain(hostNameValue);
  let isPrivateDomain = AppLinkUrl.privateDomain(hostNameValue);

  response = await fetch(`https://commonservices${apiConfig[apiConfig.mode].dynamicHost}/${route}/payment?${isPrivateDomain ? "domain" : "subdomain"}=${host}`, {
    headers: {
      'Cache-Control': cacheControl
    }
  });
  ;
  return response.json();
};
export const BlogfetchTemplateData = async (hostname, slug, condition, cacheControl = "no-cache") => {
  let route = "publish-site-editor/PublishTemplateGet";
  let hostNameValue = hostName(hostname);
  let response;
  let host = AppLinkUrl.privateDomain(hostNameValue)
    ? hostNameValue
    : AppLinkUrl.subdomain(hostNameValue);
  let isPrivateDomain = AppLinkUrl.privateDomain(hostNameValue);

  response = await fetch(`https://commonservices${apiConfig[apiConfig.mode].dynamicHost}/${route}/blog-home?${isPrivateDomain ? "domain" : "subdomain"}=${host}`, {
    headers: {
      'Cache-Control': cacheControl
    }
  });
  ;
  return response.json();
};
export const servicePaymentfetchTemplateData = async (hostname, slug, cacheControl = "no-cache") => {
  let route = "publish-site-editor/PublishTemplateGet";
  let hostNameValue = hostName(hostname);
  let response;
  let host = AppLinkUrl.privateDomain(hostNameValue)
    ? hostNameValue
    : AppLinkUrl.subdomain(hostNameValue);
  let isPrivateDomain = AppLinkUrl.privateDomain(hostNameValue);

  response = await fetch(`https://commonservices${apiConfig[apiConfig.mode].dynamicHost}/${route}/service-payment?${isPrivateDomain ? "domain" : "subdomain"}=${host}`, {
    headers: {
      'Cache-Control': cacheControl
    }
  });
  ;
  return response.json();
};
export const BlogDetailfetchTemplateData = async (
  hostname,
  slug,
  condition,
  cacheControl = "no-cache"
) => {
  let route = "publish-site-editor/PublishTemplateGet";
  let hostNameValue = hostName(hostname);
  let response;
  let host = AppLinkUrl.privateDomain(hostNameValue)
    ? hostNameValue
    : AppLinkUrl.subdomain(hostNameValue);
  let isPrivateDomain = AppLinkUrl.privateDomain(hostNameValue);
  response = await fetch(`https://commonservices${apiConfig[apiConfig.mode].dynamicHost}/${route}/blog-details/${slug}?${isPrivateDomain ? "domain" : "subdomain"}=${host}`, {
    headers: {
      'Cache-Control': cacheControl
    }
  });

  return response.json();
};

export const bookingAppointmentfetchTemplateData = async (hostname, slug, cacheControl = "no-cache") => {
  let route = "publish-site-editor/PublishTemplateGet";
  let hostNameValue = hostName(hostname);
  let response;
  let host = AppLinkUrl.privateDomain(hostNameValue)
    ? hostNameValue
    : AppLinkUrl.subdomain(hostNameValue);
  let isPrivateDomain = AppLinkUrl.privateDomain(hostNameValue);
  response = await fetch(`https://commonservices${apiConfig[apiConfig.mode].dynamicHost}/${route}/booking-appointment/${slug}?${isPrivateDomain ? "domain" : "subdomain"}=${host}`, {
    headers: {
      'Cache-Control': cacheControl
    }
  });
  ;
  return response.json();
};

export const BlogCategoriesListfetchTemplateData = async (
  hostname,
  slug,
  { search, page }, cacheControl = "no-cache"
) => {
  let route = "publish-site-editor/PublishTemplateGet";
  let hostNameValue = hostName(hostname);
  let response;
  let host = AppLinkUrl.privateDomain(hostNameValue)
    ? hostNameValue
    : AppLinkUrl.subdomain(hostNameValue);
  let isPrivateDomain = AppLinkUrl.privateDomain(hostNameValue);
  response = await axios({
    method: "get",
    url: `https://commonservices${apiConfig[apiConfig.mode].dynamicHost}/${route}/blog-categories?${isPrivateDomain ? "domain" : "subdomain"}=${host}`,
    data: { filter: { search: search, page: page ? page : 1 } },
    headers: {
      'Cache-Control': cacheControl
    }
  })
    .then((data) => {
      if (data?.data) return data.data;
    })
    .catch((err) => []);
  return response;
};
export const BlogCategoriesfetchTemplateData = async (
  hostname,
  slug,
  condition, cacheControl = "no-cache"
) => {
  // console.log(slug, "slugslugslugslugslugslugslugslug")
  let route = "publish-site-editor/PublishTemplateGet";
  let hostNameValue = hostName(hostname);
  let response;
  let host = AppLinkUrl.privateDomain(hostNameValue)
    ? hostNameValue
    : AppLinkUrl.subdomain(hostNameValue);
  let isPrivateDomain = AppLinkUrl.privateDomain(hostNameValue);
  // console.log(`https://commonservices${apiConfig[apiConfig.mode].dynamicHost}/${route}/blogcategories/${slug}?${isPrivateDomain ? "domain" : "subdomain"}=${host}`, "line 141")
  response = await fetch(`https://commonservices${apiConfig[apiConfig.mode].dynamicHost}/${route}/blogcategory/${slug}?${isPrivateDomain ? "domain" : "subdomain"}=${host}`, {
    headers: {
      'Cache-Control': cacheControl
    }
  });
  ;
  return response.json();
};
export const OrderDetailfetchTemplateData = async (
  hostname,
  slug,
  condition,
  cacheControl = "no-cache"
) => {
  let route = "publish-site-editor/PublishTemplateGet";
  let hostNameValue = hostName(hostname);
  let response;
  let host = AppLinkUrl.privateDomain(hostNameValue)
    ? hostNameValue
    : AppLinkUrl.subdomain(hostNameValue);
  let isPrivateDomain = AppLinkUrl.privateDomain(hostNameValue);

  response = await fetch(`https://commonservices${apiConfig[apiConfig.mode].dynamicHost}/${route}/orders-details?${isPrivateDomain ? "domain" : "subdomain"}=${host}`, {
    headers: {
      'Cache-Control': cacheControl
    }
  });
  ;
  return response.json();
};
export const GuestOrderDetailfetchTemplateData = async (
  hostname,
  slug,
  condition,
  cacheControl = "no-cache"
) => {
  let route = "publish-site-editor/PublishTemplateGet";
  let hostNameValue = hostName(hostname);
  let response;
  let host = AppLinkUrl.privateDomain(hostNameValue)
    ? hostNameValue
    : AppLinkUrl.subdomain(hostNameValue);
  let isPrivateDomain = AppLinkUrl.privateDomain(hostNameValue);

  response = await fetch(`https://commonservices${apiConfig[apiConfig.mode].dynamicHost}/${route}/guest-orders-details?${isPrivateDomain ? "domain" : "subdomain"}=${host}`, {
    headers: {
      'Cache-Control': cacheControl
    }
  });
  ;
  return response.json();
};
export const BookingSelectionfetchTemplateData = async (hostname, cacheControl = "no-cache") => {
  let route = "publish-site-editor/PublishTemplateGet";
  let hostNameValue = hostName(hostname);
  let response;
  let host = AppLinkUrl.privateDomain(hostNameValue)
    ? hostNameValue
    : AppLinkUrl.subdomain(hostNameValue);
  let isPrivateDomain = AppLinkUrl.privateDomain(hostNameValue);

  response = await axios({
    method: "get",
    url: `https://commonservices${apiConfig[apiConfig.mode].dynamicHost}/${route}/service-selection?${isPrivateDomain ? "domain" : "subdomain"}=${host}`,
    headers: {
      'Cache-Control': cacheControl
    }
  })
    .then((data) => {
      if (data?.data) return data.data;
    })
    .catch((err) => []);
  return response;
};
export const CartfetchTemplateData = async (hostname, slug, condition, cacheControl = "no-cache") => {
  let route = "publish-site-editor/PublishTemplateGet";
  let hostNameValue = hostName(hostname);
  let response;
  let host = AppLinkUrl.privateDomain(hostNameValue)
    ? hostNameValue
    : AppLinkUrl.subdomain(hostNameValue);
  let isPrivateDomain = AppLinkUrl.privateDomain(hostNameValue);

  response = await fetch(`https://commonservices${apiConfig[apiConfig.mode].dynamicHost}/${route}/cart?${isPrivateDomain ? "domain" : "subdomain"}=${host}`, {
    headers: {
      'Cache-Control': cacheControl
    }
  });
  ;
  return response.json();
};
export const serviceCategoryDetailsfetchTemplateData = async (
  hostname,
  slug,
  cacheControl = "no-cache"
) => {
  let route = "publish-site-editor/PublishTemplateGet";
  let hostNameValue = hostName(hostname);
  let response;
  let host = AppLinkUrl.privateDomain(hostNameValue)
    ? hostNameValue
    : AppLinkUrl.subdomain(hostNameValue);
  let isPrivateDomain = AppLinkUrl.privateDomain(hostNameValue);

  response = await axios({
    method: "get",
    url: `https://commonservices${apiConfig[apiConfig.mode].dynamicHost}/${route}/service-category-details/${slug}?${isPrivateDomain ? "domain" : "subdomain"}=${host}`,
    headers: {
      'Cache-Control': cacheControl
    }
  }).then((data) => {
    if (data?.data) return data.data;
  })
    .catch((err) => []);

  return response;
};
export const productDetailsfetchTemplateData = async (
  hostname,
  slug,
  cacheControl = "no-cache"
) => {
  let route = "publish-site-editor/PublishTemplateGet";
  let hostNameValue = hostName(hostname);
  let response;
  let host = AppLinkUrl.privateDomain(hostNameValue)
    ? hostNameValue
    : AppLinkUrl.subdomain(hostNameValue);
  let isPrivateDomain = AppLinkUrl.privateDomain(hostNameValue);

  response = await axios({
    method: "get",
    url: `https://commonservices${apiConfig[apiConfig.mode].dynamicHost}/${route}/product-details/${slug}?${isPrivateDomain ? "domain" : "subdomain"}=${host}`,
    headers: {
      'Cache-Control': cacheControl
    }
  }).then((data) => {
    if (data?.data) return data.data;
  })
    .catch((err) => []);

  return response;
};
export const serviceDetailsfetchTemplateData = async (hostname, slug, cacheControl = "no-cache") => {
  let route = "publish-site-editor/PublishTemplateGet";
  let hostNameValue = hostName(hostname);
  let response;
  let host = AppLinkUrl.privateDomain(hostNameValue)
    ? hostNameValue
    : AppLinkUrl.subdomain(hostNameValue);
  let isPrivateDomain = AppLinkUrl.privateDomain(hostNameValue);

  response = await axios({
    method: "get",
    url: `https://commonservices${apiConfig[apiConfig.mode].dynamicHost}/${route}/service-details/${slug}?${isPrivateDomain ? "domain" : "subdomain"}=${host}`,
    headers: {
      'Cache-Control': cacheControl
    }
  }).then((data) => {
    if (data?.data) return data.data;
  })
    .catch((err) => []);
  return response;
};
export const ServicesfetchTemplateData = async (hostname, slug, condition, cacheControl = "no-cache") => {
  let route = "publish-site-editor/PublishTemplateGet";
  let hostNameValue = hostName(hostname);
  let response;
  let host = AppLinkUrl.privateDomain(hostNameValue)
    ? hostNameValue
    : AppLinkUrl.subdomain(hostNameValue);
  let isPrivateDomain = AppLinkUrl.privateDomain(hostNameValue);
  response = await axios({
    method: "get",
    url: `https://commonservices${apiConfig[apiConfig.mode].dynamicHost}/${route}/services?${isPrivateDomain ? "domain" : "subdomain"}=${host}`,
    headers: {
      'Cache-Control': cacheControl
    }
  }).then((data) => {
    if (data?.data) return data.data
  }).catch((err) => { })
  // response = await fetch(`https://commonservices${apiConfig[apiConfig.mode].dynamicHost}/${route}/services?${isPrivateDomain ? "domain" : "subdomain"}=${host}`, {
  return response;
};
export const serviceCategoriesfetchTemplateData = async (
  hostname,
  slug,
  condition,
  cacheControl = "no-cache"
) => {
  let route = "publish-site-editor/PublishTemplateGet";
  let hostNameValue = hostName(hostname);
  let response;
  let host = AppLinkUrl.privateDomain(hostNameValue)
    ? hostNameValue
    : AppLinkUrl.subdomain(hostNameValue);
  let isPrivateDomain = AppLinkUrl.privateDomain(hostNameValue);

  response = await fetch(`https://commonservices${apiConfig[apiConfig.mode].dynamicHost}/${route}/service-categories?${isPrivateDomain ? "domain" : "subdomain"}=${host}`, {
    headers: {
      'Cache-Control': cacheControl
    }
  });
  ;
  return response.json();
};
export const serviceCollectionfetchTemplateData = async (
  hostname,
  slug,
  condition,
  cacheControl = "no-cache"
) => {
  let route = "publish-site-editor/PublishTemplateGet";
  let hostNameValue = hostName(hostname);
  let response;
  let host = AppLinkUrl.privateDomain(hostNameValue)
    ? hostNameValue
    : AppLinkUrl.subdomain(hostNameValue);
  let isPrivateDomain = AppLinkUrl.privateDomain(hostNameValue);

  response = await fetch(`https://commonservices${apiConfig[apiConfig.mode].dynamicHost}/${route}/service-collection?${isPrivateDomain ? "domain" : "subdomain"}=${host}`, {
    headers: {
      'Cache-Control': cacheControl
    }
  });
  ;
  return response.json();
};
export const serviceCollectionDetailsfetchTemplateData = async (
  hostname,
  slug,
  condition,
  cacheControl = "no-cache"
) => {
  let route = "publish-site-editor/PublishTemplateGet";
  let hostNameValue = hostName(hostname);
  let response;
  let host = AppLinkUrl.privateDomain(hostNameValue)
    ? hostNameValue
    : AppLinkUrl.subdomain(hostNameValue);
  let isPrivateDomain = AppLinkUrl.privateDomain(hostNameValue);

  response = await fetch(`https://commonservices${apiConfig[apiConfig.mode].dynamicHost}/${route}/service-collection-details/${slug}?${isPrivateDomain ? "domain" : "subdomain"}=${host}`, {
    headers: {
      'Cache-Control': cacheControl
    }
  });
  ;
  return response.json();
};
export const SuccessFullfetchTemplateData = async (
  hostname,
  slug,
  condition,
  cacheControl = "no-cache"
) => {
  let route = "publish-site-editor/PublishTemplateGet";
  let hostNameValue = hostName(hostname);
  let response;
  let host = AppLinkUrl.privateDomain(hostNameValue)
    ? hostNameValue
    : AppLinkUrl.subdomain(hostNameValue);
  let isPrivateDomain = AppLinkUrl.privateDomain(hostNameValue);

  response = await fetch(`https://commonservices${apiConfig[apiConfig.mode].dynamicHost}/${route}/order-successfull?${isPrivateDomain ? "domain" : "subdomain"}=${host}`, {
    headers: {
      'Cache-Control': cacheControl
    }
  });
  ;
  return response.json();
};

export const shopfetchTemplateData = async (hostname, slug, condition, cacheControl = "no-cache") => {
  let route = "publish-site-editor/PublishTemplateGet";
  let hostNameValue = hostName(hostname);
  let response;
  let host = AppLinkUrl.privateDomain(hostNameValue)
    ? hostNameValue
    : AppLinkUrl.subdomain(hostNameValue);
  let isPrivateDomain = AppLinkUrl.privateDomain(hostNameValue);

  response = await fetch(`https://commonservices${apiConfig[apiConfig.mode].dynamicHost}/${route}/shop?${isPrivateDomain ? "domain" : "subdomain"}=${host}`, {
    headers: {
      'Cache-Control': cacheControl
    }
  });
  ;
  return response.json();
};
const getApiUrl = (slug, template) => {
  const route = "draft-site-editor/DefaultPreviewNew";
  const baseApiUrl = `https://commonservices${apiConfig[apiConfig.mode].dynamicHost}`;
  const apiEndpoint = slug === "/" ? "home" : slug;
  return `${baseApiUrl}/${route}/${apiEndpoint}?template=${template}`;
};

export const fetchTemplateDataEDITOR = async (slug, template, authro, hash, filters, cacheControl = "no-cache") => {
  try {
    // let response = await fetch(getApiUrl(slug, template), fetchHeader(authro, hash));
    console.log("line 483", {
      method: "get",
      url: getApiUrl(slug, template),
      headers: fetchHeader(authro, hash),
      data: filters
    })
    let response = await axios({
      method: "get",
      url: getApiUrl(slug, template),
      headers: fetchHeader(authro, hash),
      data: filters
    })
      .then((success) => {
        if (success?.status !== 401) {
          if (success?.data) return success.data;
        } else {
          return []
        }
      })
      .catch((error) => {
        if (
          error.response &&
          error.response.status &&
          error.response.status === 401
        ) {
          window.location.href = "https://manage.webneed.com";
        } else {
          return []
        }
      });
    return response
  } catch (error) {
    console.error('Error fetching template data:', error);
    throw error;
  }
};

export const fetchTemplateDataHome = async (hostname, slug, condition, cacheControl = "no-cache") => {
  let hostNameValue = hostName(hostname);
  let dynamicslug = getSlug(hostname, slug);
  let response;
  let isPrivateDomain = AppLinkUrl.privateDomain(hostNameValue);
  let host = AppLinkUrl.privateDomain(hostNameValue)
    ? hostNameValue
    : AppLinkUrl.subdomain(hostNameValue);
  let route = "publish-site-editor/PublishTemplateGet";
  if (AppLinkUrl.subdomain(hostNameValue) === "editor" || AppLinkUrl.subdomain(hostNameValue) === "preview") {
    response = await fetch(`https://commonservices${apiConfig[apiConfig.mode].dynamicHost}/${route}/home?${isPrivateDomain ? "domain" : "subdomain"}=${"mysiteu8pu7"}`);
    return response.json();
  } else {
    response = await fetch(`https://commonservices${apiConfig[apiConfig.mode].dynamicHost}/${route}${"home"}?${isPrivateDomain ? "domain" : "subdomain"}=${host}`, {
      headers: {
        'Cache-Control': cacheControl
      }
    });
    ;
    return response.json();
  }
};
export const CheckGuest = () => {
  if (
    (Auth.isLogin() && AppLinkUrl.privateDomain()) ||
    (Auth.isSubdomainLogin() && AppLinkUrl.subdomain())
  ) {
    return false;
  } else {
    return true;
  }
};

export default fetchTemplateData;
