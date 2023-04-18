import { Outlet } from "react-router-dom"

type Props = {}

const ClientLayout = (props: Props) => {
  return (
      <div>ClientLayout
          <Outlet />
    </div>
  )
}

export default ClientLayout