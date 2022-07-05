import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DatepickerComponent } from './datepicker.component';
import { Meta, Story, moduleMetadata, componentWrapperDecorator } from '@storybook/angular';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export default {
  title: 'Date Picker',
  component: DatepickerComponent,
  decorators: [
    moduleMetadata({
      imports: [DateInputsModule, BrowserAnimationsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }),
    componentWrapperDecorator(
      (story) => `<div style="max-width: 200px">${story}</div>`
    )
  ]
} as Meta;

const Template: Story = (args) => ({
  props: args
});

export const FirstStory = Template.bind({});
FirstStory.storyName = 'Basic';
FirstStory.args = {
  dateValue: new Date()
}

export const SecondStory = Template.bind({});
SecondStory.storyName = 'Disabled';
SecondStory.args = {
  dateValue: new Date(),
  disabled: true
}

export const ThirdStory = Template.bind({});
ThirdStory.storyName = 'With Past Dates Disabled';
ThirdStory.args = {
  dateValue: new Date(),
  disabledDates
}

function disabledDates(date: Date): boolean {
  const today = new Date().getDate();
  return date.getDate() < today;
}
