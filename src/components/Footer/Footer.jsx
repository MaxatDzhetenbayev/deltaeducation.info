import React from "react";
import { motion } from "framer-motion";
import iframe from "react-iframe";
import { PTag, Wrapper } from "../../shared/ui";

import { AiOutlineInstagram, AiOutlineWhatsApp } from "react-icons/ai";
import { LiaTelegramPlane } from "react-icons/lia";

import styles from "./Footer.module.scss";

const socialLinkList = [
  {
    svg: <AiOutlineInstagram className={styles.instagram} />,
    link: "https://www.instagram.com/deltaeducation.info/",
  },
  {
    svg: <LiaTelegramPlane className={styles.telegram} />,
    link: "https://web.telegram.org/k/#@Delta_LLP",
  },
  {
    svg: <AiOutlineWhatsApp className={styles.whatsapp} />,
    link: "https://wa.me/+77713020220",
  },
];

export const Footer = () => {
  return (
    <footer className={styles.root}>
      <Wrapper>
        <div className={styles.footer}>
          <div className={styles.container}>
            <PTag variant="md" style={{ color: "#136ef6" }}>
              Delta Education
            </PTag>
            <PTag style={{ marginTop: 20, textAlign: "justify" }}>
              Школа программирования Delta Education - это курсы
              программирования с сильными преподавателями, с помощью которых Вы
              сможете стать лучше.
            </PTag>
            <ul className={styles.footer_sociallist}>
              {socialLinkList.map((item) => (
                <motion.li
                  key={item.link}
                  whileHover={{ scale: 1.3 }}
                  className={styles.footer_socialItem}
                >
                  <a target="_blank" href={item.link}>
                    {item.svg}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d635.7379730016511!2d80.25873532462822!3d50.404734157231445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x42f2652e414b061f%3A0x2fbd2797be1e7ee3!2zR2FnYXJpbiBzdHJlZXQgODIsINCh0LXQvNC10LkgMDcwMDAw!5e0!3m2!1sru!2skz!4v1692760982446!5m2!1sru!2skz"
            className={styles.map}
            loading="lazy"
          ></iframe>
          {/* <img src={logo} className={styles.footer_logo} alt="" />
          <ul className={styles.footer_sociallist}>
            {socialLinkList.map((item) => (
              <motion.li
                whileHover={{ scale: 1.3 }}
                className={styles.footer_socialItem}
              >
                <a target="_blank" href={item.link}>
                  {item.svg}
                </a>
              </motion.li>
            ))}
          </ul>

          <ul>	
            <li>
              <p>ТОО «Delta Education»</p>
            </li>
            <li>
              <p>Республика Казахстан, г. Семей</p>
            </li>
            <li>
              <p>ул. Гагарина 32</p>
            </li>
          </ul> */}
        </div>
      </Wrapper>
    </footer>
  );
};
