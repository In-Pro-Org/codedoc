
import { 
  configuration,
  DefaultMarkdownCustomComponents,
  DefaultMarkdownCustomInlineComponents,
  DefaultToCMarkdownCustomComponents,
  DefaultToCMarkdownCustomInlineComponents,
} from '@codedoc/core';

import { formulaPlugin } from '@codedoc/core/components';
import { guessTitle } from '@codedoc/core/transport';

import { theme } from './theme';
import { Card } from './components/card';
import { Tag } from './components/tag';         // --> import the tag component itself
//import { CopyButton } from './components/copy-button';


export const config = /*#__PURE__*/configuration({
  theme,                                  // --> add the theme. modify `./theme.ts` for changing the theme.
  dest: {
    namespace: '/codedoc'                 // --> your github pages namespace. remove if you are using a custom domain.
  },
  src: {
    base: 'docs/md',
    pick: /\.md$/,
    drop: /(^_)|(\/_)/,
  },
  page: {
    title: {
      base: 'Codedoc'                     // --> the base title of your doc pages
    },
    favicon: '/docs/images/KostweinLogo.ico',
    fonts: {
      text: {
        url: 'https://fonts.googleapis.com/css?family=Roboto:300,400&display=swap', 
        name: 'Roboto',
        fallback: 'sans-serif'
      },
      code: {
        url: 'https://fonts.googleapis.com/css?family=Source+Code+Pro:300,400&display=swap',
        name: 'Source Code Pro',         // --> name of the font used for codes
        fallback: "'Courier New', Courier, monospace" // --> fallback font for codes  
      }
    },
    post: [
      (html, file) => {
        html.body.setAttribute('data-path', file.path);
      }
    ]
  },
  misc: {
    github: {
      user: 'In-Pro-Org',                 // --> your github username (where your repo is hosted)
      repo: 'codedoc',                    // --> your github repo name
    }
  },
  plugins: [
    formulaPlugin
  ],
  markdown: {
    customComponents: {
      ...DefaultMarkdownCustomComponents,
      ...DefaultToCMarkdownCustomComponents,
      //CopyButton,  // --> add the CopyButton component
      Card,
    },
    customInlineComponents: {
      ...DefaultMarkdownCustomInlineComponents,
      ...DefaultToCMarkdownCustomInlineComponents,
      Tag,
    }
  },

  
});
