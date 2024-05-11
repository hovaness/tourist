import { useState } from "react";
import styles from "pages/Welcome/welcome.module.css";
import { Select } from "antd";
import NavButton from "components/NavButton/NavButton";
import { Link } from "react-router-dom";
import Logo from "components/Logo/Logo";
import LogoWithNav from "components/LogoWithNav/LogoWithNav";



// Filter `option.label` match the user type `input`
const filterOption = (input, option) =>
  (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

function Welcome() {
  const items = [
    {
      label:(
        <>
        <Link to={'/tours/arbat'}> 
          <div className={styles.optionContainer}>
            <p>Арбатская</p>
          </div>
        </Link>
        </>
      ),
    },
    {
      label: (
        <>
        <Link to={'/tours/china-city'}>
            <div className={styles.optionContainer}>
                <p>Китай-город</p>
            </div>
        </Link>
        </>
      ),
    },
    {
      label: (
        <>
        <Link to={'/tours/kuznetsky'}>
          <div className={styles.optionContainer}>
            <p>Кузнецкий мост</p>
          </div>
        </Link>
        </>
      ),
      value: "Москvа-сити",
    },
    {
      label: (
        <>
        <Link to={'/tours/smolenskaya'}>
          <div className={styles.optionContainer}>
            <p>Смоленская</p>
            <strong>По подписку</strong>
          </div>
        </Link>
        </>
      ),
    },
    {
      label: (
        <>
        <Link to={'/tours/tverskaya'}>
          <div className={styles.optionContainer}>
            <p>Тверская</p>
            <strong>По подписку</strong>
          </div>
        </Link>
        </>
      ),
    },
    {
      label: (
        <>
        <Link to={'/tours/teatralnaya'}>
          <div className={styles.optionContainer}>
            <p>Театральная</p>
            <strong>По подписку</strong>
          </div>
        </Link>
        </>
      ),
    },
    {
      label: (
        <>
        <Link to={'/tours/prudi'}>
          <div className={styles.optionContainer}>
            <p>Чистые пруды</p>
            <strong>По подписку</strong>
          </div>
        </Link>
        </>
      ),
    }
  ];
  

  const [currStation, setCurrStaion] = useState("");

  const onChange = (value) => {
    console.log(value);
    setCurrStaion(value);
  };
  const onSearch = (value) => {
    console.log("search:", value);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.title}>Погрузись в историю места!</h1>
        <p className={styles.desc}>
        Жми на кнопку Метро, найди станцию, рядом с которой находишься, надевай наушники и выбирай маршрут
        </p>
        <Select
          className={styles.drop}
          size="middle"
          placeholder="Метро"
          optionFilterProp="children"
          onChange={onChange}
          onSearch={onSearch}
          filterOption={filterOption}
          options={items}
        />
      </div>
      <LogoWithNav/>
    </div>
  );
}

export default Welcome;
