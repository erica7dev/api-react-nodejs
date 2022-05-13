type HeaderProps = {
  title: string
}

const Header = ({ title }: HeaderProps) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  )
}

export default Header;