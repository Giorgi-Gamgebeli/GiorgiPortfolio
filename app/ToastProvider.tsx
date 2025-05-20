"use client";

import { Toaster } from "react-hot-toast";
import { useDarkModeContext } from "./_context/DarkModeContext";

function ToastProvider({ children }: { children: React.ReactNode }) {
  const { isDarkMode } = useDarkModeContext();

  return (
    <>
      {children}

      <Toaster
        position="bottom-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3 * 1000,
          },
          error: {
            duration: 5 * 1000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: isDarkMode ? "#0c122c" : "white",
            color: isDarkMode ? "white" : "#0c122c",
            zIndex: 9999,
          },
        }}
      />
    </>
  );
}

export default ToastProvider;
