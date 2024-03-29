import { BsFillDatabaseFill } from "react-icons/bs"
import { AiFillHome } from "react-icons/ai"
import { SiAboutdotme } from "react-icons/si"
import { MdPortrait } from "react-icons/md"
import { TfiGallery } from "react-icons/tfi"
import { TfiMenu} from "react-icons/tfi"
import { BiSolidNavigation } from 'react-icons/bi'
import { PiLinkSimple } from "react-icons/pi";

export const structure = (S) => 
  S.list()
    .title("Trae Warren")
    .items([
      S.listItem(
        { 
          icon: BsFillDatabaseFill 
        }
      )
        .title('Metadata')
        .child(
          S.document()
            .schemaType('metadata')
            .documentId('metadata')
        ),
        S.listItem(
          { 
            icon: BiSolidNavigation 
          }
        )
        .title('Navigation')
        .child(
          S.document()
          .schemaType('navigation')
          .documentId('navigation')
        ),
        S.listItem(
          { 
            icon: PiLinkSimple
          }
        )
        .title('Footer')
        .child(
          S.document()
          .schemaType('footer')
          .documentId('footer')
        ),
      S.listItem(
        { 
          icon: AiFillHome 
        }
      )
      .title('Home')
      .child(
        S.document()
        .schemaType('home')
        .documentId('home')
      ),
      S.listItem(
        { 
          icon: MdPortrait
        }
      )
      .title('Work')
      .child(
        S.list()
          .title('Work')
          .items([
            S.listItem(
              {
                icon: TfiMenu
              }
            )
            .title('Menu')
            .child(
              S.document()
                .schemaType('work')
                .documentId('work')
            ),
            S.listItem(
              {
                icon: TfiGallery
              }
            )
            .title("Galleries")
            .child(
              S.documentList()
              .title('Galleries')
              .filter('_type == "gallery"')
            )
          ]
        )
      ),
      S.listItem(
        { 
          icon: SiAboutdotme 
        }
      )
      .title('About')
      .child(
        S.document()
        .schemaType('about')
        .documentId('about')
      ),
  ])