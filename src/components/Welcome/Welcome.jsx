import { useState } from "react";
import styles from "components/Welcome/welcome.module.css";
import { Select } from "antd";



// Filter `option.label` match the user type `input`
const filterOption = (input, option) =>
  (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

function Welcome() {
  const items = [
    {
      label: "Red Square",
      value: "Красная площадь",
    },
    {
      label: "Lyblyanka",
      value: "Люблянка",
    },
    {
      label: "Moscow City",
      value: "Моска-сити",
    },
  ];
  

  const [currStation, setCurrStaion] = useState("Moscow City");

  const onChange = (value) => {
    setCurrStaion(value);
    console.log(`selected ${value}`);
  };
  const onSearch = (value) => {
    console.log("search:", value);
  };

  return (
    <div>
      <h1>Погрузись в историю места с нами</h1>
      <p className={styles.desc}>
        Найди станцию, рядом с которой находишься, надевай наушники и погнали!
      </p>
      <Select
        showSearch
        placeholder="Выбери станцию"
        optionFilterProp="children"
        onChange={onChange}
        onSearch={onSearch}
        filterOption={filterOption}
        options={items}
      />
      <h2>Достопримечательности рядом с {currStation}</h2>
    </div>
  );
}

export default Welcome;
