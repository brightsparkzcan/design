import TutorCard from './tutor_card.svelte';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes
export default {
  title: 'BrightSparkz Design/TutorCard',
  component: TutorCard,
  argTypes: {
    theme: { control: 'color', defaultValue: '#011a27' },
    tutor_name: { control: 'text', defaultValue: 'Anjelica Shrestha' },
    date_format: { control: 'text', defaultValue: 'mmm dd yyyy' },
    availability: { control: 'text', defaultValue: 'Mornings, Afternoons, Evenings, Weekends' },
    hasCar: { control: 'boolean', defaultValue: true },
    gender: { control: { type: "select", options: ["m", "f"] }, defaultValue: 'm' },
    tutorOnline: { control: 'boolean', defaultValue: true },
    tutorPreference: { control: { type: 'select', options: ["5km", "10km", "15km", "20km","Online Only", "N/A"] }, defaultValue: '5km' },
    tutorStatus: {
      control: {
        type: 'select',
        options: [
          "Signed Up",
          "Interview Date Set", "Interview Date Accepted", "Interview Unsuccessful", "Interview Successful", "Active", "Inactive", "Screened - Successful", "Screened - On Hold", "Screened - Unsuccessful", "Sign Up Complete", "Stopped / Resigned", "Archived", "Screened - Incomplete"]
      }, defaultValue: 'Signed Up'
    },
    // onlineTutor: { control: 'boolean', defaultValue: false },
  },
};

// More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args
const Template = (args) => ({
  Component: TutorCard,
  props: args,
  // on: {
  //   click: args.onClick,
  // },
});

// More on args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};


