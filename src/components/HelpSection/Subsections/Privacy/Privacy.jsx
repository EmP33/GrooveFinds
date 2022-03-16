import React from "react";

import classes from "./Privacy.module.scss";

const Privacy = () => {
  return (
    <>
      <section className={classes.privacy}>
        <h1>Polityka prywatności</h1>
        <div>
          <ol>
            <li>
              Wyrażenie przez Kupującego zgody na przetwarzanie danych osobowych
              jest dobrowolne, a zgoda na przetwarzanie danych w określonym celu
              może zostać w każdej chwili wycofana.
            </li>
            <li>
              Administrator Danych Osobowych przetwarza dane osobowe Kupujących
              na podstawie zgody oraz w związku z prawnie uzasadnionymi
              interesami Pośrednika.
            </li>
            <li>
              Administrator Danych Osobowych odpowiada za zgodne z prawem
              przetwarzanie danych osobowych, a zasady zbierania, przetwarzania
              i przechowywania danych osobowych, a także prawa Kupującego
              związane z jego danymi osobowymi.
            </li>
            <li>
              Administrator Danych Osobowych zbiera i przetwarza dane osobowe
              wyłącznie w zakresie jaki jest to uzasadnione umownym lub prawnym
              obowiązkiem.
            </li>
          </ol>
        </div>
      </section>
    </>
  );
};

export default Privacy;
