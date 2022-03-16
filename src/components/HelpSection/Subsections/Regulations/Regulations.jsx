import React from "react";

import classes from "./Regulations.module.scss";

const Regulations = () => {
  return (
    <>
      <section className={classes["regulations"]}>
        <h1>Regulamin</h1>
        <div>
          <ol>
            <li>
              Regulamin zawiera zasady zawierania umów pomiędzy Pośrednikiem a
              Kupującym w Sklepie.
            </li>{" "}
            <li>Ceny produktów nie zawierają kosztu dostawy.</li>{" "}
            <li>
              Pośrednik zastrzega sobie prawo do dokonywania na bieżąco zmian w
              cenach produktów.
            </li>
            <li>
              Pośrednik nie odpowiada za brak możliwości korzystania ze Sklepu z
              powodów technicznych leżących wyłącznie po stronie Kupującego,
              takich jak: nieprawidłowe ustawienia przeglądarki lub brak dostępu
              do sieci Internet
            </li>
            <li>
              Pośrednik nie odpowiada za stan dostarczonych przez jego usługę
              produktów.
            </li>
            <li>
              Pośrednik może przeprowadzić akcje promocyjne oraz wyprzedaże na
              odrębnie określonych zasadach
            </li>
            <li>
              Potwierdzenie, udostęnienie, utrwalenie i zabezpieczenie wszelkich
              istotnych postanowień umowy w celu uzyskania dostępu do tych
              informacji w przyszłości następuje w postaci:
              <ol>
                <li>
                  potwierdzenia zamówienia poprzez wysłanie na wskazany przez
                  Kupującego adres e-mail
                </li>
              </ol>
            </li>
            <li>
              Pośrednik informuje o znanych mu gwarancjach udzielonych przez
              osoby trzecie dla produktów znajdujących się w sklepie
            </li>
            <li>
              Pośrednik nie pobiera żadnych opłat za komunikację z nim z
              wykorzystaniem środków porozumiewania na odległość
            </li>
            <li>
              Kupujący zobowiązany jest do:{" "}
              <ol>
                <li>
                  korzystania ze sklepu w sposób nie zakłócający jego
                  funkcjonowaniu, w szczególności poprzez użycie określonego
                  oprogramowania lub urządzeń
                </li>
                <li>
                  niepodejmowania działań takich jak: rozsyłanie lub
                  umieszczanie w ramach sklepu niezamówionej informacji
                  handlowej
                </li>
                <li>
                  korzystania ze sklepu w sposób nieuciążliwy dla innych
                  Kupujących oraz dla Sprzedającego
                </li>
              </ol>
            </li>
          </ol>
        </div>
      </section>
    </>
  );
};

export default Regulations;
