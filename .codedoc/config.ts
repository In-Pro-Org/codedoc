
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
import { Tag } from './components/tag';         // --> import the tag component itself

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
    favicon: '/docs/images/KostweinLogo.ico'
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
      ...DefaultToCMarkdownCustomComponents
    },
    customInlineComponents: {
      ...DefaultMarkdownCustomInlineComponents,
      ...DefaultToCMarkdownCustomInlineComponents,
      Tag,
    }
  },
});
