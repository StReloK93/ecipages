interface ShiftResult {
   formattedDate: string;
   smena: number;
}

/**
 * Smenani hisoblash funksiyasi
 * @param dateInput - Tekshirilayotgan vaqt (Date object)
 * @param startSmena1 - 1-smena boshlanish vaqti (HH:mm formatda)
 * @param endSmena1 - 1-smena tugash vaqti (HH:mm formatda)
 */
export function getShiftInfo(dateInput: Date, startSmena1: string = "09:40", endSmena1: string = "21:40"): ShiftResult {
   const dateObj = new Date(dateInput);

   // Vaqtni daqiqalarga o'girish uchun yordamchi funksiya
   const getMinutes = (timeStr: string): number => {
      const [h, m] = timeStr.split(":").map(Number);
      return h * 60 + m;
   };

   const currentMinutes = dateObj.getHours() * 60 + dateObj.getMinutes();
   const startMins = getMinutes(startSmena1);
   const endMins = getMinutes(endSmena1);

   let smena: number;

   // --- MANTIQ ---

   // 1. Agar hozirgi vaqt 1-smena boshlanishidan oldin bo'lsa (masalan 07:00)
   // Bu kechagi kunning 2-smenasi hisoblanadi
   if (currentMinutes < startMins) {
      smena = 2;
      dateObj.setDate(dateObj.getDate() - 1);
   }
   // 2. Agar hozirgi vaqt 1-smena oralig'ida bo'lsa (09:40 - 21:40)
   else if (currentMinutes >= startMins && currentMinutes < endMins) {
      smena = 1;
   }
   // 3. Agar hozirgi vaqt 1-smena tugagandan keyin bo'lsa (22:00)
   // Bu bugungi kunning 2-smenasi
   else {
      smena = 2;
   }

   // --- FORMATLASH ---
   const day = String(dateObj.getDate()).padStart(2, "0");
   const month = String(dateObj.getMonth() + 1).padStart(2, "0");
   const year = dateObj.getFullYear();
   const formattedDate = `${day}.${month}.${year}`;

   return {
      formattedDate,
      smena,
   };
}

export function formatDate(date: Date): {
   month: string;
   day: number;
   weekday: string;
} {
   const months = [
      "Yanvar",
      "Fevral",
      "Mart",
      "Aprel",
      "May",
      "Iyun",
      "Iyul",
      "Avgust",
      "Sentabr",
      "Oktabr",
      "Noyabr",
      "Dekabr",
   ];

   const weekdays = ["Yakshanba", "Dushanba", "Seshanba", "Chorshanba", "Payshanba", "Juma", "Shanba"];

   return {
      month: months[date.getMonth()],
      day: date.getDate(),
      weekday: weekdays[date.getDay()],
   };
}
