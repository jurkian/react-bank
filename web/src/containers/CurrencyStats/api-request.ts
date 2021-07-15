import axios from 'axios';
import format from 'date-fns/format';

const makeAPIRequest = async (
   date: Date,
   currs: string[],
   baseCurrency: string,
   setCurrencyData: React.Dispatch<React.SetStateAction<never[]>>,
   setIsLoaded: React.Dispatch<React.SetStateAction<boolean>>
) => {
   // Remove baseCurrency from currs list - it wouldn't make any sense
   // Then, convert it from array to string (needed for API request)
   const currsLinked = currs.filter((curr) => curr !== baseCurrency).join(',');

   type ApiParams = {
      symbols: string;
      base: string;
      date?: string;
   };

   let apiParams: ApiParams = {
      symbols: currsLinked,
      base: baseCurrency,
   };

   // If date is set - add it to request
   if (date) {
      apiParams.date = format(date, 'yyyy.MM.dd');
   }

   try {
      const res = await axios.get('https://api.exchangeratesapi.io/latest', { params: apiParams });
      const currData = res?.data?.currData;

      setCurrencyData(currData);
      setIsLoaded(true);
   } catch (err) {
      setIsLoaded(false);
   }
};

export default makeAPIRequest;
