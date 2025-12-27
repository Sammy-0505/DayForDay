import { useEffect, useState } from "react";
import { CardMedias } from "../components/medias";
import styles from "./styles.module.css";
import { TbCalendarMonth } from "react-icons/tb";
import { Modal } from "../components/modal";

export function MainPage() {
  const now = new Date();
  const month = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  const [dayId, setDayId] = useState();

  const [selectedDay, setSelectedDay] = useState();

  const [datas, setDatas] = useState([]);

  const arrMediaValues = [
    { color: "#64B95F", filter: true, title: "Total do Mês", total: 100 },
    { color: "#FFB53F", filter: true, title: "Média por Mês", total: 100 },
    { color: "#853FFF", filter: true, title: "Média por Dia", total: 100 },
    {
      color: "#3FA2FF",
      filter: true,
      title: "Categoria com maior Gasto",
      total: 100,
    },
  ];

  const [hideModalValue, setHideModalValue] = useState("");
  const [valueDay, setValueDay] = useState(null);

  const category = ["Comida", "Gasolina", "Pedágio"];

  const weekDays = [
    { day: "Sábado", attribute: 6 },
    { day: "Segunda", attribute: 1 },
    { day: "Terça", attribute: 2 },
    { day: "Sexta", attribute: 5 },
    { day: "Quarta", attribute: 3 },
    { day: "Quinta", attribute: 4 },
    { day: "Domingo", attribute: 0 },
  ].sort((a, b) => a.attribute - b.attribute);

  function removeSpent(id) {
    setDatas((prev) => prev.filter((i) => i.id !== id));
  }

  function getDay() {
    const data = new Date();
    const today = data.getDay();

    let low = 0;
    let high = weekDays.length - 1;

    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      const guess = weekDays[mid];

      if (guess.attribute === today) {
        setValueDay(mid);
        return;
      }

      if (guess.attribute > today) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
  }
  const filtersData = datas.filter((v) => v.data.day === selectedDay);

  function getCurrentMonth() {
    const now = new Date();

    const lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0);

    return lastDay.getDate();
  }

  function getCurrentDay() {
    const now = new Date();

    return now.getDate() - 1;
  }

  useEffect(() => {
    getDay();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const filtered = datas.filter((v) => v.data.day === dayId);
    console.log(filtered);
  }, [datas]);

  function addSpent(spent) {
    setDatas((prev) => [...prev, spent]);
  }

  return (
    <div className={styles.page}>
      <div className={styles.pageContainer}>
        <div className={styles.header}>
          <div className={styles.content}>
            <img
              src="./src/images/logo_v1.png"
              alt="logo"
              className={styles.logo}
            />
            <div className={styles.monthFilter}>
              <span>Dezembro</span> <TbCalendarMonth size={"20px"} />
            </div>
          </div>
        </div>

        <div className={styles.contentContainer}>
          <div className={styles.contentMedias}>
            {arrMediaValues.map((v) => {
              return (
                <CardMedias
                  key={v.color}
                  color={v.color}
                  total={v.total}
                  filter={v.filter}
                  title={v.title}
                />
              );
            })}
          </div>

          <div className={styles.mainContent}>
            <div className={styles.listDays}>
              {weekDays.map((a, i) => {
                return (
                  <div
                    className={`${styles.days} ${
                      valueDay === i ? styles.activeDay : ""
                    }`}
                    key={i}
                  >
                    {a.day}
                  </div>
                );
              })}
            </div>

            <div className={styles.calendar}>
              {Array.from({ length: getCurrentMonth() }, (_, i) => (
                <div
                  key={i}
                  className={`${styles.daysOfMonth} ${
                    getCurrentDay() === i ? styles.today : ""
                  }`}
                  onClick={() => {
                    setHideModalValue("unhide"),
                      setSelectedDay(i + 1),
                      setDayId(i + 1);
                  }}
                >
                  {i + 1}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Modal
        open={"asad"}
        close={"asdads"}
        datas={filtersData}
        category={category}
        hideModalValue={hideModalValue}
        setHideModalValue={setHideModalValue}
        daySelected={`${selectedDay} ${
          month[now.getMonth()]
        } ${now.getFullYear()}`}
        setDatas={setDatas}
        dayId={dayId}
        addSpent={addSpent}
        removeSpent={removeSpent}
      />
    </div>
  );
}
