import React from "react";

import classes from "./Shipping.module.scss";

const Shipping = () => {
  return (
    <>
      <section className={classes.shipping}>
        <h1>Zawarcie umowy i relizacja</h1>
        <div>
          <ol>
            {" "}
            <li>
              Czas dostawy wynosi maksymalnie do 48h od momentu złożenia
              zamówienia
            </li>
            <li>
              Zamówienia w Sklepie Pośrednika mogą być składane 24 godziny na
              dobę przez 7 dni w tygodniu, z wyłączeniem możliwych przerw
              technicznych lub z przyczyn leżących poza zakresem Pośrednika
            </li>
            <li>
              Zawarcie umowy z Kupującym następuje z chwilą złożenia zamówienia
            </li>
            <li>
              W celu złożenia zamówienia Kupujący powinien wykonać co najmniej
              następujące czynności:{" "}
              <ol>
                <li>dodanie do koszyka produktu</li>
                <li>przejście do koszyka</li>
                <li>wybór dostawy i płatności</li>
                <li>
                  podanie danych Adresu pocztowego i innych danych niezbędnych
                  do realizacji zamówienia
                </li>
                <li>
                  złożenie zamówienia poprzez użycie przeznaczonego do tego
                  przycisku
                </li>
              </ol>
            </li>
            <li>
              Zamówienie zostanie złożone prawidłowo, jeżeli do elektronicznego
              formularza zamówienia zostaną wprowadzone wszelkie dane
              pozwalające na prawidłową identyfikację Kupującego
            </li>
            <li>
              Kupujący jest uprawniony do anulowania prawidłowo złożonego
              zamówienia do momentu rozpoczęcia realizacji zamówienia przez
              Sprzedawcę, przesyłając stosowne oświadczenie pocztą elektroniczną
              na adres e-mail Sprzedawcy kontakt@gmail.com
            </li>{" "}
            <li>
              Jeżeli zamówienie nie może zostać zrealizowane w terminie
              określonym w Regulaminie z uwagi na brak zamówionego Produktu lub
              zamówionej ilości Produktów, Pośrednik niezwłocznie powiadomi o
              tym Kupującego telefonicznie lub za pomocą poczty elektronicznej i
              zaproponuje inny termin realizacji zamówienia. Jeżeli Kupujący nie
              zaakceptuje nowego terminu realizacji zamówienia, wówczas
              zamówienie traktuje się jako niebyłe a żadna ze stron nie podnosi
              odpowiedzialności z tytułu braku realizacji zamówienia.
            </li>
          </ol>
        </div>
      </section>
    </>
  );
};

export default Shipping;
