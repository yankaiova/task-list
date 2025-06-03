import { useState } from "react";
import { ButtonAdd } from "./components/buttonAdd/ButtonAdd";
import type { Task } from "./types";
import { Box, Button, Stack, Typography } from "@mui/material";
import { TabList } from "./components/tabs/TabList";
import { TaskComponent } from "./components/task/Task";
import { useTasks } from "./hooks/useTasks";

import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const {
    clearCompleted,
    addTask,
    toggleTask,
    totalCompletedTask,
    getActiveList,
  } = useTasks();

  const filteredList = getActiveList(activeTab);

  return (
    <div>
      <ButtonAdd addTask={addTask} />
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <TabList value={activeTab} setActiveTab={setActiveTab} />
        <div>
          {filteredList.map((task: Task) => (
            <TaskComponent
              key={task.value}
              value={task.value}
              status={task.status}
              toggleTask={toggleTask}
            />
          ))}
        </div>
      </Box>
      <Stack
        mt={"20px"}
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Typography color="info">completed {totalCompletedTask}</Typography>
        <Button variant="outlined" onClick={clearCompleted}>
          Clear completed
        </Button>
      </Stack>
    </div>
  );
}

export default App;
