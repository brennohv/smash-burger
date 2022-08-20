import { Story, Meta } from '@storybook/react'
import FoodCard, { FoodCardProps } from '.'

export default {
  title: 'FoodCard',
  component: FoodCard
} as Meta

export const Default: Story<FoodCardProps> = (args) => <FoodCard {...args} />

Default.args = {
  title: 'Super Bacon',
  description:
    'Pão brioche, 2 x smashed burger bovino 80g, 2 x queijo cheddar, bacon e maionese de bacon. Acompanha batata palito crocante.',
  src: '/img/Baacon.jpg',
  price: 11.5
}
