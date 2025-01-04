export const features = [
    {
      id: 1,
      title: "Add places from guides with 1 click",
      description: "We crawled the web so you don't have to. Easily add mentioned places to your plan.",
      mockupContent: {
        type: "browser",
        content: {
          tags: ["TRIPADVISOR", "LONELY PLANET", "POPULAR BLOGS"],
          preview: {
            title: "Lake Louise Mountain Trail",
            description: "Scenic mountain trail with panoramic views...",
            image: "https://images.unsplash.com/photo-1439853949127-fa647821eba0"
          }
        }
      },
      button: "Add to plan →"
    },
    {
      id: 2,
      title: "Expense tracking and splitting",
      description: "Keep track of your budget and split the cost between your tripmates.",
      mockupContent: {
        type: "interface",
        content: {
          total: "$2345.10",
          budget: "$3000",
          expenses: [
            {
              icon: "✈️",
              title: "SFO to HNL",
              date: "Feb 15 • Flight",
              amount: "$890.12"
            },
            {
              icon: "🏨",
              title: "Waikiki Hotel Resort and Spa",
              date: "Feb 15 • Lodging",
              amount: "$1230.89"
            }
          ],
          actions: ["Edit budget", "Debt summary"]
        }
      }
    },
    {
      id: 3,
      title: "Collaborate with friends in real time",
      description: "Plan along with your friends with live syncing and collaborative editing.",
      mockupContent: {
        type: "collaboration",
        content: {
          users: ["NV", "OM", "HV", "PK"],
          actions: ["Connect", "Forward"]
        }
      }
    },
    {
      id: 4,
      title: "Checklists for anything",
      description: "Stay organized with a packing list, to-do list, shopping list, any kind of list",
      mockupContent: {
        type: "checklist",
        content: {
          title: "Packing checklist",
          items: [
            { text: "Boarding pass", checked: true },
            { text: "Cash / foreign currency", checked: true },
            { text: "Credit and debit cards", checked: true },
            { text: "Driver's license", checked: true }
          ],
          action: "Add 12 items to checklist"
        }
      }
    },
    {
      id: 5,
      title: "Get personalized recommendations",
      description: "Find the best places to visit with smart recommendations based on your itinerary.",
      mockupContent: {
        type: "recommendations",
        content: {
          items: [
            { icon: "🏖️", title: "Waikiki Beach", rating: 4.8 },
            { icon: "🌋", title: "Diamond Head", rating: 4.9 },
            { icon: "🍜", title: "Marukame Udon", rating: 4.7 }
          ]
        }
      }
    },
    {
      id: 6,
      title: "Import flight and hotel reservations",
      description: "Connect or forward your emails to get it magically added into your trip plan.",
      mockupContent: {
        type: "import",
        content: {
          email: "trips@wanderlog.com",
          providers: [
            { icon: "✈️", name: "United Airlines" },
            { icon: "🏨", name: "Hilton Hotels" },
            { icon: "🚗", name: "Enterprise" }
          ]
        }
      }
    }
  ]; 