import * as React from "react";
import { supabase } from '../supabaseClient';  // Import supabase client (adjust the path if necessary)

// Add coins for participating in an event
const participateInEvent = async (userId, eventId) => {
  const { data: event, error: eventError } = await supabase
    .from('Event')
    .select('Coin_reward')
    .eq('id', eventId)
    .single();

  if (eventError) {
    console.error('Error fetching event reward:', eventError);
    return false;
  }

  const reward = event.Coin_reward;

  // Fetch user coins
  const { data: user, error: userError } = await supabase
    .from('user_profile')
    .select('Coins')
    .eq('id', userId)
    .single();

  if (userError) {
    console.error('Error fetching user coins:', userError);
    return false;
  }

  const updatedCoins = user.Coins + reward;

  // Update user coins
  const { error: updateError } = await supabase
    .from('user_profile')
    .update({ Coins: updatedCoins })
    .eq('id', userId);

  if (updateError) {
    console.error('Error updating user coins:', updateError);
    return false;
  }

  return true;
};

export function UpcomingEvents({ userId }) {
  const [events, setEvents] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchEvents() {
      setLoading(true);
      const { data, error } = await supabase.from("Event").select("*");
      if (error) {
        console.error("Error fetching events:", error);
      } else {
        setEvents(data || []);
      }
      setLoading(false);
    }

    fetchEvents();
  }, []);

  const handleApply = async (eventId) => {
    setLoading(true);
    const success = await participateInEvent(userId, eventId);
    if (success) {
      alert('Thank you for participating! Coins have been added.');
    } else {
      alert('Error processing participation.');
    }
    setLoading(false);
  };

  if (loading) {
    return <div className="text-center">Loading events...</div>;
  }

  return (
    <section
      className="flex flex-col self-stretch px-6 py-11 bg-white text-zinc-800 max-md:px-5"
      aria-labelledby="events-heading"
    >
      <h1
        id="events-heading"
        className="self-center text-3xl font-semibold leading-none text-center mb-8"
      >
        Upcoming Events
      </h1>
      <ul className="w-full flex flex-col gap-4">
        {events.map((event) => (
          <li
            key={event.id}
            className="flex justify-between items-center bg-gray-100 rounded-md shadow-md px-6 py-4"
          >
            {/* Event Details */}
            <div>
              <div className="text-lg font-medium text-zinc-800">{event.Name}</div>
              <div className="text-sm text-zinc-600 mt-1">{event.Event_details}</div>
              <div className="text-sm text-zinc-500 mt-1">
                Date: {new Date(event.Date).toLocaleDateString()}
              </div>
              <div className="text-sm text-green-600 mt-1">
                Coin Reward: {event.Coin_reward}
              </div>
            </div>
            {/* Apply Button */}
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition"
              onClick={() => handleApply(event.id)}
            >
              Apply
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default UpcomingEvents;
