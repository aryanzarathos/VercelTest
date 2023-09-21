import Axios from "axios";
// import { userDetail } from "../Constant/auth";
import Api from "./Api";
import useSWR from 'swr';
import Auth from "./Auth";
// import Cookies from "./Cookies";
class Request extends Api {
  constructor() {
    super();
  }
  /**
   *
   * @param {*} url : API URL
   * @param {*} postData : data in object
   * @param {*} onSuccess : Callback for success response,
   * @param {*} onError : Callback for error response,
   * @param {*} headerType : "auth" is default,
   */

  postSWR = async (url, postData, onSuccess, onError, headerType = "auth", revalidateOption, cacheControlOption) => {

    try {
      let options = {}

      if (revalidateOption) {
        options["revalidate"] = {
          maxAge: revalidateOption
        }
      }
      if (cacheControlOption) {
        options["cacheControl"] = {
          maxAge: cacheControlOption
        }
      }
      const { data } = await useSWR(url, async () => {
        var apiResponse = await Axios.post(url, postData, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': Auth.token(),
            'hash': Auth.hash(),
            'Token': Auth.token()
          },
        });

        if (apiResponse.status === 200 || apiResponse.status === 201) {
          return apiResponse?.data;
        } else {
          throw new Error(apiResponse?.data);
        }
      }, options);

      onSuccess(data);
    } catch (error) {
      onError(error);
    }
  };
  post = async (url, postData, onSuccess, onError, headerType = "auth", cacheControl = "no-cache") => {
    try {
      var apiResponse = await Axios.post(url, postData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': Auth.token(),
          'hash': Auth.hash(),
          'Token': Auth.token(),
          'Cache-Control': cacheControl
        },
        onUploadProgress: (fileUploadProgressEvent) => {
          localStorage.setItem(
            "Progress",
            JSON.stringify(fileUploadProgressEvent)
          );
        },
      });
      if (apiResponse.status === 200 || apiResponse.status === 201) {

        if (apiResponse?.data?.message) {
          if (apiResponse?.data?.message.includes("Some internal server error occurred, please contact admin with the Id:")) {
            // Auth.logout();
            window.history.pushState(null, document.title, window.location.href);
            window.addEventListener('popstate', function (event) {
              window.history.pushState(null, document.title, window.location.href);
            });
            window.location.href = "/";
          } else {
            onSuccess(apiResponse);
          }

        } else {
          onSuccess(apiResponse);
        }

      } else {
        onError(apiResponse?.data);
      }
      localStorage.setItem('ResetTimer', 'true');
    } catch (error) {
      if (error?.response) {

        if (error?.response?.data) {

          if (error?.response?.data?.message.includes("Some internal server error occurred, please contact admin with the Id:")) {

            // Auth.logout();
            window.history.pushState(null, document.title, window.location.href);
            window.addEventListener('popstate', function (event) {
              window.history.pushState(null, document.title, window.location.href);
            });
            window.location.href = "/";
          } else {
            onError(error);
          }
        } else {
          onError(error);
        }
      } else {
        onError(error);
      }

      if (error?.hasOwnProperty('response')) {
      }
      else {
      }

      return this.onError(apiResponse?.data)
    }
  };

  getSWR = async (url, onSuccess, onError, headerType = "auth", revalidateOption, cacheControlOption) => {
    try {
      let options = {}

      if (revalidateOption) {
        options["revalidate"] = {
          maxAge: revalidateOption
        }
      }
      if (cacheControlOption) {
        options["cacheControl"] = {
          maxAge: cacheControlOption
        }
      }
      const { data } = await useSWR(url, async () => {
        var apiResponse = await Axios.get(url, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': Auth.token(),
            'hash': Auth.hash(),
            'Token': Auth.token()
          },
        });

        if (apiResponse.status === 200 || apiResponse.status === 201) {
          return apiResponse?.data;
        } else {
          throw new Error(apiResponse?.data);
        }
      });

      onSuccess(data);
    } catch (error) {
      onError(error);
    }
  };

  get = async (url, onSuccess, onError, headerType = "auth", cacheControl = "no-cache") => {
    try {
      var apiResponse = await Axios.get(url, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': Auth.token(),
          'hash': Auth.hash(),
          'Token': Auth.token(),
          'Cache-Control': cacheControl
        },
      });
      if (apiResponse.status === 200 || apiResponse.status === 201) {
        if (apiResponse?.data?.message) {
          if (apiResponse?.data?.message.includes("Some internal server error occurred, please contact admin with the Id:")) {
            // Auth.logout();
            window.history.pushState(null, document.title, window.location.href);
            window.addEventListener('popstate', function (event) {
              window.history.pushState(null, document.title, window.location.href);
            });
            window.location.href = "/";
          } else {
            onSuccess(apiResponse);
          }

        } else {
          onSuccess(apiResponse);
        }

      } else {
        onError(apiResponse?.data);
      }
      localStorage.setItem('ResetTimer', 'true');
    } catch (error) {

      if (error.response) {

        if (error.response.data) {

          if (error.response.data.message.includes("Some internal server error occurred, please contact admin with the Id:")) {

            // Auth.logout();
            window.history.pushState(null, document.title, window.location.href);
            window.addEventListener('popstate', function (event) {
              window.history.pushState(null, document.title, window.location.href);
            });
            window.location.href = "/";
          } else {
            onError(error);
          }
        } else {
          onError(error);
        }
      } else {
        onError(error);
      }


      if (error.hasOwnProperty('response')) {
      }
      else {
      }

      return this.onError(apiResponse?.data)
    }
  };

  patchSWR = async (url, patchData, onSuccess, onError, headerType = "auth", revalidateOption, cacheControlOption) => {

    try {
      let options = {}

      if (revalidateOption) {
        options["revalidate"] = {
          maxAge: revalidateOption
        }
      }
      if (cacheControlOption) {
        options["cacheControl"] = {
          maxAge: cacheControlOption
        }
      }
      const { data } = await useSWR(url, async () => {
        var apiResponse = await Axios.patch(url, patchData, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': Auth.token(),
            'hash': Auth.hash(),
            'Token': Auth.token()
          },
        });

        if (apiResponse.status === 200 || apiResponse.status === 201) {
          return apiResponse?.data;
        } else {
          throw new Error(apiResponse?.data);
        }
      });

      onSuccess(data);
    } catch (error) {
      onError(error);
    }
  };
  patch = async (url, patchData, onSuccess, onError, headerType = "auth", cacheControl = "no-cache") => {

    try {
      var apiResponse = await Axios.patch(url, patchData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': Auth.token(),
          'hash': Auth.hash(),
          'Token': Auth.token(),
          'Cache-Control': cacheControl
        },
      });

      if (apiResponse.status === 200 || apiResponse.status === 201) {

        if (apiResponse?.data?.message) {
          if (apiResponse?.data?.message.includes("Some internal server error occurred, please contact admin with the Id:")) {
            // Auth.logout();
            window.history.pushState(null, document.title, window.location.href);
            window.addEventListener('popstate', function (event) {
              window.history.pushState(null, document.title, window.location.href);
            });
            window.location.href = "/";
          } else {
            onSuccess(apiResponse);
          }

        } else {
          onSuccess(apiResponse);
        }

      } else {
        onError(apiResponse?.data);
      }
      localStorage.setItem('ResetTimer', 'true');
    } catch (error) {
      if (error.response) {
        if (error.response.data) {
          if (error.response.data.message.includes("Some internal server error occurred, please contact admin with the Id:")) {

            // Auth.logout();
            window.history.pushState(null, document.title, window.location.href);
            window.addEventListener('popstate', function (event) {
              window.history.pushState(null, document.title, window.location.href);
            });
            window.location.href = "/";
          } else {
            onError(error);
          }
        } else {
          onError(error);
        }
      }
      else {
        onError(error);
      }
    }
  };

  deleteSWR = async (url, onSuccess, onError, headerType = "auth", revalidateOption, cacheControlOption) => {

    try {
      let options = {}

      if (revalidateOption) {
        options["revalidate"] = {
          maxAge: revalidateOption
        }
      }
      if (cacheControlOption) {
        options["cacheControl"] = {
          maxAge: cacheControlOption
        }
      }
      const { data } = await useSWR(url, async () => {
        var apiResponse = await Axios.delete(url, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': Auth.token(),
            'hash': Auth.hash(),
            'Token': Auth.token()
          },
        });

        if (apiResponse.status === 200 || apiResponse.status === 201) {
          return apiResponse?.data;
        } else {
          throw new Error(apiResponse?.data);
        }
      });

      onSuccess(data);
    } catch (error) {
      onError(error);
    }
  };

  delete = async (url, onSuccess, onError, headerType = "auth", cacheControl = "no-cache") => {

    try {
      var apiResponse = await Axios.delete(url, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': Auth.token(),
          'hash': Auth.hash(),
          'Token': Auth.token(),
          'Cache-Control': cacheControl
        },
      });

      if (apiResponse.status === 200 || apiResponse.status === 201) {

        if (apiResponse?.data?.message) {
          if (apiResponse?.data?.message.includes("Some internal server error occurred, please contact admin with the Id:")) {
            // Auth.logout();
            window.history.pushState(null, document.title, window.location.href);
            window.addEventListener('popstate', function (event) {
              window.history.pushState(null, document.title, window.location.href);
            });
            window.location.href = "/";
          } else {
            onSuccess(apiResponse);
          }

        } else {
          onSuccess(apiResponse);
        }

      } else {
        onError(apiResponse?.data);
      }
      localStorage.setItem('ResetTimer', 'true');
    } catch (error) {
      if (error.response) {
        if (error.response.data) {
          if (error.response.data.message.includes("Some internal server error occurred, please contact admin with the Id:")) {

            // Auth.logout();
            window.history.pushState(null, document.title, window.location.href);
            window.addEventListener('popstate', function (event) {
              window.history.pushState(null, document.title, window.location.href);
            });
            window.location.href = "/";
          } else {
            onError(error);
          }
        } else {
          onError(error);
        }
      }
      else {
        onError(error);
      }
    }
  };

  returnResponse = (data, error) => {
    return {
      data,
      error,
    };
  };

  onResponse = (data) => {
    return this.returnResponse(data, undefined);
  };

  onError = (error) => {
    return this.returnResponse(undefined, error);
  };
}

export default Request;
