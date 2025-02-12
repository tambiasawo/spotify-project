import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import initTranslations from "@/i18n";
import TranslationsProvider from "./utils/TranslationsProvider";

const i18nNamespaces = ["homepage", "common"];

export default async function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={i18nNamespaces}
    >
      <div className="p-2">
        <Header />
        <div className="flex justify-between gap-2 h-full">
          <Sidebar />
          <Main />
        </div>
      </div>
    </TranslationsProvider>
  );
}
