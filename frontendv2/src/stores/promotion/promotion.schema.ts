export interface IPromotionSchema {
  id: number;
  title: string;
  description: string;
  discount_percent: number;
  start_date: string;
  end_date: string;
}

export interface IPromotionGetAllRequestParams {
  page_id: number;
  page_size: number;
}