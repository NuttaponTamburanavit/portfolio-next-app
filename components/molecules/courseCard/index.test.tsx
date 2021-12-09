import React from "react";
import { render, screen } from "@testing-library/react";
import CourseCard from "./index";

test("renders component successfully", () => {
  render(<CourseCard />);
  const element = screen.getByTestId(/test/i);
  expect(element).toBe;
});
