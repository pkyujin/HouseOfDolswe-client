import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import "./index.css";

const kakaoKey = import.meta.env.VITE_APP_KAKAO_JS_KEY;

// Kakao SDK 초기화
if (kakaoKey && window.Kakao) {
  window.Kakao.init(kakaoKey);
  console.log("Kakao SDK initialized:", window.Kakao.isInitialized());
} else {
  console.error("Kakao JS key is missing or Kakao SDK not loaded");
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
