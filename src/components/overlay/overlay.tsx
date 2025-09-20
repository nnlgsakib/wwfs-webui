import React from 'react'
import { Modal } from 'react-overlays'

export interface OverlayProps {
  show: boolean
  onLeave: () => void
  hidden: boolean
  children?: React.ReactNode
  className?: string
  // allow passing through any additional props to the underlying Modal
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

const Overlay: React.FC<OverlayProps> = ({ children, show, onLeave, className = '', hidden, ...props }) => {
  const handleEscapeKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation()
    onLeave()
  }

  const renderBackdrop: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => (
    <div className='fixed top-0 left-0 right-0 bottom-0 bg-black o-50' hidden={hidden} {...props} />
  )

  const ModalAny = Modal as unknown as React.ComponentType<any>

  return (
    <ModalAny
      {...props}
      show={show}
      className={`${className} fixed top-0 left-0 right-0 bottom-0 z-max flex items-center justify-around`}
      renderBackdrop={renderBackdrop}
      onEscapeKeyDown={handleEscapeKeyDown}
      onBackdropClick={onLeave}
    >
      {children}
    </ModalAny>
  )
}

export default Overlay
