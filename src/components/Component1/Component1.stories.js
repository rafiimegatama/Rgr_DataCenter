import React from 'react';
import Component1 from './Component1';

export default {
  title: 'Component1',
  component: Component1,
};

const Template = (args) => <Component1 {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Custom = Template.bind({});
Custom.args = {
  initialText: 'Please click me',
  clickedText: 'Thank you for clicking',
};