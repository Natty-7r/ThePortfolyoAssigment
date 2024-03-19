import AlexioHead from "@/src/AlexioHead";
import "@/styles/globals.css";
import MainLayout from "./layout";
import AlexioState, { AlexioContext } from "@/src/Context";
import UIState from "@/src/UIContext";

export default function App({ Component, pageProps }) {
  return (
    <UIState>
      <AlexioState>
        <AlexioHead />
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </AlexioState>
    </UIState>
  );
}
