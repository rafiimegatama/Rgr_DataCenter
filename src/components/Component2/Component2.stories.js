import React from 'react';
import Component2 from './Component2';

export default {
  title: 'Component2',
  component: Component2,
};

const Template = (args) => <Component2 {...args} />;

export const Default = Template.bind({});
Default.args = {};