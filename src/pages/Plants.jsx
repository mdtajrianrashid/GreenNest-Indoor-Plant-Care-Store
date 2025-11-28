import React, { useEffect, useState } from 'react'
import PlantCard from '../components/PlantCard'

export default function Plants() {
  const [plants, setPlants] = useState([])

  useEffect(() => {
    fetch('/plants.json')
      .then(res => res.json())
      .then(data => setPlants(data))
      .catch(err => console.error(err))
  }, [])

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">All Plants</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plants.map(p => <PlantCard key={p.plantId} plant={p} />)}
      </div>
    </div>
  )
}