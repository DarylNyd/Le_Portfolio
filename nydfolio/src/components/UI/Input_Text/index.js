import React from 'react';
import { Input } from '@nextui-org/react';

export default function App() {
  return (
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
      <Input
        isDisabled
        type="email"
        label="Email"
        defaultValue="junior@nextui.org"
        className="max-w-xs"
      />
    </div>
  );
}
