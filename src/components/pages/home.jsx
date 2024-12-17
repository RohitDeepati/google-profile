import { LoginButton } from "../login"
import { LogoutButton } from "../logout"
import Profile from "../profile"

export const Home = () => {
  return (
    <div>
      <LoginButton />
      <LogoutButton />
      {/* <Profile /> */}
    </div>
  )
}