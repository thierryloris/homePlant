import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";

import TedUiButton from "./index.vue";

describe("TedUiButton", () => {
  it("renders correctly with default props", () => {
    const wrapper = mount(TedUiButton, {
      props: {
        label: "Bouton",
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("renders correctly with custom props", () => {
    const wrapper = mount(TedUiButton, {
      props: {
        label: "Bouton",
        font: "regular",
        color: "primary",
        variant: "contained",
        decoration: "icon",
        link: "/",
        align: "mauto",
        isTextOnLeft: true,
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("renders correctly with primary color and contained variant", () => {
    const wrapper = mount(TedUiButton, {
      props: {
        label: "Bouton",
        color: "primary",
        variant: "contained",
        decoration: "icon",
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("renders correctly with secondary color and contained variant", () => {
    const wrapper = mount(TedUiButton, {
      props: {
        label: "Bouton",
        color: "secondary",
        variant: "contained",
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("renders correctly with secondary color and outlined variant", () => {
    const wrapper = mount(TedUiButton, {
      props: {
        label: "Bouton",
        color: "secondary",
        variant: "outlined",
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("renders correctly with secondary color and shadow variant", () => {
    const wrapper = mount(TedUiButton, {
      props: {
        label: "Bouton",
        color: "secondary",
        variant: "shadow",
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("renders correctly with secondary color and right variant", () => {
    const wrapper = mount(TedUiButton, {
      props: {
        label: "Bouton",
        color: "secondary",
        variant: "right",
        isTextOnLeft: true,
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("renders correctly with transparent color and text variant", () => {
    const wrapper = mount(TedUiButton, {
      props: {
        label: "Bouton",
        color: "transparent",
        variant: "text",
        isTextOnLeft: true,
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("renders correctly with transparent color, text variant, and bold font", () => {
    const wrapper = mount(TedUiButton, {
      props: {
        label: "Bouton",
        color: "transparent",
        variant: "text",
        font: "bold",
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
