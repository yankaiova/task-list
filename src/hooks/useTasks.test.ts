import { renderHook, act } from "@testing-library/react";
import { useTasks } from "../hooks/useTasks";

describe("useTasks", () => {
  it("добавляет, переключает и очищает задачи", () => {
    const { result } = renderHook(() => useTasks());

    act(() => {
      result.current.addTask({ value: "Task 1", status: false });
      result.current.addTask({ value: "Task 2", status: true });
    });

    expect(result.current.list).toHaveLength(2);

    act(() => {
      result.current.toggleTask("Task 1");
    });
    expect(result.current.list[0].status).toBe(true);

    act(() => {
      result.current.clearCompleted();
    });
    expect(result.current.list).toHaveLength(0);
  });
});
