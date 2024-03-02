import React from 'react';
import 'tailwindcss/tailwind.css'; // Importa as classes do Tailwind CSS

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  audioDescription?: string
  color: 'primary' | 'secondary' | 'primary_outline' | 'secondary_outline'
  size: 'large' | 'medium' | 'small'

}

export const Button = (props: ButtonProps) => {

  const { size, color, label, audioDescription } = props

  const sizes = {
    small: 'text-sm font-medium px-3 py-2',
    medium: 'px-5 py-2 font-medium',
    large: 'text-lg px-7 py-2 font-medium',
  }

  const styles = {
    primary: `cursor-pointer bg-primary-600 text-light-300 rounded-md `,
    primary_outline: `cursor-pointer text-primary-600 border-2 border-primary-600 rounded-md `,
    secondary: `cursor-pointer bg-secondary-400 text-eastern-blue-950 rounded-md `,
    secondary_outline: `cursor-pointer text-eastern-blue-950 border-2 border-secondary-400 rounded-md `,

  }





  return (
    <button
      className={`${styles[color]} ${sizes[size]}`}
      aria-label={label}
      {...props}
    >
      {label}
      {/* Inclui uma descrição de áudio para usuários de leitores de tela */}
      <span className="sr-only" aria-live="polite" aria-hidden="true">
        {audioDescription}
      </span>
    </button>
  )
}

