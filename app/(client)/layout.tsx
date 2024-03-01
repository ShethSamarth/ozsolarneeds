import { Fab } from "./_components/fab"
import { Footer } from "./_components/footer"
import { Navbar } from "./_components/navbar"

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <Fab />
      {children}
      <Footer />
    </>
  )
}

export default ClientLayout
