let cardData = [
  {
    src: 'https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80',
    alt: 'Silver tabby kitten yawning',
  },
  {
    src: 'https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
    alt: 'Butterfly resting on cat\'s nose',
  },
  {
    src: 'https://images.unsplash.com/photo-1561948955-570b270e7c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=518&q=80',
    alt: 'Surprised white kitten',
  },
  {
    src: 'https://images.unsplash.com/photo-1571566882372-1598d88abd90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
    alt: 'Orange cat stretching',
  },
  {
    src: 'https://images.unsplash.com/photo-1513245543132-31f507417b26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80',
    alt: 'Brown and white grumpy cat',
  },
  {
    src: 'https://images.unsplash.com/photo-1549291748-630fcc1611bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
    alt: 'Brown cat walking on branch',
  },
  {
    src: 'https://images.unsplash.com/photo-1565506165343-81cc14780a4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
    alt: 'Silver tabby looking up',
  },
  {
    src: 'https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
    alt: 'Smiling brown tabby',

  },
  {
    src: 'https://images.unsplash.com/photo-1415369629372-26f2fe60c467?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
    alt: 'Cat and woman doing a high-five',
  },
  {
    src: 'https://images.unsplash.com/photo-1545249390-6bdfa286032f?ixlib=rb-1.2.1&auto=format&fit=crop&w=594&q=80',
    alt: 'Cat playing on scratching post',
  }
]

cardData = cardData.map((x, i) => {
  x.id = i + 1
  return x
})

export default cardData