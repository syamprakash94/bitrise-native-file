// @flow
import axios from "axios";
import { type ParamsType } from "./config";
// import { getAccessToken, getRefreshToken, saveAccessToken, saveRefreshToken } from '../utilities/asyncStore';
// import { reduxStore } from '../redux/store';
// import { logout } from '../redux/reducers/auth/authenticationReducer';
// import Snackbar from 'react-native-snackbar';

type APIDataType = {
  params: any;
  method?: string;
  endPoint?: string;
  paramsType?: ParamsType;
  headerType?: string;
  access_token?: any;
};

// const clearToken = () => {
//   saveAccessToken('');
//   saveRefreshToken('');
//   reduxStore.dispatch(logout());
//   console.log('Token Expired');
// };
// Function to refresh the token
// const refreshAccessToken = async () => {
//   const refreshToken = await getRefreshToken();
//   if (!refreshToken) {
//     throw new Error('No refresh token available');
//   }
//   try {
//     const response = await axios.post(apiEndpoints.refreshToken, { refreshToken: refreshToken });
//     const access_token = response.data.data.access.token;
//     const refresh_token = response.data.data.refresh.token;
// await saveAccessToken(access_token);
// await saveRefreshToken(refresh_token);
//     return access_token;

//   } catch (error) {
//     clearToken();
//     throw new Error('Unable to refresh token');
//   }
// };

export const apiManager = async ({
  params,
  method = "post",
  endPoint = "",
  paramsType = "default",
}: APIDataType): Promise<any> => {
  const apiURL = endPoint;
  //   let deviceToken = await getAccessToken();
  const header =
    paramsType === "formData"
      ? {
          "Content-Type": "multipart/form-data",
          // Authorization: deviceToken ? `Bearer ${deviceToken}` : '',
          Accept: "application/json",
        }
      : {
          Accept: "application/json",
          "Content-Type": "application/json",
          // Authorization: deviceToken ? `Bearer ${deviceToken}` : '',
        };

  const axiosConfig = {
    url: apiURL,
    method: method,
    headers: header,
    data: paramsType === "formData" ? params : JSON.stringify(params),
  };

  return new Promise((resolve, reject) => {
    axios(axiosConfig)
      .then(async (response) => {
        console.log("API Response:", response);
        const responseData = response;
        resolve(responseData);
      })
      .catch(async (error) => {
        if (error.response) {
          if (
            error.response.data.code === 401 ||
            error.response.status === 401
          ) {
            try {
              //   deviceToken = await refreshAccessToken(); // Refresh the token
              //   axiosConfig.headers.Authorization = `Bearer ${deviceToken}`;
              const retryResponse = await axios(axiosConfig);
              resolve(retryResponse.data);
            } catch (refreshError) {
              // clearToken();
              reject(refreshError);
            }
          } else {
            // Handle other error responses
            // Snackbar.show({
            //   text: error.response.data.message
            //     || error.response.data.error
            //     || error.response.data.data
            //     || 'Something went wrong!',
            //   duration: 2000,
            //   backgroundColor: 'red',
            //   textColor: 'white',
            // });
            reject(error.response.data);
          }
        } else if (error.request) {
          // The request was made but no response was received
          console.log("errorRequest", error.request);
          //   Snackbar.show({
          //     text: error.request._response || 'Something went wrong!',
          //     duration: 2000,
          //     backgroundColor: 'red',
          //     textColor: 'white',
          //   });
          reject(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("errorMessage", error.message);
          reject(error.message);
        }
      });
  });
};
