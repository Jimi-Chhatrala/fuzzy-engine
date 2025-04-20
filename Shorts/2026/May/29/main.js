//
// www.youtube.com/@BinaryMinutes
//

// A user cancels their ticket — remove from set.

const bookedSeats = new Set(['A1', 'A2', 'A3']);

bookedSeats.delete('A2');

console.log('Booked Seats:', bookedSeats);
