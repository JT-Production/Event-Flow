interface EventType {
  event_id: string;
  name: string;
  date_human_readable: string;
  description: string;
  thumbnail: string;
  start_time: string;
  end_time: string;
  ticket_links: {
    link: string;
  };
  venue: {
    name: string;
    phone_number: string;
    city: string;
    country: string;
    district: string;
    full_address: string;
    google_id: string;
    latitude: number;
    longitude: number;
    rating: number;
    review_count: number;
    website: string
    subtype: string
  };
  tags: string[];
  
}

interface FilterProps{
  location: string;
  date: string;
  eventType: string;
  category: string;
  handleSearch: () => void;
  setLocation: (value: string) => void;
  setDate: (value: string) => void;
  setEventType: (value: string) => void;
  setCategory: (value: string) => void;
}

