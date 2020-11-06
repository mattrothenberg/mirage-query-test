import { useQuery } from "react-query";
import { fetchTodos } from "../api";

export function useTodos() {
  return useQuery("todos", fetchTodos);
}
