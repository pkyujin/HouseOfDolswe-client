import { useEffect } from "react";
import axios from "axios";

const KakaoRedirectHandler = () => {

  useEffect(() => {
    const params = new URL(window.location.href).searchParams;
    const code = params.get("code");

    const grant_type = "authorization_code";
    const client_id = import.meta.env.VITE_KAKAO_CLIENT_ID;
    const redirect_uri = `${import.meta.env.VITE_FRONTEND_BASE_URL}/login/oauth`;

    axios
      .post(
        `https://kauth.kakao.com/oauth/token`,
        null,
        {
          params: {
            grant_type,
            client_id,
            redirect_uri,
            code,
          },
          headers: {
            "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
          },
        }
      )
      .then((res) => {
        console.log(res);

        // Kakao SDK 접근
        const { Kakao } = window;
        Kakao.Auth.setAccessToken(res.data.access_token);

        Kakao.API.request({
          url: "/v2/user/me",
          success: (response: any) => {
            console.log(response);
          },
          fail: (error: any) => {
            console.error(error);
          },
        });

        // 백엔드 로그인 API
        // api.post("/api/user/account/login/kakao", {
        //   accessToken: res.data.access_token,
        // }).then((res) => {
        //   console.log(res);
        // });
      });
  }, []);

  return <div>kakao login 완료</div>;
};

export default KakaoRedirectHandler;