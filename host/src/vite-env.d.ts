/// <reference types="vite/client" />

// declare module 'remote/RemoteButton' {
//     const RemoteButton: React.ComponentType;
//     export default RemoteButton;
// }

declare module 'remote/RemoteButton' {
    import React from 'react';
    const RemoteButton: React.FC<{
      text?: string;
      onClick?: () => void;
    }>;
    export default RemoteButton;
  }
  