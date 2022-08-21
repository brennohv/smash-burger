import { Story, Meta } from '@storybook/react'
import Menu, { MenuProps } from '.'

export default {
  title: 'Menu',
  component: Menu,
  argTypes: {
    inEnglish: { action: 'checked' }
  }
} as Meta

export const Default: Story<MenuProps> = (args) => <Menu {...args} />
