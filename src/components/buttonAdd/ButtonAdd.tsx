import { Button, Stack, TextField } from "@mui/material";
import { useState } from "react";
import type { Task } from "../../types";

export const ButtonAdd = ({ addTask }: { addTask: (task: Task) => void }) => {
  const [value, setValue] = useState<string>("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const saveTask = () => {
    addTask({ value: value, status: false });
    setValue("");
  };
  return (
    <Stack direction={"row"}>
      <TextField size="small" value={value} onChange={onChange} />
      <Button onClick={saveTask}>Save</Button>
    </Stack>
  );
};
