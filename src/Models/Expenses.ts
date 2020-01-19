import { ExpenseType } from './ExpenseType';

export interface Expenses{
      expenseId:String;
	  expensedOn:Date;
	  expensedAmount:Number;
      expenseType:ExpenseType;ExpenseType
}