import Home from "../../app/page";
import type { Meta, StoryObj } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

export default {
  title: "Pages/Home",
  component: Home,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
    layout: "fullscreen",
    nextjs: {
      appDirectory: true,
    },
  },
} as Meta<typeof Home>;

type Story = StoryObj<typeof Home>;

export const Start: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(await canvas.findByText(/Not Logged in/i)).toBeInTheDocument();
  },
};

// More on interaction testing: https://storybook.js.org/docs/7.0/react/writing-tests/interaction-testing
export const LogIn: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const loginButton = await canvas.getByRole("button", {
      name: /Log in/i,
    });
    await userEvent.click(loginButton);
  },
};

export const AddItems: Story = {
  play: async (context) => {
    const { canvasElement, step } = context;
    const canvas = within(canvasElement);
    await step("Log in", async () => LogIn.play(context));

    await step("Add item", async () => {
      const addItemButton = await canvas.getByRole("button", {
        name: /Add Item/i,
      });

      await userEvent.click(addItemButton);
      expect(await canvas.findByText(/Item #/i)).toBeInTheDocument();
    });
  },
};
