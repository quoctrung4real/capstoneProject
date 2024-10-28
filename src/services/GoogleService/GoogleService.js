import axios from "axios";

const client_id = process.env.REACT_APP_GOOGLE_CLIENT_ID;
const client_secret = process.env.REACT_APP_GOOGLE_SECRET_ID;
const redirect_uri = process.env.REACT_APP_GOOGLE_REDIRECT_URI;
const grant_type = process.env.REACT_APP_GOOGLE_GRANT_TYPE;
export const GetTokenAndRefreshTokenFromCode = async (code) => {
  try {
    const formData = new FormData();
    if (client_id) formData.append("client_id", client_id);
    if (client_secret) formData.append("client_secret", client_secret);
    if (redirect_uri) formData.append("redirect_uri", redirect_uri);
    if (grant_type) formData.append("grant_type", "authorization_code");
    if (code) formData.append("code", code);
    const response = axios.post(
      "https://oauth2.googleapis.com/token",
      formData,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    if (response) {
      return (await response).data;
    }
  } catch (e) {
    throw new Error(e.message);
  }
};
