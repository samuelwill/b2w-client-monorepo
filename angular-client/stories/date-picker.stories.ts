import { DatepickerComponent } from '../../projects/core-components/src/lib/datepicker/datepicker.component';
import { Meta, Story } from '@storybook/angular';

export default {
  title: 'Date Picker',
  component: DatepickerComponent
} as Meta;

const Template: Story = (args) => ({
  props: args
});

export const FirstStory = Template.bind({});
FirstStory.storyName = 'Simple Version';
FirstStory.args = {
  dateValue: new Date()
}
