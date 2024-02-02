import React from 'react'

interface ButtonProps {
    text: string;
    addedClass?: string;
    textClass?: string;
}

const Button: React.FC<ButtonProps> = ({text, addedClass, textClass}) => {
  return (
    <button className={`w-auto h-auto rounded-md ${addedClass}`}>
        <h1 className={`leading-relaxed font-sans ${textClass}`}>{text}</h1>
    </button>
  )
}

export default Button