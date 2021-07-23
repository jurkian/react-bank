type Transfer = {
   id: string;
   payee_name: string;
   amount: number;
   currency: 'eur' | 'gbp';
   reference: string;
   payee_addr: string;
   status: 'failed' | 'pending' | 'complete';
   method: 'normal' | 'turbo';
   payee_acc_number: number;
   type: 'income' | 'expense';
   prev_balance: number;
   next_balance: number;
};

export default Transfer;
