import { Wrapper } from "../../shared/ui";

import logo from "../../assets/logo.png";

import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.root}>
      <Wrapper>
        <div className={styles.header}>
          <img src={logo} alt="" />
        </div>
      </Wrapper>
    </header>
  );
};
