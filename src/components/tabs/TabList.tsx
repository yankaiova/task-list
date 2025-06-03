import { Tab, Tabs } from "@mui/material";

export const TabList = ({
  value,
  setActiveTab,
}: {
  value: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setActiveTab(newValue);
  };

  return (
    <Tabs value={value} onChange={handleChange}>
      <Tab label="all" value="all" />
      <Tab label="completed" value="completed" />
      <Tab label="active" value="active" />
    </Tabs>
  );
};
