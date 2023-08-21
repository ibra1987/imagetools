import type { MDXComponents } from 'mdx/types'
// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.
 
// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
     h2: ({ children }) => <h2 style={{ fontSize: "40px", color:"red" }}>{children}</h2>,
     p:({children})=> <p className='bg-white'>{children}</p>,
    ...components,
  }
}