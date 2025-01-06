"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"

const ItemGrid = () => {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch("/api/tees")
        if (!response.ok) throw new Error("Failed to fetch items")
        const data = await response.json()
        setItems(data)
      } catch (err) {
        setError(err ? err.message : "Failed to fetch items")
      } finally {
        setLoading(false)
      }
    }

    fetchItems()
  }, [])
  return (
    <ul>
      {items.map((item) => (
        <li key={item._id}>
          <Link href={`/shop/tees/${item._id}`}>
            <Image src={item.image} alt={item.name} width={300} height={300} />
            <h2>{item.name}</h2>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default ItemGrid
