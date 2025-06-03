import { render, screen, fireEvent } from "@testing-library/react";
import { ButtonAdd } from "./ButtonAdd";
import { expect, vi } from "vitest";

describe("ButtonAdd", () => {
  it("добавляет задачу и очищает поле", () => {
    const addTask = vi.fn();
    render(<ButtonAdd addTask={addTask} />);

    const input = screen.getByRole("textbox");
    const button = screen.getByRole("button", { name: /save/i });

    fireEvent.change(input, { target: { value: "New Task" } });
    fireEvent.click(button);

    expect(addTask).toHaveBeenCalledWith({ value: "New Task", status: false });
    expect(input).toHaveValue("");
  });
});
