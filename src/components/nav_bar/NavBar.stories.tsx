import { Meta, StoryObj } from "@storybook/react";
import { NavBar} from "./NavBar";
import { mockNavBarProps } from "./NavBar.mocks";

export default {
  // Update the title to match the component type
  title: "Components/NavBar",
  component: NavBar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
    layout: "fullscreen",
  },
} as Meta<typeof NavBar>;

export const Base: StoryObj<typeof NavBar> = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: mockNavBarProps.base,
  // More on parameters: https://storybook.js.org/docs/react/writing-stories/parameters
  parameters: {},
  // More on interactions: https://storybook.js.org/docs/react/essentials/interactions
  play: () => {
    // Add some interactions here
  },
};