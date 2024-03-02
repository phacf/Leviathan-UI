import React from 'react';
import 'tailwindcss/tailwind.css'; // Importa as classes do Tailwind CSS

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  audioDescription?: string

}

export const Button = (props: ButtonProps) => {
  return (
    <button
      className={`cursor-pointer`}
      aria-label={props.label}
      {...props}
    >
      {props.label}
      {/* Inclui uma descrição de áudio para usuários de leitores de tela */}
      <span className="sr-only" aria-live="polite" aria-hidden="true">
        {props.audioDescription}
      </span>
    </button>
  )
}

