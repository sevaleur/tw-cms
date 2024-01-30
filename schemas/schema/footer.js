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
      name: 'emailIcon', 
      type: 'image', 
      title: 'Email icon', 
      fields: [
        {
          name: 'alt', 
          type: 'string', 
          title: 'Alternative text'
        }, 
        {
          name: 'email', 
          type: 'string', 
          title: 'Email adress',
          validation: Rule => Rule.required().email()
        }
      ]
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
              type: 'url', 
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