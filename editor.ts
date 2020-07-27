import Quill from 'quill/core'

import Toolbar from 'quill/modules/toolbar'
import SnowTheme from 'quill/themes/snow'

import Bold from 'quill/formats/bold'
import Italic from 'quill/formats/italic'
import Header from 'quill/formats/header'
import List, {ListItem} from 'quill/formats/list'
import Underline from 'quill/formats/underline'
import Link from 'quill/formats/link'
import Image from 'quill/formats/image'

import 'quill/dist/quill.snow.css'
import './editor.sass'


Quill.register({
  'modules/toolbar': Toolbar,
  'themes/snow': SnowTheme,
  'formats/bold': Bold,
  'formats/italic': Italic,
  'formats/header': Header,
  'formats/list': List,
  'formats/list-item': ListItem,
  'formats/underline': Underline,
  'formats/link': Link,
  'formats/image': Image
})

const toolbarOptions = [
  ['bold', 'italic', 'underline', 'image'],
  [{'header': 1}, {'header': 2}],
  [{'list': 'ordered'}, {'list': 'bullet'}, {'list': 'check'}],
  ['clean']
]

export const editor = new Quill(
  '#editorArea',
  {
    modules: {
      toolbar: toolbarOptions
    },
    theme: 'snow'
  }
)
