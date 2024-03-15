import Image from "next/image"

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Image className="animate-bounce" src="/logo.png" width={200} height={200} alt="Loading..." />
    </div>
  )
}

export default Loading
