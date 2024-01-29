export default {
  name: 'navigation', 
  type: 'document', 
  title: 'Navigation', 
  fields: [
    {
      name: 'title', 
      type: 'string', 
      title: 'Title'
    }, 
    {
      name: 'availability', 
      type: 'boolean', 
      title: 'Available'
    },
    {
      name: 'navigationLinks',
      type: 'object', 
      title: 'Navigation Links',
      fields: [
        {
          name: 'leftNavItems', 
          type: 'array', 
          title: 'Navigation items left',
          validation: Rule => Rule.unique(),
          of: [
            {
              name: 'link', 
              type: 'reference',
              title: 'Link', 
              to: [ 
                { 
                  type: 'work' 
                }
              ]
            }
          ] 
        }, 
        {
          name: 'logo', 
          type: 'image', 
          title: 'Logo', 
          fields: [
            {
              name: 'alt', 
              type: 'string', 
              title: 'Alternative text'
            }
          ]
        }, 
        {
          name: 'rightNavItems', 
          type: 'array', 
          title: 'Navigation items left',
          validation: Rule => Rule.unique(),
          of: [
            {
              name: 'link', 
              type: 'reference',
              title: 'Link', 
              to: [ 
                { 
                  type: 'about' 
                }
              ]
            }
          ] 
        }, 
      ]
    },
    {
      name: 'professionLeft', 
      type: 'string', 
      title: 'Profession left (first word)'
    }, 
    {
      name: 'professionRight', 
      type: 'string', 
      title: 'Profession right (last word)'
    }
  ]
}