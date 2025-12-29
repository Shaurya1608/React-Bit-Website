import React from 'react'
import InfiniteMenu from '../animations/InfiniteMenu';


const FinalInfinite = () => {
    const items = [
  {
    image: '/images/Carl_480x640.jpg',
    link: 'https://www.reactbits.dev/components/infinite-menu',
    title: 'Item 1',
    description: 'This is pretty cool, right?'
  },
   {
    image: '/images/Michele.jpg',
    link: 'https://google.com/',
    title: 'Item 5',
    description: 'This is pretty cool, right?'
  },
  {
    image: '/images/joel.jpg',
    link: 'https://google.com/',
    title: 'Item 2',
    description: 'This is pretty cool, right?'
  },
  {
    image: '/images/MEGGI.jpg',
    link: 'https://google.com/',
    title: 'Item 3',
    description: 'This is pretty cool, right?'
  },
  {
    image: '/images/Olivier.jpg',
    link: 'https://google.com/',
    title: 'Item 4',
    description: 'This is pretty cool, right?'
  }
];

  return (
    <div className='relative h-180 w-280'>
  <InfiniteMenu items={items}/>
</div>
  )
}

export default FinalInfinite