export interface IPromotionSchema {
  id: number;
  title: string;
  description: string;
  discount_percent: number;
  start_date: Date;
  end_date: Date;
}

export interface IPromotionGetAllRequestParams {
  page_id: number;
  page_size: number;
}