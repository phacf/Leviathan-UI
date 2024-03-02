import type { StorybookConfig } from "@storybook/react-webpack5";
import path from 'path';

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    {
      name: "@storybook/addon-styling-webpack",
      options: {
        rules: [
          {
            test: /\.css$/,
            sideEffects: true,
            use: [
              "style-loader",
              {
                loader: "css-loader",
                options: {
                  importLoaders: 1,
                },
              },
              {
                loader: "postcss-loader",
                options: {
                  implementation: require.resolve("postcss"),
                },
              },
            ],
          },
        ],
      },
    },
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  docs: {
    autodocs: "tag",
    defaultName: 'Documentation',
  },
  webpackFinal: async (config) => {
    // Resolve modules using the provided root directory
    config?.resolve?.modules?.push(path.resolve(__dirname, '../src'));

    // Add TypeScript support
    config?.module?.rules?.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('ts-loader'),
          options: {
            configFile: path.resolve(__dirname, '../tsconfig.json'),
          },
        },
      ],
      include: path.resolve(__dirname, '../src'),
    });

    config?.resolve?.extensions?.push('.ts', '.tsx');

    return config;
  },
};

export default config;
