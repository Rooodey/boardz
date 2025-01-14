import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Home() {
  const t = useTranslations();

  return (
    <main>
      <h1>{t("greeting")}</h1>
      <button className="px-4 py-2 text-white bg-primary dark:text-gray-950 rounded-lg">
        Button
      </button>
    </main>
  );
}
