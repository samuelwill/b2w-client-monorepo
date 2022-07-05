import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
import '@angular/localize/init';
setCompodocJson(docJson);

const viewports = {
  standardIPad: {
    name: 'Standard iPad',
    styles: {
      width: '1024px',
      height: '768px',
    }
  },
  iPadPro: {
    name: 'iPad Pro',
    styles: {
      width: '1366px',
      height: '1024px',
    }
  },
  standardLaptop: {
    name: 'Standard Laptop',
    styles: {
      width: '1366px',
      height: '768px',
    }
  },
  iPhoneXR: {
    name: 'iPhone 11',
    styles: {
      width: '414px',
      height: '896px',
    }
  }
}

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: { inlineStories: true },
  viewport: {
    viewports
  }
}
