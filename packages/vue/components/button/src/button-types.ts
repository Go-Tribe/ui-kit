export const ButtonName = 'gt-button'
export const ButtonSize = {
    sm: 'sm',
    md: 'md',
    lg: 'lg'
}
export const ButtonRounded = {
    sm: 'sm',
    md: 'md',
    lg: 'lg'
}
export const ButtonVariant = {
    link: 'link',
    solid: 'solid',
    outline: 'outline',
    soft: 'soft',
    subtle: 'subtle',
    ghost: 'ghost'
}
export const ButtonType = {
    error: 'error',
    primary: 'primary',
    secondary: 'secondary',
    success: 'success',
    info: 'info',
    warning: 'warning',
    neutral: 'neutral'
}
export const ButtonColor = {
    error: 'error',
    primary: 'primary',
    secondary: 'secondary',
    success: 'success',
    info: 'info',
    warning: 'warning',
    neutral: 'neutral'
}
export type ButtonProps = {
    as?: string,
    type?: 'error' | 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'neutral'
    size?: 'sm' | 'md' | 'lg'
    rounded?: 'sm' | 'md' | 'lg'
    variant?: 'link' | 'solid' | 'outline' | 'soft' | 'subtle' | 'ghost'
    color?: 'error' | 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'neutral'
    disabled?: boolean
    loading?: boolean
    block?: boolean
    icon?: string
}