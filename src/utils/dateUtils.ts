
// Generate a random date between 2025 and 2027
export const generateDoomsdayDate = (): Date => {
  // Define start and end range for doomsday
  const start = new Date(2025, 0, 1).getTime(); 
  const end = new Date(2027, 11, 31).getTime();
  
  // Generate random timestamp between start and end
  const randomTimestamp = start + Math.random() * (end - start);
  
  return new Date(randomTimestamp);
};

// Format date as DD.MM.YYYY
export const formatDate = (date: Date): string => {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  
  return `${day}.${month}.${year}`;
};

// Calculate time remaining to a target date
export const getTimeRemaining = (targetDate: Date): { days: number, hours: number, minutes: number, seconds: number } => {
  const total = targetDate.getTime() - new Date().getTime();
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  
  return { days, hours, minutes, seconds };
};
