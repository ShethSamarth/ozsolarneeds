import { Metadata } from "next"

import { Banner } from "@/components/banner"

export const metadata: Metadata = {
  title: "Contacts",
}

const Contacts = () => {
  return (
    <main>
      <Banner
        image="https://ozsolarneeds.com.au/assets/images/contact/large-contact.jpg"
        title="Contact"
        description="We would love to advice you on your solar needs."
      />
    </main>
  )
}

export default Contacts
