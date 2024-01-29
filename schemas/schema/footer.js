export default {
  name: 'footer', 
  type: 'document', 
  title: 'Footer', 
  fields: [
    {
      name: 'title', 
      type: 'string', 
      title: 'Title'
    },
    {
      name: 'contactInformation', 
      type: 'array', 
      title: 'Contact Icons & Links', 
      of: [
        {
          name: 'icon', 
          type: 'image', 
          title: 'Link icon', 
          fields: [
            {
              name: 'alt', 
              type: 'string', 
              title: 'Alternative text'
            },
            {
              name: 'link', 
              type: 'string', 
              title: 'Link'
            }
          ]
        }
      ],
      options: {
        layout: 'grid',
      }
    }, 
  ]
}