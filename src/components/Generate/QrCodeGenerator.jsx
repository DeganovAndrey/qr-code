import { QRCodeSVG } from "qrcode.react";
import { useState } from "react";
import s from "./QrCodeGenerator.module.css";
import { GENERATE_DATA } from "../../constants";

const QrCodeGenerator = () => {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

  const onClickHandler = () => {
    setResult(value);
    setValue("");

    const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || "[]");

    localStorage.setItem(GENERATE_DATA, JSON.stringify([...prevData, value]));
  };

  const onChangeInput = (e) => {
    setValue(e.target.value);
    setResult("");
  };

  return (
    <div className={s.container}>
      <input
        className={s.input}
        type="text"
        value={value}
        onChange={onChangeInput}
        placeholder="please, enter words"
      />
      <button type="button" onClick={onClickHandler} className={s.button}>
        Generate
      </button>
      {result !== "" && (
        <div className={s.qrWrapper}>
          <QRCodeSVG value={result} className={s.result} size={200} />
        </div>
      )}
    </div>
  );
};

export default QrCodeGenerator;
