type Card = {
   id: string;
   source_account: string;
   is_active: boolean;
   number: number;
   pin: number;
   expires_month: number;
   expires_year: number;
   daily_online_limit: number;
   daily_withdrawal_limit: number;
   monthly_online_limit: number;
   monthly_withdrawal_limit: number;
};

export default Card;
