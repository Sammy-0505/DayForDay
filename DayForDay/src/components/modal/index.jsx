import styles from "./styles.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { IoCloseOutline } from "react-icons/io5";
import { LuMinus } from "react-icons/lu";
import { IoMdAdd } from "react-icons/io";
import React, { useState } from "react";
import { PiMoneyWavy } from "react-icons/pi";

export function Modal({
  datas,
  category,
  hideModalValue,
  setHideModalValue,
  daySelected,
  dayId,
  addSpent,
  removeSpent,
}) {
  const [showDeleteSpent, setShowDeleteSpent] = useState(null);
  const [statusSpent, setStatusSpent] = useState("open");

  const [descriptionValue, setDescriptionValue] = useState("");
  const [costValue, setCostValue] = useState("");
  const [categorySpent, setCategorySpent] = useState("");

  function saveSpent() {
    addSpent({
      id: Date.now(),
      description: descriptionValue,
      data: {
        day: dayId,
        month: new Date().getMonth() + 1,
      },
      amount: Number(costValue),
      category: categorySpent,
    });
  }

  function clearAndSave() {
    saveSpent();
    setDescriptionValue("");
    // setCategorySpent("");
    setCostValue("");
  }

  // const month = [
  //   "Janeiro",
  //   "Fevereiro",
  //   "Março",
  //   "Abril",
  //   "Maio",
  //   "Junho",
  //   "Julho",
  //   "Agosto",
  //   "Setembro",
  //   "Outubro",
  //   "Novembro",
  //   "Dezembro",
  // ];

  // function todayDate() {
  //   const now = new Date();

  //   return `${daySelected} ${month[now.getMonth()]} de ${now.getFullYear()}`;
  // }

  // useEffect(() => {}, [saveSpent()]);

  return (
    <div
      className={`${styles.page} ${
        hideModalValue === "unhide" ? styles.unhideModal : styles.hideModal
      }`}
      onClick={() => setHideModalValue("hide")}
    >
      <div className={`${styles.card}`} onClick={(e) => e.stopPropagation()}>
        <div className={styles.topCard}>
          <div className={styles.title}>
            <h3>Gastos do Dia</h3>
            <p>{daySelected}</p>
            <div className={styles.total}>
              R$ {datas.reduce((acc, cur) => acc + cur.amount, 0)}
            </div>
          </div>

          <div
            className={styles.closeModal}
            onClick={() => setHideModalValue("hide")}
          >
            <IoCloseOutline size={28} />
          </div>
        </div>

        <div className={styles.conteinerCardSpent}>
          <div className={styles.createSpent}>
            <div className={styles.addTopSpen}>
              <span>Adicionar novo Gasto</span>
              <div
                className={`${styles.statusSpent}`}
                onClick={() => {
                  setStatusSpent(statusSpent === "open" ? "close" : "open");
                }}
              >
                {statusSpent === "open" ? <IoMdAdd /> : <LuMinus />}
              </div>
            </div>

            <div
              className={
                statusSpent === "open" ? styles.openSpen : styles.closeSpent
              }
            >
              <div className={styles.listInputText}>
                <div className={styles.inputTotal}>
                  <p>Descrição</p>
                  <input
                    value={descriptionValue}
                    onChange={(v) => setDescriptionValue(v.target.value)}
                    placeholder="Ex: almoço"
                    className={styles.inputText}
                    type="text"
                  />
                </div>

                <div className={styles.inputTotal}>
                  <p>Valor</p>
                  <input
                    value={costValue}
                    placeholder="Ex: R$ 120"
                    className={styles.inputText}
                    type="Number"
                    onChange={(v) => setCostValue(v.target.value)}
                  />
                </div>
              </div>

              <div className={styles.listInputText}>
                <div className={styles.inputTotal}>
                  <p>Categoria</p>

                  <select
                    className="form-select"
                    aria-label="Default select example"
                    defaultValue={""}
                    onChange={(v) => setCategorySpent(v.target.value)}
                  >
                    <option value={""} disabled>
                      Selecione uma Cátegoria
                    </option>

                    {category.map((v) => {
                      return (
                        <option value={v} key={v}>
                          {v}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>

              <button
                className={styles.buttonSave}
                onClick={() => clearAndSave()}
              >
                Adicionar Gasto
              </button>
            </div>
          </div>
          <div className={styles.listSpents}>
            <div className={styles.listSpentsTitle}>Gastos Registrados</div>

            <div className={styles.mapSpents}>
              {datas.length === 0 ? (
                <>Nenhum Registro</>
              ) : (
                datas.map((v) => (
                  <React.Fragment key={v.id}>
                    <div
                      className={styles.spent}
                      onMouseEnter={() => setShowDeleteSpent(v.id)}
                      onMouseLeave={() => setShowDeleteSpent(null)}
                    >
                      <div className={styles.spentTitles}>
                        <h5>{v.description}</h5>
                        <p>
                          {<PiMoneyWavy />}
                          {v.category}
                        </p>
                      </div>

                      <div className={styles.spentValueAndClose}>
                        <div>R$ {v.amount}</div>
                        <div
                          className={`${styles.deleteSpent} ${
                            showDeleteSpent === v.id
                              ? styles.showDeleteSpent
                              : styles.deleteSpent
                          }`}
                          onClick={() => removeSpent(v.id)}
                        >
                          <IoCloseOutline size={24} />
                        </div>
                      </div>
                    </div>
                  </React.Fragment>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
