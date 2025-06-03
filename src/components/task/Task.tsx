import { Checkbox, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import type { Task } from "../../types";
type PropsTaskComponent = Task & { toggleTask: (value: string) => void };
export const TaskComponent = ({
  value,
  status,
  toggleTask,
}: PropsTaskComponent) => {
  return (
    <ListItem>
      <ListItemIcon>
        <Checkbox
          edge="start"
          checked={status}
          onChange={() => toggleTask(value)}
          tabIndex={-1}
        />
      </ListItemIcon>
      <ListItemText
        style={{ textDecoration: status ? "line-through" : "none" }}
      >
        {value}
      </ListItemText>
    </ListItem>
  );
};
