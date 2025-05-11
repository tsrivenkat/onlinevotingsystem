import { Outlet } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"

export default function AuthRoute() {
  const { loading } = useAuth()

  // Show loading state while checking authentication
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-600"></div>
      </div>
    )
  }

  // Render the route that can be accessed by both authenticated and unauthenticated users
  return <Outlet />
}

