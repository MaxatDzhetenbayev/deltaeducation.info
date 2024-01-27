import { HTag, Wrapper } from '../../shared/ui'
import styles from './Courses.module.scss'
import unitylogo from '../../assets/card_images/unity.png'
import frontlogo from '../../assets/card_images/front-end.png'


const coursesData = [
    {
        name: "Python-developer",
        img: "https://static.tildacdn.info/tild3463-3839-4761-b936-313637336166/courses1.png",
        description: `Спрос на профессию Python-developer в Казахстане увеличивается с каждым днем, 
        особенно в крупных городах, таких как Алматы и Астана. Но чтобы стать востребованным специалистом, 
        нужно пройти обучение, начиная с курса «Python-developer».`,
        footer: [
            {
                salary: "8 млн",
                sub: "разработчиков",
            },
            {
                salary: "500 000 ₸",
                sub: "средняя зарплата",
            },
        ]
    },
    {
        name: "PHP-developer",
        img: "https://static.tildacdn.info/tild3862-3565-4630-b531-646130346665/courses2_.png",
        description: `PHP входит в десятку самых популярных языков программирования в рейтинге TIOBE. На нём написано большинство CMS,
        в том числе и WordPress, на котором работает 65% всех сайтов в мире. PHP под капотом у Wikipedia, ВКонтакте, Facebook и YouTube.`,
        footer: [
            {
                salary: "78%",
                sub: "сайтов по миру написаны на php",
            },
            {
                salary: "500 000 ₸",
                sub: "средняя зарплата",
            },
        ]
    },
    {
        name: "HTML & CSS",
        img: "https://static.tildacdn.info/tild6335-6431-4165-b437-636232363739/html_css.png",
        description: `HTML и CSS являются основными языками для создания и стилизации веб-страниц. Овладение этими навыками может 
        быть полезным для нескольких профессий и областей деятельности.`,
        footer: [
            {
                salary: "2837 компаний",
                sub: "ищут разработчиков",
            },
            {
                salary: "5 млн",
                sub: "создается сайтов ежедневно",
            },
        ]
    },
    {
        name: "Базы данных",
        img: "https://static.tildacdn.info/tild3433-3830-4362-b662-363566623339/db.png",
        description: `Профессия баз данных играет важную роль в современной информационной индустрии. Овладение навыками работы 
        с базами данных открывает множество возможностей для различных специалистов.`,
        footer: [
            {
                salary: "500 террабайт",
                sub: "данных сохраняется каждую минуту",
            },
            {
                salary: "500 000 ₸",
                sub: "средняя зарплата",
            },
        ]
    },
    {
        name: "Unity-developer",
        img: unitylogo,
        description: `Готовы ли вы отправиться в захватывающее путешествие в мир разработки игр? Откройте для себя увлекательную профессию разработчика 
        Unity и откройте безграничные возможности для своих творческих талантов! А наш курс “Разработка игр на Unity” поможет вам в этом!`,
        footer: [
            {
                salary: "более 2 млн",
                sub: "активных разработчиков на Unity",
            },
            {
                salary: "400 000 ₸",
                sub: "средняя зарплата",
            },
        ]
    },
    {
        name: "Frontend-developer",
        img: frontlogo,
        description: `Фронтенд-разработка – одна из самых востребованных областей программирования с впечатляющими перспективами. 
        Это программист, который работает над пользовательским интерфейсом сайта. Результат его труда – удобные и красивые страницы с интерактивными эффектами.`,
        footer: [
            {
                salary: "3600 компаний",
                sub: "ищут разработчиков",
            },
            {
                salary: "400 000 ₸",
                sub: "средняя зарплата",
            },
        ]
    },
]



export const Courses = () => {
    return (
        <Wrapper>
            <section className={styles.container} itemScope itemType="http://schema.org/Course">
                <HTag>Курсы</HTag>
                <section className={styles.courses__list}>
                    {coursesData.map((course) => (
                        <article key={course.name} className={styles.courses__item} itemProp="hasCourseInstance" itemScope itemType="http://schema.org/CourseInstance">
                            <header className={styles.courses__item__header}>
                                <h2 className={styles.courses__item__heading} itemProp="name">{course.name}</h2>
                            </header>
                            <div className={styles.courses__item__body}>
                                <img className={styles.courses__item__image} src={course.img} alt="Изображение курса Python-developer" itemProp="image" />
                                <p className={styles.courses__item__text} itemProp="description">{course.description}</p>
                            </div>
                            <footer className={styles.courses__item__footer} itemScope itemType="http://schema.org/EducationalOccupationalProgram">
                                <table className={styles.courses__item__table} itemScope itemType="http://schema.org/EducationalOccupationalProgram">
                                    <tbody>
                                        <tr >
                                            {course.footer.map((item, index) => (
                                                <td scope="row" key={index}>{item.salary}</td>
                                            ))}
                                        </tr>
                                        <tr >
                                            {course.footer.map((item, index) => (
                                                <td scope="row" className={styles.courses__item__line} key={index}><p>{item.sub}</p></td>
                                            ))}
                                        </tr>
                                    </tbody>
                                </table>
                                {/* <a href="/course-details" className={styles.courses__item__link} style={{ color: "#004d8c" }}>Подробнее</a> */}
                            </footer>
                        </article>
                    ))}
                </section>
            </section>
        </Wrapper>
    )
}
