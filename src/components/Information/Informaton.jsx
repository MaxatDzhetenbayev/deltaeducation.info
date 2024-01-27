import React from "react";
import styles from "./Information.module.scss";
import { Clouds, HTag, PTag, Wrapper } from "../../shared/ui";

const useList = [
  "Разработка бэкенда сайтов и веб-приложений",
  "Data Science: анализ и визуализация данных",
  "Администрирование (DevOps)",
  "Машинное обучение (нейросети)",
  "Автоматизированное тестирование",
  "Разработка бэкенда мобильных приложений",
  "Разработка десктопных программ",
  "Создание игр",
];

export const Informaton = () => {
  return (
    <Wrapper>
      <div className={styles.root}>
        <div className={styles.information_demand}>
          <HTag className={styles.information_title} variant="h3">
            Востребованная на рынке труда IT-профессия
          </HTag>
          <PTag variant="md" style={{ marginTop: "30px" }}>
            Python-разработчик занимается разработкой бэкенда сайтов и
            веб-приложений — серверной части, которая отвечает за логику и базы
            данных и не видна пользователям. Его главная цель — сделать так,
            чтобы сервисы понимали запросы, а сайты правильно реагировали на
            действия посетителей.
          </PTag>
          <div className={styles.inner}>
            <PTag variant="md">
              Изучите Python — язык с простым и понятным синтаксисом
            </PTag>
            <PTag>
              Научитесь работать с сетевыми запросами и проектировать
              архитектуру приложений. Освойте самый популярный веб-фреймворк
              Django, чтобы быстро создавать безопасные и поддерживаемые сайты
            </PTag>
          </div>
        </div>
        <div className={styles.information_use}>
          <HTag className={styles.information_title} variant="h3">
            В каких областях IT применяют Python
          </HTag>
          <PTag style={{ marginTop: "30px" }}>
            На программе вы научитесь программировать, использовать структуры
            данных и создавать бэкенд для приложений и сайтов. С этим
            фундаментом вы сможете при желании доучиться и быстро сменить сферу
            или язык/технологии
          </PTag>
          <div className={styles.information_clouds}>
            {useList.map((cloud) => {
              const variants = ["ghost", "blues", "secondary"];

              const variantIndex = Math.floor(Math.random() * variants.length);
              return (
                <Clouds key={cloud} variant={variants[variantIndex]} size="lg">
                  {cloud}
                </Clouds>
              );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
