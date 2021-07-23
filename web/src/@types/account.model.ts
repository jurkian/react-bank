type Account = {
   id: string;
   type: 'basic' | 'premium' | 'gold';
   is_active: boolean;
   sortcode: boolean;
   number: number;
   currency: 'eur' | 'gbp';
   current_balance: number;
};

export default Account;
