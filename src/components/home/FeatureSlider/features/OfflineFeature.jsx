import React from 'react';

const DownloadCard = ({ item }) => (
  <div className="bg-white rounded-lg border overflow-hidden">
    <div className="relative h-48">
      <img 
        src={item.image} 
        alt={item.type} 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent">
        <div className="absolute bottom-0 p-4 text-white">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-medium text-lg">{item.type}</h3>
            <span className="text-sm opacity-90">{item.size}</span>
          </div>
          <div className="w-full bg-white/30 rounded-full h-1.5 mb-2">
            <div 
              className="bg-blue-500 h-1.5 rounded-full transition-all duration-500"
              style={{ width: `${item.downloadProgress}%` }}
            ></div>
          </div>
          <div className="text-xs opacity-80">
            Last updated: {item.lastUpdated}
          </div>
        </div>
      </div>
    </div>

    <div className="p-4">
      {item.areas && (
        <div className="mb-4">
          <h4 className="text-sm font-medium mb-2">Available Areas:</h4>
          <div className="flex flex-wrap gap-2">
            {item.areas?.map((area, index) => (
              <span key={index} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full">
                {area}
              </span>
            ))}
          </div>
        </div>
      )}

      {item.features && (
        <div className="mb-4">
          <h4 className="text-sm font-medium mb-2">Features:</h4>
          <div className="grid grid-cols-2 gap-2">
            {item.features?.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                <span>✓</span>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {item.languages && (
        <div className="mb-4">
          <h4 className="text-sm font-medium mb-2">Available Languages:</h4>
          <div className="flex gap-2">
            {item.languages?.map((lang, index) => (
              <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                {lang}
              </span>
            ))}
          </div>
        </div>
      )}

      {item.content && (
        <div className="mb-4">
          <h4 className="text-sm font-medium mb-2">Includes:</h4>
          <div className="grid grid-cols-2 gap-2">
            {item.content?.map((content, index) => (
              <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                <span>•</span>
                <span>{content}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      <button className="w-full mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors">
        <span>↓</span>
        <span>Download for offline use</span>
      </button>
    </div>
  </div>
);

const StorageInfo = ({ info }) => (
  <div className="bg-white rounded-lg border p-4">
    <h3 className="font-medium mb-4">Storage Information</h3>
    
    <div className="space-y-4">
      <div>
        <div className="flex justify-between text-sm mb-1">
          <span>Storage Used</span>
          <span className="text-blue-600">213 MB / {info.available}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className="bg-blue-600 h-2 rounded-full" style={{ width: '20%' }}></div>
        </div>
      </div>

      <div className="flex flex-col gap-2 text-sm">
        <div className="flex justify-between">
          <span>Recommended Space</span>
          <span>{info.recommended}</span>
        </div>
        <div className="flex justify-between">
          <span>Auto-Update</span>
          <span className="text-green-600">{info.autoUpdate ? 'Enabled' : 'Disabled'}</span>
        </div>
        <div className="flex justify-between">
          <span>WiFi Only</span>
          <span className="text-green-600">{info.wifiOnly ? 'Yes' : 'No'}</span>
        </div>
      </div>

      <div className="border-t pt-4">
        <h4 className="font-medium mb-2 text-sm">Available Offline:</h4>
        <div className="space-y-2">
          {info.offlineFeatures?.map((feature, index) => (
            <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
              <span className="text-green-500">✓</span>
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-2">
        <button className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm hover:bg-gray-200 transition-colors">
          Manage Storage
        </button>
        <button className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm hover:bg-gray-200 transition-colors">
          Update All
        </button>
      </div>
    </div>
  </div>
);

export const OfflineFeature = ({ data }) => {
  if (!data || !data.downloads || !data.storageInfo) {
    return (
      <div className="p-4 text-center text-gray-500">
        No offline content available
      </div>
    );
  }

  const downloadItems = Array.isArray(data.downloads) ? data.downloads : [];

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold mb-1">Access your plans offline</h2>
          <p className="text-gray-600">Download guides, maps, and essential information for offline use</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <span>Auto-sync:</span>
          <button className="px-3 py-1 bg-green-100 text-green-700 rounded-full">
            Enabled
          </button>
        </div>
      </div>

      <div className="grid grid-cols-[1fr,1fr,300px] gap-6">
        {downloadItems?.map((item) => (
          <DownloadCard key={item.type} item={item} />
        ))}
        <StorageInfo info={data.storageInfo} />
      </div>
    </div>
  );
}; 