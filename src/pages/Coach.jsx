import React from 'react'
import { Card, CardContent } from '../components/ui/card'

const Coach = ({ user }) => {
  return (
    <div className="p-6">
      <Card>
        <CardContent className="p-6">
          <h2 className="text-lg font-semibold mb-4">AI Coach</h2>
          <p className="text-gray-600">
            AI coaching interface will be implemented here.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

export default Coach

