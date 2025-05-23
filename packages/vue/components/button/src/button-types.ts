export const ButtonName = 'gt-button'
export type ButtonProps = {
    type?: 'primary' | 'secondary' | 'tertiary' | 'danger' | 'link'
    size?: 'small' | 'medium' | 'large'
    disabled?: boolean
    loading?: boolean
    block?: boolean
    icon?: string
}