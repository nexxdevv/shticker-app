import Image from "next/image"
import React from "react"

// generate static params
export async function generateStaticParams() {
  return []
}

export default async function ItemPage({ params }) {
  const { id } = await params
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
  const response = await fetch(`${baseUrl}/api/tees`)
  const data = await response.json()

  const item = data.find((item) => item._id === id)
  return (
    <div>
      Item {id}
      <Image src={item.image} alt={item.name} width={300} height={300} />
    </div>
  )
}
