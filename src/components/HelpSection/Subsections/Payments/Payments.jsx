import React from "react";

import classes from "./Payments.module.scss";

const Payments = () => {
  return (
    <section className={classes.payments}>
      <h1>Płatności</h1>
      <div>
        <ol>
          <li>
            W sklepie stosowanie są następujące metody płatności:{" "}
            <ol>
              <li>
                płatność za pomocą bankowości internetowej - rozliczenia
                transakcji karta kredytową, e-przelewem przeprowadzane są za
                pośrednictwem Przelewy24
              </li>
            </ol>
          </li>
          <li>
            Dla uniknięcia wątpliwości - koszty transakcji finansowanych ponosi
            Kupujący
          </li>
        </ol>
      </div>
    </section>
  );
};

export default Payments;
