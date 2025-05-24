export const ButtonName = 'gt-button'
export type ButtonProps = {
    as?: string,
    type?: 'error' | 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'neutral'
    size?: 'small' | 'medium' | 'large'
    variant?: 'link' | 'solid' | 'outline' | 'soft' | 'subtle' | 'ghost'
    disabled?: boolean
    loading?: boolean
    block?: boolean
    icon?: string
}