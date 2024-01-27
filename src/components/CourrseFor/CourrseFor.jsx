
import { HTag, PTag, Wrapper } from "../../shared/ui";

import junior from "../../assets/images/coursesFor/junior.png";
import middle from "../../assets/images/coursesFor/middle.png";
import senior from "../../assets/images/coursesFor/senior.png";

import styles from "./CourrseFor.module.scss";

export const CourrseFor = () => {
  const coursesForList = [
    {
      img: junior,
      title: "Тем кто хочет научиться программировать",
      text: "С нуля освоите язык программирования , получите помощь и советы от опытных спикеров, попрактикуетесь на реальных задачах. Напишете первые проекты для портфолио и поработаете в команде.",
    },
    {
      img: middle,
      title: "Начинающим разработчикам",
      text: "Структурируете имеющиеся знания, а кураторы помогут разобраться с трудными для понимания темами и порекомендуют дополнительную литературу. Научитесь эффективно решать повседневные задачи программиста.",
    },
    {
      img: senior,
      title: "Опытным программистам",
      text: "Тем кто хочет освоить новый язык программирования и расширит свой кругозор знаний.",
    },
  ];

  return (
    <section>
      <Wrapper>
        <div className={styles.root}>
          <HTag variant="h2">Кому подойдут эти курсы</HTag>
          <div className={styles.inner}>
            {coursesForList.map((item) => (
              <div key={item.title} className={styles.item}>
                <img src={item.img} alt="" />
                <HTag style={{ marginTop: "20px" }} variant="h4">
                  {item.title}
                </HTag>
                <PTag style={{ marginTop: "10px" }}>{item.text}</PTag>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </section>
  );
};
