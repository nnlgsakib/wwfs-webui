// Minimal local typings to avoid friction with old @types/react-overlays
declare module 'react-overlays' {
  import * as React from 'react'
  export const Modal: React.ComponentType<any>
}

