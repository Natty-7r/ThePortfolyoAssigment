import AlexioHead from "@/src/components/ui/AlexioHead";
import "@/src/styles/globals.css";
import MainLayout from "./layout";
import ContextProvider from "@/src/utils/providers/context.provider";

export default function App({ Component, pageProps }) {
  return (
    <ContextProvider>
      <AlexioHead />
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ContextProvider>
  );
}
