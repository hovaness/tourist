import Logo from 'components/Logo/Logo'
import NavButton from 'components/NavButton/NavButton'

function LogoWithNav() {
  return (
    <div style={{
        position:'sticky',
        bottom:0,
    }}>
        <Logo/>
        <NavButton/>
    </div>
  )
}

export default LogoWithNav