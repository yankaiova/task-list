import { render, screen, fireEvent } from "@testing-library/react";
import { TaskComponent } from "./Task";
import { vi } from "vitest";

describe("TaskComponent", () => {
  it("отображает задачу и переключает статус", () => {
    const toggleTask = vi.fn();
    render(
      <TaskComponent value="Test task" status={false} toggleTask={toggleTask} />
    );

    const checkbox = screen.getByRole("checkbox");
    const text = screen.getByText("Test task");

    expect(checkbox).not.toBeChecked();
    expect(text).toHaveStyle("text-decoration: none");

    fireEvent.click(checkbox);

    expect(toggleTask).toHaveBeenCalledWith("Test task");
  });
});
