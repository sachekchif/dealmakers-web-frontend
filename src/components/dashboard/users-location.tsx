import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function UsersLocation() {
  const locations = [
    { country: "United States", percentage: "38.6%" },
    { country: "Canada", percentage: "22.5%" },
    { country: "Mexico", percentage: "30.8%" },
    { country: "Other", percentage: "8.1%" },
  ]

  const colors = {
    "United States": "bg-blue-500",
    Canada: "bg-green-600",
    Mexico: "bg-green-400",
    Other: "bg-gray-800",
  }

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">Users by Location</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col md:flex-row gap-6 items-center">
        <div className="relative w-40 h-40">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="40" fill="none" stroke="#f3f4f6" strokeWidth="20" />
            {/* United States - 38.6% */}
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#818cf8"
              strokeWidth="20"
              strokeDasharray="251.2 251.2"
              strokeDashoffset="0"
              transform="rotate(-90 50 50)"
            />
            {/* Canada - 22.5% */}
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#059669"
              strokeWidth="20"
              strokeDasharray="251.2 251.2"
              strokeDashoffset="251.2 - (251.2 * 0.386)"
              transform="rotate(-90 50 50)"
            />
            {/* Mexico - 30.8% */}
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#34d399"
              strokeWidth="20"
              strokeDasharray="251.2 251.2"
              strokeDashoffset="251.2 - (251.2 * (0.386 + 0.225))"
              transform="rotate(-90 50 50)"
            />
            {/* Other - 8.1% */}
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#1f2937"
              strokeWidth="20"
              strokeDasharray="251.2 251.2"
              strokeDashoffset="251.2 - (251.2 * (0.386 + 0.225 + 0.308))"
              transform="rotate(-90 50 50)"
            />
          </svg>
        </div>
        <div className="flex-1 space-y-2">
          {locations.map((location) => (
            <div key={location.country} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${colors[location.country as keyof typeof colors]}`}></div>
                <span>{location.country}</span>
              </div>
              <span className="font-medium">{location.percentage}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
