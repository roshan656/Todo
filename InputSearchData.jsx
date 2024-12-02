import React, { useState } from "react";
import { useForm } from "react-hook-form";

function InputSearchData() {
  const { register, handleSubmit, reset } = useForm();
  const [tableData, setTableData] = useState("");
  const [show, setShow] = useState(false);

  const onSubmit = (data) => {
    if (data.name) {
      reset({ name: "" });
      setTableData(data.name);
      setShow(true);
    }
  };
  const FormColor =
    tableData === "pankaj" || tableData === "Pankaj"
      ? "red"
      : tableData === "ravindra" || tableData === "Ravindra"
      ? "blue"
      : "black";
  return (
    <>
      <h3> WelCome Ravindra Singh ji & Pankaj pundir ji 😃 </h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name")} /> <br /> <br />
        <input type="submit" /> <br /> <br />
        {show ? (
          <>
            <label> Hlo </label>
            <label style={{ color: FormColor }}>{tableData} </label>
            <label>Sir</label>
          </>
        ) : (
          ""
        )}
      </form>
    </>
  );
}

export default InputSearchData;
