import Stories from 'components/stories'
import Button from 'components/button'

import stl from './Stories.module.scss'

const fill = {
  arg: 'Fill',
  variant: 'fill',
  label: 'Button',
  icon: (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={stl.btnIcon}
    >
      <path d="M13.2284 0.91743L1.16052 7.87957C0.689261 8.15035 0.749145 8.80647 1.2178 9.00435L3.98547 10.1656L11.4657 3.57315C11.6089 3.44557 11.812 3.64084 11.6897 3.78925L5.41748 11.4309V13.5269C5.41748 14.1413 6.15952 14.3835 6.52403 13.9383L8.17734 11.9256L11.4215 13.2847C11.7912 13.441 12.213 13.2092 12.2807 12.8109L14.1553 1.56313C14.2438 1.0372 13.6788 0.657065 13.2284 0.91743Z" />
    </svg>
  ),
}
const bordered = {
  arg: 'Bordered',
  variant: 'bordered',
  label: 'Button',
  icon: (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={stl.btnIcon}
    >
      <path d="M13.2284 0.91743L1.16052 7.87957C0.689261 8.15035 0.749145 8.80647 1.2178 9.00435L3.98547 10.1656L11.4657 3.57315C11.6089 3.44557 11.812 3.64084 11.6897 3.78925L5.41748 11.4309V13.5269C5.41748 14.1413 6.15952 14.3835 6.52403 13.9383L8.17734 11.9256L11.4215 13.2847C11.7912 13.441 12.213 13.2092 12.2807 12.8109L14.1553 1.56313C14.2438 1.0372 13.6788 0.657065 13.2284 0.91743Z" />
    </svg>
  ),
}
const transparent = {
  arg: 'Transparent',
  variant: 'transparent',
  label: 'Button',
  icon: (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={stl.btnIcon}
    >
      <path d="M13.2284 0.91743L1.16052 7.87957C0.689261 8.15035 0.749145 8.80647 1.2178 9.00435L3.98547 10.1656L11.4657 3.57315C11.6089 3.44557 11.812 3.64084 11.6897 3.78925L5.41748 11.4309V13.5269C5.41748 14.1413 6.15952 14.3835 6.52403 13.9383L8.17734 11.9256L11.4215 13.2847C11.7912 13.441 12.213 13.2092 12.2807 12.8109L14.1553 1.56313C14.2438 1.0372 13.6788 0.657065 13.2284 0.91743Z" />
    </svg>
  ),
}

const ButtonStory = () => (
  <Stories
    argList={[fill, bordered, transparent]}
    template={args => <Button {...args} />}
  />
)

export default ButtonStory