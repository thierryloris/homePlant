import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";

import LinkOptional from "./index.vue";

describe("LinkOptional", () => {
  it("is a Vue instance", () => {
    const wrapper = mount(LinkOptional);
    expect(wrapper.vm).toBeTruthy();
  });

  it("matches snapshot", () => {
    const wrapper = mount(LinkOptional);
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("matches snapshot with link", () => {
    const wrapper = mount(LinkOptional, {
      props: {
        to: "/",
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
