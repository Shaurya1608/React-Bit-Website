import React from 'react'
import Masonry from '../animations/Masonry';

const Page4 = () => {
    const items = [
    {
      id: "1",
      img: "https://picsum.photos/id/1015/600/900",
      url: "https://example.com/one",
      height: 400,
    },
    {
      id: "2",
      img: "https://picsum.photos/id/1011/600/750",
      url: "https://example.com/two",
      height: 250,
    },
    {
      id: "3",
      img: "https://picsum.photos/id/1020/600/800",
      url: "https://example.com/three",
      height: 600,
    },
     {
      id: "4",
      img: "https://plus.unsplash.com/premium_photo-1713483684044-a4273e6a5662?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/id/1020/600/800",
      url: "https://example.com/three",
      height: 700,
    },
     {
      id: "5",
      img: "https://images.unsplash.com/photo-1634921276487-c9651116f473?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/id/1020/600/800",
      url: "https://example.com/three",
      height: 800,
    },
     {
      id: "6",
      img: "https://images.unsplash.com/photo-1759308553474-ce2c768a6b7c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/id/1020/600/800",
      url: "https://example.com/three",
      height: 300,
    },
    {
      id: "7",
      img: "https://images.unsplash.com/photo-1759926967575-e3254dc7d531?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/id/1020/600/800",
      url: "https://example.com/three",
      height: 640,
    },
    {
      id: "8",
      img: "https://images.unsplash.com/photo-1582052978221-726aa6de5513?q=80&w=716&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/id/1020/600/800",
      url: "https://example.com/three",
      height: 290,
    },
    {
      id: "9",
      img: "https://images.unsplash.com/photo-1759409280534-61cf68103870?q=80&w=1458&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/id/1020/600/800",
      url: "https://example.com/three",
      height: 250,
    },
    {
      id: "10",
      img: "https://images.unsplash.com/photo-1762343945770-06c5fa101e8f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/id/1020/600/800",
      url: "https://example.com/three",
      height: 600,
    },
    {
      id: "11",
      img: "https://images.unsplash.com/photo-1761451661991-daef217f8964?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/id/1020/600/800",
      url: "https://example.com/three",
      height: 800,
    },
    {
      id: "12",
      img: "https://images.unsplash.com/photo-1761451661991-daef217f8964?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/id/1020/600/800",
      url: "https://example.com/three",
      height: 600,
    },
    {
      id: "13",
      img: "https://plus.unsplash.com/premium_photo-1760559944817-ae2ae2027be1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/id/1020/600/800",
      url: "https://example.com/three",
      height: 600,
    },
    
    // ... more items
];
  return (
    <Masonry
  items={items}
  ease="power3.out"
  duration={0.6}
  stagger={0.05}
  animateFrom="bottom"
  scaleOnHover={true}
  hoverScale={0.95}
  blurToFocus={true}
  colorShiftOnHover={false}
/>

  )
}

export default Page4