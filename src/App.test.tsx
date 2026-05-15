import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { render } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  beforeEach(() => {
    localStorage.clear();
    delete (window as any).app;
  });

  afterEach(() => {
    delete (window as any).app;
  });

  it("renders without crashing", () => {
    const { container } = render(<App />);
    expect(container.querySelector('[data-setfarm-root="US-001"]')).toBeInTheDocument();
  });

  it("exposes window.app after render", () => {
    render(<App />);
    expect(window.app).toBeDefined();
    expect(typeof window.app!.getState).toBe("function");
    expect(typeof window.app!.dispatch).toBe("function");
    expect(typeof window.app!.actions.startGame).toBe("function");
  });
});
