
import styles from 'App.css'
import { Select } from "antd";
import NavButton from "components/NavButton/NavButton";


const filterOption = (input, option) =>
  (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

function App() {
  const items = [
    {
      label:(
        <>
          <div className={styles.optionContainer}>
            <p>Красная площадь</p>
          </div>
        </>
      ),
      value: "Красная площадь",
    },
    {
      label: (
        <>
          <div className={styles.optionContainer}>
            <p>Люблянка</p>
            <strong>По подписке</strong>
          </div>
        </>
      ),
      value: "Люблянка",
    },
    {
      label: (
        <>
          <div className={styles.optionContainer}>
            <p>Москvа-сити</p>
            <strong>По подписке</strong>
          </div>
        </>
      ),
      value: "Москvа-сити",
    },
  ];
  


  const onChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onSearch = (value) => {
    console.log("search:", value);
  };
  return (
    <>
      <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.title}>Погрузись в историю места!</h1>
        <p className={styles.desc}>
        Жми на кнопку Метро, найди станцию, рядом с которой находишься, надевай наушники и выбирай маршрут
        </p>
        <Select
          className={styles.drop}
          dropdownStyle={{
            fontSize:28
          }}
          showSearch
          placeholder="Метро                    "
          optionFilterProp="children"
          onChange={onChange}
          onSearch={onSearch}
          filterOption={filterOption}
          options={items}
        />
        <p>im.tour</p>
       
      </div>
      <NavButton/>
    </div>
  );
    </>
  )
}

export default App
