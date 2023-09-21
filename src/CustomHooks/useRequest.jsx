import axios from 'axios';
import { useSWR } from "swr";
const useRequest = (url, method, payload,revalidateOption,cacheControlOption) => {

    // const options = {
    //     revalidate: 10000, // Revalidate the cache after 10 seconds
    //     cacheControl: {
    //       maxAge: 60000, // Cache the response for 60 seconds
    //     },
    //   };
    let options={}

        if(revalidateOption){
            options["revalidate"]={
                maxAge:revalidateOption
            }
        }
        if(cacheControlOption){
            options["cacheControl"]={
                maxAge:cacheControlOption
            }
        }
    
      const { data } = useSWR(url, async () => {
        // Make the request
        const apiResponse = await axios[method](url, data);

        if (apiResponse.status === 200 || apiResponse.status === 201) {
          return apiResponse.data;
        } else {
          throw new Error(apiResponse.data);
        }
      }, options);

    return [data,
        { error: data && data.errors },
        { success: data && data.success },]
}

export default useRequest

////   const { data, error, success } = useRequest("/users","get",{"kjhsdkhaksd":adhuasdkh});