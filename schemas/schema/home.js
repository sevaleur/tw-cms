export default {
  name: 'home', 
  type: 'document', 
  title: 'Home', 
  fields: [
    {
      name: 'title', 
      type: 'string', 
      title: 'Title', 
    }, 
    {
      name: 'header', 
      type: 'object', 
      title: 'Header',
      fields: [
        {
          name: 'title', 
          type: 'text', 
          rows: 2,
          title: 'Title'
        },
        {
          name: 'description', 
          type: 'text', 
          title: 'Description'
        },
        {
          name: 'location', 
          type: 'text', 
          title: 'Location', 
          rows: 2,
        },
        {
          name: 'selfPortrait',
          type: 'image', 
          title: 'Image (Self Portrait)',
          fields: [
            {
              name: 'alt', 
              type: 'string', 
              title: 'Alternative text'
            }
          ]
        }
      ]
    },
    {
      name: 'showcaseTitle', 
      type: 'string', 
      title: 'Featured Work Title'
    },
    {
      name: 'showcase', 
      type: 'array', 
      title: 'Showcase', 
      of: [
        {
          name: 'link', 
          type: 'reference', 
          title: 'Showcase link', 
          to: [
            {
              type: 'gallery'
            }
          ]
        }
      ], 
      options: {
        layout: 'list'
      }
    },
    {
      name: 'aboutSection', 
      type: 'object', 
      title: 'About Section', 
      fields: [
        {
          name: 'title', 
          type: 'string', 
          title: 'Title'
        }, 
        {
          name: 'description', 
          type: 'text', 
          title: 'Description'
        },
        {
          name: 'learnMore', 
          type: 'string', 
          title: 'Learn More Link Text'
        }, 
        {
          name: 'leftImages', 
          type: 'object', 
          title: 'Left Side Images', 
          fields: [
            {
              name: 'largeImage', 
              type: 'image', 
              title: 'Large Image',
              fields: [
                {
                  name: 'alt', 
                  type: 'string', 
                  title: 'Alternative text'
                }
              ]
            },
            {
              name: 'smallImage', 
              type: 'image', 
              title: 'Small Image',
              fields: [
                {
                  name: 'alt', 
                  type: 'string', 
                  title: 'Alternative text'
                }
              ]
            },
          ]
        },
        {
          name: 'rightImages', 
          type: 'object', 
          title: 'Right Side Images', 
          fields: [
            {
              name: 'largeImage', 
              type: 'image', 
              title: 'Large Image',
              fields: [
                {
                  name: 'alt', 
                  type: 'string', 
                  title: 'Alternative text'
                }
              ]
            },
            {
              name: 'smallImage', 
              type: 'image', 
              title: 'Small Image',
              fields: [
                {
                  name: 'alt', 
                  type: 'string', 
                  title: 'Alternative text'
                }
              ]
            },
          ]
        }
      ]
    }
  ]
}