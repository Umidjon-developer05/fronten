import { useTranslation, Trans } from "react-i18next";
import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";

const lngs = {
  en: { nativeName: "English" },
  de: { nativeName: "Deutsch" },
};

function App() {
  const { t, i18n } = useTranslation();
  const [count, setCounter] = useState(0);

  return (
    <div>
      <Navbar />
      <header>
        <p>
          <Trans i18nKey="description.part1">
            <div class="text-red-500">Hello world</div>
          </Trans>
        </p>
      </header>
    </div>
  );
}

export default App;
