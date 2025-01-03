import React from 'react';

const ActivityItem = ({ activity, time }) => (
  <div className="flex gap-4">
    <div className="w-24 text-sm text-gray-500">{time}</div>
    <div className="flex-1">
      <div className="flex items-start justify-between">
        <div>
          <div className="font-medium">{activity.title}</div>
          <div className="text-sm text-gray-600 space-x-2">
            <span>{activity.duration}</span>
            <span>•</span>
            <span>{activity.location}</span>
          </div>
        </div>
        {activity.tickets && (
          <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
            {activity.tickets}
          </span>
        )}
      </div>
      
      {activity.description && (
        <p className="mt-2 text-sm text-gray-600">
          {activity.description}
        </p>
      )}

      {activity.tips && (
        <div className="mt-2 flex items-center gap-2">
          <span className="text-blue-500">💡</span>
          <div className="text-xs text-gray-600 flex gap-2">
            {activity.tips.map((tip, index) => (
              <span key={index} className="px-2 py-1 bg-blue-50 rounded-full">
                {tip}
              </span>
            ))}
          </div>
        </div>
      )}

      {activity.activities && (
        <div className="mt-2 flex items-center gap-2">
          <span>🏊‍♂️</span>
          <div className="text-xs text-gray-600 flex gap-2">
            {activity.activities.map((item, index) => (
              <span key={index} className="px-2 py-1 bg-gray-100 rounded-full">
                {item}
              </span>
            ))}
          </div>
        </div>
      )}

      {activity.rentals && (
        <div className="mt-2 flex items-center gap-2">
          <span>🏄‍♂️</span>
          <div className="text-xs text-gray-600 flex gap-2">
            {activity.rentals.map((item, index) => (
              <span key={index} className="px-2 py-1 bg-gray-100 rounded-full">
                {item}
              </span>
            ))}
          </div>
        </div>
      )}

      {activity.includes && (
        <div className="mt-2 flex items-center gap-2">
          <span>✨</span>
          <div className="text-xs text-gray-600 flex gap-2">
            {activity.includes.map((item, index) => (
              <span key={index} className="px-2 py-1 bg-gray-100 rounded-full">
                {item}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  </div>
);

const DayOverview = ({ day, tripStats }) => (
  <div className="space-y-4">
    <div className="bg-gray-50 rounded-lg p-4">
      <h3 className="font-medium mb-3">Day Overview</h3>
      <div className="text-sm text-gray-600 space-y-2">
        <div>{day.totalActivities} activities planned</div>
        <div>Total duration: {day.totalDuration}</div>
      </div>
    </div>

    <div className="bg-gray-50 rounded-lg p-4">
      <h3 className="font-medium mb-3">Weather</h3>
      <div className="text-sm space-y-2">
        <div className="flex items-center justify-between">
          <span>High</span>
          <span className="text-red-600">{day.weatherForecast.high}</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Low</span>
          <span className="text-blue-600">{day.weatherForecast.low}</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Condition</span>
          <span>{day.weatherForecast.condition}</span>
        </div>
        <div className="pt-2 border-t mt-2">
          <div className="flex items-center justify-between text-xs">
            <span>🌅 {day.weatherForecast.sunrise}</span>
            <span>🌇 {day.weatherForecast.sunset}</span>
          </div>
        </div>
      </div>
    </div>

    {tripStats && (
      <div className="bg-gray-50 rounded-lg p-4">
        <h3 className="font-medium mb-3">Trip Stats</h3>
        <div className="text-sm space-y-2">
          <div className="flex justify-between">
            <span>Total Days</span>
            <span>{tripStats.totalDays}</span>
          </div>
          <div className="flex justify-between">
            <span>Planned Activities</span>
            <span>{tripStats.plannedActivities}</span>
          </div>
          <div className="flex justify-between">
            <span>Reservations</span>
            <span>{tripStats.reservations}</span>
          </div>
          <div className="flex justify-between font-medium">
            <span>Est. Cost</span>
            <span>{tripStats.estimatedCost}</span>
          </div>
        </div>
      </div>
    )}
  </div>
);

export const ItineraryFeature = ({ data }) => (
  <div className="grid grid-cols-[2fr,1fr] gap-6">
    <div className="space-y-6">
      {data.days.map((day) => (
        <div key={day.date} className="bg-white rounded-lg border p-4">
          <h3 className="font-medium mb-4">{day.date}</h3>
          <div className="space-y-6">
            {day.activities.map((activity) => (
              <ActivityItem 
                key={activity.time} 
                activity={activity} 
                time={activity.time}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
    <DayOverview 
      day={data.days[0]} 
      tripStats={data.tripStats}
    />
  </div>
); 