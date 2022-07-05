import { Meta, Story } from '@storybook/angular';
import Button from './button';
import { ButtonGroupComponent } from './button-group.component';


export default {
  title: 'Button Group',
  component: ButtonGroupComponent
} as Meta;

const Template: Story = (args) => ({
  props: args
});

export const FirstStory = Template.bind({});
FirstStory.storyName = 'Basic';
FirstStory.args = {
  buttons: [
    new Button('On-Site', 1),
    new Button('Produces', 2),
    new Button('Both', 3)
  ]
}

export const SecondStory = Template.bind({});
SecondStory.storyName = 'With Long Button Name';
SecondStory.args = {
  buttons: [
    new Button('Employees', 1),
    new Button('Materials Produced By The Selected Business Unit', 2),
    new Button('Equipment', 3)
  ]
}

export const ThirdStory = Template.bind({});
ThirdStory.storyName = 'With Many Buttons';
ThirdStory.args = {
  buttons: [
    new Button('Employees', 1),
    new Button('Materials', 2),
    new Button('Equipment', 3),
    new Button('Job Sites', 4),
    new Button('Places', 5),
    new Button('Deliveries', 6),
    new Button('Mass Hauls', 7),
    new Button('Events', 8),
    new Button('Targets', 9)
  ]
}
