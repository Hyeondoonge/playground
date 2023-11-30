import React from 'react'
import * as Popover from '@radix-ui/react-popover'
import './style.css'

export default function PopoverDemo() {
  return (
    <Popover.Root>
      <Popover.Trigger className='PopoverTrigger'>I'm Popover using radix-ui</Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className='PopoverContent'>
          Some more info...
          <Popover.Arrow className='PopoverArrow' />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}
