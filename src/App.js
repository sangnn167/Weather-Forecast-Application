import { useCallback, useEffect, useState } from "react";
import "./App.css";

import { Abc } from "./components/Abc";
import { Input } from "./components/Input";

export const App = () => {
  const [count, setCount] = useState(0);
  const [object, setObject] = useState({
    email: "",
    name: "",
  });

  useEffect(() => {
    console.log(count);

    return () => {
      console.log("unmount");
    };
  }, [count]);

  const handleChangeObject = useCallback((value, key) => {
    setObject((oldObject) => ({ ...oldObject, [key]: value }));
  }, []);

  return (
    <div>
      <Abc count={count} setCount={setCount} />
      <div>{object.name}</div>
      <div>{object.email}</div>
      <Input
        value={object.name}
        onChange={(value) => handleChangeObject(value, "name")}
        placeholder="123"
      />
      <Input
        value={object.email}
        onChange={(value) => handleChangeObject(value, "email")}
        placeholder="234"
      />
    </div>
  );
};
